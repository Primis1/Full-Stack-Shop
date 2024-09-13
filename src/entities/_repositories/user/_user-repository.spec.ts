import { dbClient } from "@/shared/functions/db/dbClient";
import { userRepo } from "./_user-repository";
import { UserInfo } from "@/kernel/_domain/user";

// jest.mock("./_user-repository", () => ({
//   userRepo: {
//     geUser: jest.fn(),
//   },
// }));
// jest.mock("./_user-repository", () => ({
//   userRepo: {
//     getAllUser: jest.fn(),
//   },
// }));
// jest.mock("./_user-repository", () => ({
//   userRepo: {
//     createUser: jest.fn(),
//   },
// }));
// jest.mock("./_user-repository", () => ({
//   deleteUser: {
//     geUser: jest.fn(),
//   },
// }));
jest.mock("@/shared/functions/db/dbClient", () => ({
  dbClient: {
    user: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

type UserFields = "email" | "password";

type UserPartial = Pick<UserInfo, UserFields>;

describe("User Repository Class", () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  describe("createUser", () => {
    it("Should create user", async () => {
      const mockUser: UserPartial = {
        email: "something@example.com",
        password: "123456",
      };
      (dbClient.user.create as jest.Mock).mockResolvedValue(mockUser);
      const res = await userRepo.createUser(mockUser as UserInfo);

      expect(dbClient.user.create).toHaveBeenLastCalledWith({ data: mockUser });
      expect(res).toEqual(mockUser);
    });
  });

  describe("getAllUsers", () => {
    it("Should query all users without settled 'where'", async () => {
      const mockUsers = [{ userId: "someId", Lname: "Doe" }];
      (dbClient.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

      const res = await userRepo.getAllUsers();

      expect(dbClient.user.findMany).toHaveBeenCalledWith({ where: undefined });
      expect(res).toEqual(mockUsers);
    });
  });

  describe("getUser", () => {
    it("Get user by ID", async () => {
      const mockUser = { userId: "something", Lname: "Baben" };
      (dbClient.user.findUnique as jest.Mock).mockResolvedValue(mockUser);

      const res = await userRepo.getUser(mockUser.userId);

      expect(dbClient.user.findUnique).toHaveBeenCalledWith({
        where: { userId: mockUser.userId },
      });
      expect(res).toEqual(mockUser);
    });
  });

  describe("deleteUser", () => {
    it("Delete user by ID", async () => {
      const mockUser = { userId: "something", Lname: "Baben" };
      (dbClient.user.delete as jest.Mock).mockResolvedValue(undefined);
      
      await userRepo.deleteUser(mockUser.userId);

      expect(dbClient.user.delete).toHaveBeenCalledWith({
        where: { userId: mockUser.userId },
      });
    });
  });
});
