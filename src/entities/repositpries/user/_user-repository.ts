import { UserId, UserInfo } from "@/kernel/_domain/user";
import { dbClient } from "@/shared/functions";

class userRepository {
  async createUser(user: UserInfo) {
     await dbClient.user.create({
      data: user,
    });
  }

  async getAllUsers() {
    return await dbClient.user.findMany();
  }

  async getUserById(id: UserId) {
    return await dbClient.user
      .findUnique({ where: { userId: id } })
      .then((u) => u ?? undefined);
  }

  async deleteUserById(id: UserId) {
    await dbClient.user.delete({ where: { userId: id } });
  }
}

export const userMethods = new userRepository();