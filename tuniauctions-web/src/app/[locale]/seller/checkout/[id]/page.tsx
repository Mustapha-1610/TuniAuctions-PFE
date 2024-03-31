import { getPricingResponse } from "@/app/api/utils/getPricing/route";
import CheckoutPage from "./checkoutPage";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const res = await fetch("http://localhost:3000/api/utils/getPricing", {
    method: "POST",
    body: JSON.stringify({ id }),
  });
  const resData: getPricingResponse = await res.json();
  if (resData.success) return <CheckoutPage pricing={resData.pricing} />;
  return "No Data";
}
