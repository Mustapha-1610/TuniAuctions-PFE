import PendingDeliveriesTable from "./table";

export default async function PendingDeliveriesTablePage() {
  async function fetchPendingDeliveries() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/fetchPendingDeliveries`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const resData = await res.json();
    return resData;
  }
  const pendingDeliveries = await fetchPendingDeliveries();
  return <PendingDeliveriesTable pendingDeliveries={pendingDeliveries} />;
}
