import PlatformTransactionsTable from "./table";

export default async function OngoingAuctionsTablePage() {
  async function fetchUpcomingAuctions() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/fetchOngoingAuctions`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const resData = await res.json();
    return resData;
  }
  const ongoingAuctions = await fetchUpcomingAuctions();
  return <PlatformTransactionsTable ongoingAuctions={ongoingAuctions} />;
}
