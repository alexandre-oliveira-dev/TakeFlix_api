import { Request, Response } from "express";
import { FavoritesService } from "./favorites.service";
import { Prisma } from "@prisma/client";

const service = new FavoritesService();
class FavoritesController {
  async create(req: Request, res: Response) {
    try {
      const {
        title,
        imdid,
        avaliation,
        type,
        usersId,
        poster_path,
      }: Prisma.favoritesUncheckedCreateInput = req.body;
      const create = await service.create({
        title,
        imdid,
        avaliation,
        type,
        usersId,
        poster_path,
      });
      return res.json(create);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }

  async findAll(req: Request, res: Response) {
    const findall = await service.findAll();
    return res.json(findall);
  }

  async findAllByUserId(req: Request, res: Response) {
    const { userId } = req.params;
    const { take, skip, orderBy }: Prisma.favoritesFindManyArgs = req.body;

    const findAllByUserId = await service.findAllByUserId(userId, { take, skip, orderBy });
    return res.json(findAllByUserId);
  }

  async deleteById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const delet = await service.deleteById(id);
      return res.json(delet);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
}

export { FavoritesController };
