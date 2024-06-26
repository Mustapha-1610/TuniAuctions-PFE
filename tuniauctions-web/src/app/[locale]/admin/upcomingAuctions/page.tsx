import UpcomingAuctionsTable from "./table";

export default async function UpcomingAuctionsTablePage() {
  async function fetchUpcomingAuctions() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/fetchUpcomingAuctions`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const resData = await res.json();
    return resData;
  }
  const upcomingAuctions = await fetchUpcomingAuctions();
  return <UpcomingAuctionsTable UpcomingAuctions={upcomingAuctions} />;
}
