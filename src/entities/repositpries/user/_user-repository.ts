import { UserId, UserInfo } from "@/kernel/_domain/user";
import { dbClient } from "@/shared/functions";
import { Father } from "../_father-repository";
import { Prisma } from "@prisma/client";

class userRepository extends Father {
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

  async getUserById(id: UserId) {
    return this.protectionMethod(
      dbClient.user.findUnique({ where: { userId: id } })
    );
  }

  async deleteUserById(id: UserId) {
    this.protectionMethod(dbClient.user.delete({ where: { userId: id } }));
  }
}

export const userMethods = new userRepository();
