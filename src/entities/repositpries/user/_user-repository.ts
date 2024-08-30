import { ID, UserInfo } from "@/kernel/_domain/user";
import { dbClient } from "@/shared/functions";
import { Prisma } from "@prisma/client";

class productRepository {
  async createUser(user: UserInfo): Promise<UserInfo> {
    return await dbClient.user.create({
      data: user,
    });
  }

  async getAllUsers(where?: Prisma.UserWhereUniqueInput): Promise<UserInfo[]> {
    return await dbClient.user.findMany({ where });
  }

  async getUserById(id: ID): Promise<UserInfo | undefined> {
    return await dbClient.user
      .findUnique({ where: id })
      .then((u) => u ?? undefined);
  }

  async deleteUserById(id: ID) {
    await dbClient.user.delete({ where: id });
  }
}

export const userMethods = new productRepository();

userMethods.deleteUserById("kasjdfnsjdfn");
