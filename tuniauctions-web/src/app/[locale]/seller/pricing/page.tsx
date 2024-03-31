import { PricingResponse } from "@/app/api/utils/getPricings/route";
import Pricing from "./PricingPage";
export default async function Page() {
  const data = await fetch("http://localhost:3000/api/utils/getPricings", {
    method: "GET",
    cache: "no-cache",
  });
  const resData: PricingResponse = await data.json();
  return <Pricing pricing={resData.pricings} />;
}
