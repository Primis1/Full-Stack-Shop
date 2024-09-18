import { z } from "zod";

export type ProductId = string;

export type ProductInfo = {
  productId: string;
  availible: boolean;
  price: number;
  brand: string;
  category: string;
  name: string;
  size: string[];
  image: string[];
};
export const ProductInfoSchema = z.object({
  productId: z.string(),
  avalible: z.boolean(),
  name: z.string(),
  category: z.string(),
  brand: z.string(),
  size: z.array(z.string()),
  image: z.array(z.string()),
  price: z.number(),
});
