import BottomSection from "./homePageComponents/bottomSection";
import LatestTransactionsSection from "./homePageComponents/latestTransactions";
import PackageCountSection from "./homePageComponents/packageCountSection";
import TopStatisticsSection from "./homePageComponents/topSection";

export default function Dashboard() {
  return (
    <>
      <div className="flex overflow-hidden bg-white pt-16">
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <main>
            {/* Content Container */}
            <div className=" px-4">
              <TopStatisticsSection />
              <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-2">
                <PackageCountSection />

                <LatestTransactionsSection />
              </div>

              <BottomSection />
            </div>
          </main>
          {/*<FooterSection />*/}
        </div>
      </div>
    </>
  );
}
