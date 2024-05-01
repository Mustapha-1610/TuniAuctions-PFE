import BiddersTable from "./table";

export default async function BiddersPage() {
  async function fetchBidders() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/fetchBidders`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const resData = await res.json();
    return resData;
  }
  const bidders = await fetchBidders();
  return <BiddersTable bidders={bidders} />;
}
