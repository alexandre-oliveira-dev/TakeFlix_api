import { Prisma } from "@prisma/client";
import { prismaClient } from "../Prisma";

class FavoritesService {
  async create({ title, imdid, avaliation, type, usersId }: Prisma.favoritesUncheckedCreateInput) {
    const create = await prismaClient.favorites.create({
      data: {
        title,
        imdid,
        avaliation,
        type,
        usersId,
      },
    });
    return create;
  }

  async findAll() {
    const findall = await prismaClient.favorites.findMany();
    return findall;
  }

  async findAllByUserId(id: string, { take, skip, orderBy }: Prisma.favoritesFindManyArgs) {
    const findAllByUserId = await prismaClient.favorites.findMany({
      where: { id: id },
      take,
      skip,
      orderBy,
    });
    return findAllByUserId;
  }
}
export { FavoritesService };
