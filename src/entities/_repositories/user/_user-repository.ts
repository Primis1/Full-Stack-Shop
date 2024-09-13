import { UserId, UserInfo } from "@/kernel/_domain/user";
import { dbClient } from "@/shared/functions";
import { Father } from "../_father-repository";
import { Prisma } from "@prisma/client";
import { seal } from "@/shared/decorators";

@seal
class UserRepository extends Father {
  async createUser(user: UserInfo) {
    return this.protectionMethod(
      dbClient.user.create({
        data: user,
      })
    );
  }

  async getAllUsers(where?: Prisma.UserWhereInput) {
    return this.protectionMethod(dbClient.user.findMany({ where: where }));
  }

  async getUser(id: UserId) {
    return this.protectionMethod(
      dbClient.user.findUnique({ where: { userId: id } })
    );
  }

  async deleteUser(id: UserId) {
    this.protectionMethod(dbClient.user.delete({ where: { userId: id } }));
  }
}

export const userRepo = new UserRepository();
