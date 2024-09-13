import { Button, Container } from "@/shared/ui";
import Header from "@/widgets/ui/header/header";

export default function Home() {
  return (
    <Container>
      <Header />
      <Button className="mt-28">Create User</Button>
    </Container>
  );
}
