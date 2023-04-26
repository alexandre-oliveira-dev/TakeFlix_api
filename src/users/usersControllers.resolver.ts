import { Request, Response } from "express";
import { UsersService } from "./usersService.service";

const service = new UsersService();

class UserController {
  async create(req: Request, res: Response) {
    console.log(req.body)
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
      console.log(error)
    }
  }

  async findAll(req: Request, res: Response) {
    const findall = await service.findAll();
    return res.json(findall);
  }
}

export { UserController };
