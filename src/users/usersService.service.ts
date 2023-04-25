import { prismaClient } from "../Prisma";
import { Prisma } from "@prisma/client";

class UsersService {
  async create({ name, email, password, telefone,subscriber }: Prisma.usersCreateInput) {
    const hasUser = await prismaClient.users.findFirst({ where: { email: email } });

    if (hasUser) {
      throw "user aleredy exists";
    }
    const create = await prismaClient.users.create({
      data: {
        name,
        email,
        password,
        telefone,
        subscriber,
      },
      select: {
        name: true,
        email: true,
        telefone: true,
        subscriber: true,
      },
    });
    return create;
  }

  async findAll() {
    const findall = await prismaClient.users.findMany({
      select: {
        name: true,
        email: true,
        telefone: true,
        subscriber: true,
      },
    });
    return findall;
  }
}
export { UsersService };
