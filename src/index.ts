import express, { NextFunction, Request, Response } from "express";
import { route } from "./routes";
import "express-async-errors";

const app = express();

app.use(route);
app.use(express.json());
app.listen(3001, () => console.log("server online"));

app.use((err: Error, req: Request, res: Response, next: NextFunction
    ) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error.",
  });
});
