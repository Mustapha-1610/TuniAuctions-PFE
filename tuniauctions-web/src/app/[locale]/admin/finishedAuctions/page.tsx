import FinsihedAuctionsTable from "./table";

export default async function FinishedAuctionsTablePage() {
  async function fetchUpcomingAuctions() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/fetchFinishedAuctions`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const resData = await res.json();
    return resData;
  }
  const upcomingAuctions = await fetchUpcomingAuctions();
  return <FinsihedAuctionsTable finishedAuctions={upcomingAuctions} />;
}
