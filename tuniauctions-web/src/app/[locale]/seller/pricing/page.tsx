import { PricingResponse } from "@/app/api/utils/getPricings/route";
import Pricing from "./PricingPage";
async function fetchPricingData() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL!}/api/utils/getPricings`,
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
