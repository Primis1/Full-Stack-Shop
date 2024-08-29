import { UserInfo } from "@/kernel/_domain/user";
import { dbClient } from "@/shared/functions";
import { Prisma } from "@prisma/client";

class productRepository {
  async createUser(info: UserInfo): Promise<UserInfo> {
    return await dbClient.user.create({
      data: info,
    });
  }

  async getAllUsers(where?: Prisma.ProductWhereInput) {
    return await dbClient.user.findMany({ where });
  }

  async deleteUser(id: Prisma.ProductWhereUniqueInput) {
    await dbClient.product.delete({ where: id });
  }
}

export const productMethods = new productRepository();