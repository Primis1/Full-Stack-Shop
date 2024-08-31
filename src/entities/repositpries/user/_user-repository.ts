import { UserId, UserInfo } from "@/kernel/_domain/user";
import { dbClient } from "@/shared/functions";

class userRepository {
  async createUser(user: UserInfo): Promise<UserInfo> {
    return await dbClient.user.create({
      data: user,
    });
  }

  async getAllUsers(): Promise<UserInfo[]> {
    return await dbClient.user.findMany();
  }

  async getUserById(id: UserId): Promise<UserInfo | undefined> {
    return await dbClient.user
      .findUnique({ where: {id} })
      .then((u) => u ?? undefined);
  }

  async deleteUserById(id: UserId) {
    await dbClient.user.delete({ where: {id} });
  }
}

export const userMethods = new userRepository();

userMethods.deleteUserById("kasjdfnsjdfn");
