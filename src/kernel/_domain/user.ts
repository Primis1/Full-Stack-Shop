import { z } from "zod";

export type Role = "ADMIN" | "USER";

const UserId = z.string().brand("UserId");
export type UserId = z.infer<typeof UserId>;

const OrderId = z.string().brand("OrderId");
export type OrderId = z.infer<typeof OrderId>;

export type UserInfo = {
  userId: UserId;
  Fname: string;
  Lname: string;
  email: string;
  image?: string;
  // orders?: Order[];
};
export type Order = {
  orderId: OrderId;
  userId: UserId;
  totalAmount: number;
  createdAt: string;
  items: string;
};
