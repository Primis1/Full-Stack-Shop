import { ProductInfo, ProductInfoSchema } from "@/kernel/_domain/product";
import { dbClient } from "@/shared/functions";
import { Father } from "../_father-repository";
import { Prisma, PrismaPromise } from "@prisma/client";

class ProductRepo extends Father {
  async createProduct(data: ProductInfo) {
    ProductInfoSchema.parse(data);
    this.protectionMethod(dbClient.product.create({ data: data }));
  }

  async getAllProducts(where?: Prisma.ProductWhereInput) {
    this.protectionMethod<PrismaPromise<ProductInfo[]>>(
      dbClient.product.findMany({ where: where })
    );
  }

  async getProduct(where: Prisma.ProductWhereUniqueInput) {
    this.protectionMethod(dbClient.product.findUnique({ where: where }));
  }

  async deleteProduct(id: string) {
    dbClient.product.delete({ where: { productId: id } });
  }
}

export const productRepo = new ProductRepo();
