import ReportedDeliveriesTable from "./table";

export default async function ReportedDeliveriesTablePage() {
  async function fetchReportedDeliveries() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/fetchReportedDeliveries`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const resData = await res.json();
    return resData;
  }
  const reportedDeliveries = await fetchReportedDeliveries();
  return <ReportedDeliveriesTable reportedDeliveries={reportedDeliveries} />;
}
