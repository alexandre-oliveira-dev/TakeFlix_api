import { Request, Response } from "express";
import { UsersService } from "./usersService.service";

const service = new UsersService();

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password, telefone,subscriber } = req.body;
    const create = await service.create({
      name:name,
      email:email,
      password:password,
      telefone:telefone,
      subscriber
    });

    return res.json(create);
  }

  async findAll(req: Request, res: Response) {
    const findall = await service.findAll();
    return res.json(findall)
  }
}

export {UserController}