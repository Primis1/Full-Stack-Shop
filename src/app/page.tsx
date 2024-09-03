import { Button, Container } from "@/shared/ui";
import Header from "@/widgets/ui/header/header";

export default async function Home() {
  return (
    <Container>
      <Header />
      <Button className="m-10">something</Button>
      {/* <h1>{data?.name|| "loading "}</h1> */}
    </Container>
  );
}
