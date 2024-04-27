import { AdminDashboardResponseType } from "@/app/api/admin/fetchHomePageSection/route";
import BottomSection from "./homePageComponents/bottomSection";
import LatestTransactionsSection from "./homePageComponents/latestTransactions";
import PackageCountSection from "./homePageComponents/packageCountSection";
import TopStatisticsSection from "./homePageComponents/topSection";

export default async function Dashboard() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/fetchHomePageSection`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  const resData: AdminDashboardResponseType = await res.json();
  return (
    <>
      <div className="flex overflow-hidden bg-white pt-12">
        <div
          id="main-content"
          className="h-full w-full  relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className=" px-4">
              <TopStatisticsSection
                activeBidders={resData.activeBiddersCount}
                activeSellers={resData.activeSellersCount}
                earnings={resData.platformStats?.earnings}
              />
              <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-2">
                <PackageCountSection />

                <LatestTransactionsSection />
              </div>

              <BottomSection />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}