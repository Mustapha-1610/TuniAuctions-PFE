"use client";
import { AdminDashboardResponseType } from "@/app/api/admin/fetchHomePageSection/route";
import LatestTransactionsSection from "./homePageComponents/latestTransactions";
import PackageCountSection from "./homePageComponents/packageCountSection";
import TopStatisticsSection from "./homePageComponents/topSection";
import PendingSellers from "./homePageComponents/components/pendingSellers";
import PackagePurchases from "./homePageComponents/components/packagePurchase";
import UpcomingAuctions from "./homePageComponents/components/upcomingAuctions";
import PendingDeliveries from "./homePageComponents/components/pendingDeliveries";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [resData, setResData] = useState<any>(null);

  useEffect(() => {
    async function fetchHomePageData() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/fetchHomePageSection`,
        {
          method: "POST",
          cache: "no-cache",
        }
      );
      const resData: AdminDashboardResponseType = await res.json();
      setResData(resData);
    }
    fetchHomePageData();
  }, []);
  return (
    <>
      <div className="flex overflow-hidden bg-white pt-12">
        <div
          id="main-content"
          className="h-full w-full  relative overflow-y-auto lg:ml-64"
        >
          {resData && (
            <main>
              <div className=" px-4">
                <TopStatisticsSection
                  activeBidders={
                    resData.activeMaleBidders + resData.activeFemaleBidders
                  }
                  activeSellers={resData.activeSellersCount}
                  earnings={resData.platformStats?.earnings}
                />
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-2">
                  <PackageCountSection
                    transactions={resData.platformStats?.transactions}
                  />

                  <LatestTransactionsSection
                    activeFemaleBidders={resData.activeFemaleBidders}
                    activeMaleBidders={resData.activeMaleBidders}
                  />
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                  <PendingSellers pendingSellers={resData.pendingSellers} />
                  {resData.platformStats && (
                    <PackagePurchases platformStats={resData.platformStats} />
                  )}
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                  <UpcomingAuctions
                    upcomingAuctions={resData.upcomingAuctions}
                  />
                  <PendingDeliveries
                    pendingDeliveries={resData.pendingDeliveries}
                  />
                </div>
              </div>
            </main>
          )}
        </div>
      </div>
    </>
  );
}
