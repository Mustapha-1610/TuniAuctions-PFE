import DeliveredDeliveriesTable from "./table";
import UpcomingAuctionsTable from "./table";

export default async function DeliveredDeliveriesTablePage() {
  async function fetchUpcomingAuctions() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/fetchDeliveredDeliveries`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const resData = await res.json();
    return resData;
  }
  const deliveredDeliveres = await fetchUpcomingAuctions();
  return <DeliveredDeliveriesTable deliveredDeliveries={deliveredDeliveres} />;
}
