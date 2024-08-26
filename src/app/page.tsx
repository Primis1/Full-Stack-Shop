import { Container } from "@/shared/ui";
import Header from "@/widgets/ui/header/header";

export default async function Home() {
  return (
    <Container>
      <Header />
      {/* <h1>{data?.name|| "loading "}</h1> */}
    </Container>
  );
}
