import { userMethods } from "@/entities/_repositories";

type Command = {
  userId: string;
};

class DeleteUser {
  exec(command: Command) {
    const res = userMethods.getUserById(command.userId);

    if (!res) {
        throw new Error("404. User was not found")
    }

    return userMethods.deleteUserById(command.userId);
  }
}

export const deteleUser = new DeleteUser();
