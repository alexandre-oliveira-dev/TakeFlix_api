import { Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthendicade(req: Request, res: Response) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  try {
    const { sub } = verify(authToken, process.env.JWT_SECRETS) as Payload;

    return res.json(sub);
  } catch (error) {
    return res.status(401).end();
  }
}
