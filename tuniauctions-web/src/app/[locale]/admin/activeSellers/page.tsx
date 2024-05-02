import ActiveSellersTable from "./table";
import BiddersTable from "./table";

export default async function ActiveSellersPage() {
  async function fetchSellers() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/fetchVerifiedSellers`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const resData = await res.json();
    return resData;
  }
  const sellers = await fetchSellers();
  return <ActiveSellersTable sellers={sellers} />;
}
