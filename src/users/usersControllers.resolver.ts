import { Request, Response } from "express";
import { UsersService } from "./usersService.service";
import { PassThrough } from "stream";
import { Prisma } from "@prisma/client";

const service = new UsersService();

class UserController {
  async create(req: Request, res: Response) {
    console.log(req.body);
    const { name, email, password, telefone, subscriber } = req.body;

    try {
      const createdUser = await service.create({
        name,
        email,
        password,
        telefone,
        subscriber,
      });

      return res.json(createdUser);
    } catch (error) {
      res.status(500).json({ error });
      console.log(error);
    }
  }

  async findAll(req: Request, res: Response) {
    const { skip, take }: Prisma.usersFindManyArgs = req.body;

    const findall = await service.findAll({ skip, take });
    return res.json({
      ...findall,
      total: findall.length,
    });
  }

  async loginSession(req: Request, res: Response) {
    const { email, password } = req.body;
    const createSession = await service.loginSession(email, password);

    return res.json(createSession);
  }
}

export { UserController };
