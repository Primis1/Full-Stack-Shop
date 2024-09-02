import { z } from "zod";

export type UserId = string;

const OrderId = z.string().brand("OrderId");
export type OrderId = z.infer<typeof OrderId>;

export type Role = keyof typeof Roles;

export type UserInfo = {
  userId: UserId;
  Fname: string;
  Lname: string;
  email: string;
  role: Role;
  image?: string;
};

export type Order = {
  orderId: OrderId;
  userId: UserId;
  totalAmount: number;
  createdAt: string;
  items: string;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum Roles {
  ADMIN,
  USER,
}
