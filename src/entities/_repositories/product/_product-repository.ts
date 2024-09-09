import { ProductInfo, ProductInfoSchema } from "@/kernel/_domain/product";
import { dbClient } from "@/shared/functions";
import { Father } from "../_father-repository";
import { Prisma } from "@prisma/client";
import { seal } from "@/shared/decorators/repositoryDeocorators";


@seal
class ProductRepo extends Father {
  async createProduct(data: ProductInfo) {
    ProductInfoSchema.parse(data);
    return this.protectionMethod<Promise<ProductInfo>>(dbClient.product.create({ data: data }));
  }

  async getAllProducts(
    where?: Prisma.ProductWhereInput
  ){
    return this.protectionMethod<Promise<ProductInfo[]>>(
      dbClient.product.findMany({ where: where })
    );
  }

  async getProduct(
    where: Prisma.ProductWhereUniqueInput
  ): Promise<ProductInfo | unknown> {
    return this.protectionMethod(dbClient.product.findUnique({ where: where }));
  }

  async deleteProduct(id: string) {
    dbClient.product.delete({ where: { productId: id } });
  }
}

export const productRepo = new ProductRepo();
