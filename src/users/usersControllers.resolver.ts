import { Request, Response } from "express";
import { UsersService } from "./usersService.service";

const service = new UsersService();

class UserController {
   async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password, telefone, subscriber } = req.body;
      const createdUser = await service.create({
        name,
        email,
        password,
        telefone,
        subscriber,
      });

      res.json(createdUser);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async findAll(req: Request, res: Response) {
    const findall = await service.findAll();
    return res.json(findall);
  }
}

export { UserController };
