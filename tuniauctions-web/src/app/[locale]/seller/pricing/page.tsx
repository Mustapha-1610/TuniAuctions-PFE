import { PricingResponse } from "@/app/api/utils/getPricings/route";
import Pricing from "./PricingPage";
async function fetchPricingData() {
  const data = await fetch(
    `https://tuniauctions.vercel.app/api/utils/getPricings`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  const resData: PricingResponse = await data.json();
  return resData;
}
export default async function Page() {
  const resData: PricingResponse = await fetchPricingData();
  return <Pricing pricing={resData.pricings} />;
}
