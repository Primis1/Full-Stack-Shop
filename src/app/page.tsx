// import { productRepo } from "@/entities/repositpries/product/_product-repository";
import { productRepo } from "@/entities/_repositories/product/_product-repository";
import { ProductInfo } from "@/kernel/_domain/product";
import { Container } from "@/shared/ui";
import Header from "@/widgets/ui/header/header";

export default async function Home() {
  const res = await productRepo.getProduct({productId: "bla"})  as ProductInfo
  console.log(res);
  return (
    <Container>
      <Header />
      <>
          <li key={res.productId}>{res.name}</li>;
      </>
      {/* <h1>{data?.name|| "loading "}</h1> */}
    </Container>
  );
}
