import { z } from "zod";

export type ProductId = string;

export type ProductInfo = {
  productId: string;
  name: string;
  category: string;
  brand: string;
  size: string[];
  image: string[];
  price: number;
};

export const ProductInfoSchema = z.object({
  productId: z.string(),
  name: z.string(),
  category: z.string(),
  brand: z.string(),
  size: z.array(z.string()),
  image: z.array(z.string()),
  price: z.number(),
});
