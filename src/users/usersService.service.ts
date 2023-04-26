import { prismaClient } from "../Prisma";
import { Prisma } from "@prisma/client";
import { hash } from "bcryptjs";
class UsersService {
  async create({ name, email, password, telefone, subscriber }: Prisma.usersCreateInput) {
    const criptografy = await hash(password, 8);
    const create = await prismaClient.users.create({
      data: {
        name,
        email,
        password: criptografy,
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
