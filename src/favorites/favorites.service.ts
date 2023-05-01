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
      where: { usersId: id },
      take,
      skip,
      orderBy,
    });
    return findAllByUserId;
  }

  async deleteById(id: string) {
    console.log(id);
    const deletefav = await prismaClient.favorites.delete({
      where: {
        id: id,
      },
    });
    return deletefav;
  }
}
export { FavoritesService };
