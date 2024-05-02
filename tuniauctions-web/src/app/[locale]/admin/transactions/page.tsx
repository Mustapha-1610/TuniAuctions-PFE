import PlatformTransactionsTable from "./table";
export default async function TransactionsPage() {
  async function fetchTransactions() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/fetchPlatformTransactions`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const resData = await res.json();
    return resData;
  }
  const platformData = await fetchTransactions();
  return <PlatformTransactionsTable platformStats={platformData} />;
}
