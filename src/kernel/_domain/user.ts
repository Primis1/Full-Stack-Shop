export type ID = string;
export type Role = "ADMIN" | "USER";

export type Order = {
  orderId: ID;
  userId: ID;
  totalAmount: number;
  createdAt: string;
  items: string;
};
export type UserInfo = {
  userId: ID;
  Fname: string;
  Lname: string;
  email: string;
  image?: string;
//   orders?: Order[];
};
