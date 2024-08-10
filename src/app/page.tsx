import Header from "@/widgets/ui/header/header";
import { fetchData } from "../shared/functions/fetch-data/fetch-data";

export default async function Home() {
  return (
    <div>
      <Header />
      {/* <h1>{data?.name|| "loading "}</h1> */}
    </div>
  );
}
