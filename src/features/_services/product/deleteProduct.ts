import { productRepo } from "@/entities/_repositories";

class DeleteProduct {
  exec(command: string) {
    const res = productRepo.getProduct(command);

    if (!res) {
      throw new Error("404. Product was not found");
    }

    return productRepo.deleteProduct(command);
  }
}

export const deteleProduct = new DeleteProduct();
