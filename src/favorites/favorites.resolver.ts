import { Request, Response } from "express";
import { FavoritesService } from "./favorites.service";
import { Prisma } from "@prisma/client";

const service = new FavoritesService();
class FavoritesController {
  async create(req: Request, res: Response) {
    try {
      const { title, imdid, avaliation, type, usersId }: Prisma.favoritesUncheckedCreateInput =
        req.body;
      const create = await service.create({
        title,
        imdid,
        avaliation,
        type,
        usersId,
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
    const { id } = req.params;
    const { take, skip, orderBy }: Prisma.favoritesFindManyArgs = req.body;

    const findAllByUserId = await service.findAllByUserId(id, { take, skip, orderBy });
    return res.json(findAllByUserId)
  }
}

export { FavoritesController };
