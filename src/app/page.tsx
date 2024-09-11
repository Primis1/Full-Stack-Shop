// import { productRepo } from "@/entities/repositpries/product/_product-repository";
// "use client";
import { userMethods } from "@/entities/_repositories";
import { UserInfo } from "@/kernel/_domain/user";
import { Button, Container } from "@/shared/ui";
import Header from "@/widgets/ui/header/header";
import { User } from "@prisma/client";
// import { User } from "@prisma/client";

export default function Home() {
  const user: UserInfo = {
    userId: "jkhdbsfjhb",
    Fname: "jkhdbsfjhb",
    Lname: "jkhdbsfjhb",
    image: "jkhdbsfjhb",
    email: "jkhdbsfjhb",
    // role: "ADMIN",
  };

  async function create() {
    "use server"
    return await userMethods.createUser(user);
  }

  // async function get() {
  //   await userMethods.getAllUsers()
  // }
  return (
    <Container>
      <Header />
      <>
        <Button onClick={create} className="mt-28"></Button>
        {/* <li key={res.productId}>{res.name}</li>; */}
      </>
      {/* <h1>{data?.name|| "loading "}</h1> */}
    </Container>
  );
}
