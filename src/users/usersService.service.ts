import { prismaClient } from "../Prisma";
import { Prisma } from "@prisma/client";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

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

  async loginSession(email: string, password: string) {
    const hasUser = await prismaClient.users.findFirst({
      where: {
        email: email,
      },
    });
    const passwordCompare = await compare(password, hasUser.password);
    if (!passwordCompare) {
      throw new Error("password is invalid!");
    }
    if (!hasUser) {
      throw new Error("user not exists!");
    }

    const token = sign(
      {
        name: hasUser.name,
        email: email,
      },
      process.env.JWT_SECRETS,
      {
        subject: hasUser.id,
        expiresIn: "1d",
      }
    );

    return {
      id: hasUser.id,
      name: hasUser.name,
      email: hasUser.email,
      token: token,
    };
  }
}
export { UsersService };
