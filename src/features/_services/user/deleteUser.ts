import { userRepo } from "@/entities/_repositories";

class DeleteUser {
  exec(command: string) {
    const res = userRepo.getUser(command);

    if (!res) {
      throw new Error("404. User was not found");
    }

    return userRepo.deleteUser(command);
  }
}

export const deteleUser = new DeleteUser();
