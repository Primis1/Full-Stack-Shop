import { z } from "zod";

export const ProductId = z.string().brand("ProductId");
export type ProductId = z.infer<typeof ProductId>;

export type ProductPartial = {
    productId: ProductId
    name: string
    size: string
    brand: string 
}