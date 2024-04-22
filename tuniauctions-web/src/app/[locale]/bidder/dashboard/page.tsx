"use client";
import * as React from "react";
import type { TableColumnsType, TableProps } from "antd";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { getDashboardTableDataResponse } from "@/app/api/bidder/getDashboardTableData/route";
import AuctionDataTable from "./components/auctionTable";
import DeliveriesDataTable from "./components/deliveriesPage";
export default function MyComponent() {
  const { selectedDashboardComponent, setSelectedDashboardComponent } =
    useBidderNavigationStore();
  const [tableData, setTableData] =
    React.useState<getDashboardTableDataResponse>({
      deliveredDeliveries: undefined,
      pendingDeliveries: undefined,
      savedAuctions: undefined,
      upcomingAuctions: undefined,
    });
  React.useEffect(() => {
    async function getTableData() {
      const res = await fetch("/api/bidder/getDashboardTableData", {
        method: "POST",
      });
      const resData: getDashboardTableDataResponse = await res.json();
      console.log(resData);
      setTableData({
        deliveredDeliveries: resData.deliveredDeliveries,
        pendingDeliveries: resData.pendingDeliveries,
        savedAuctions: resData.savedAuctions,
        upcomingAuctions: resData.upcomingAuctions,
      });
    }
    getTableData();
    console.log("working");
  }, []);
  return (
    <div className="flex mt-24 flex-col justify-center px-2 bg-white max-md:px-2">
      <div className="mx-4 bg-white border border-white border-solid max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col  justify-between px-4 pt-4 pb-20 w-full text-sm font-medium  whitespace-nowrap bg-white border border-white border-solid text-neutral-900 max-md:pr-5">
              <div
                className={`justify-center items-start py-2 pr-16 pl-3 rounded-lg max-md:pr-5 ${
                  selectedDashboardComponent === "Auctions"
                    ? "bg-slate-200"
                    : ""
                }`}
                onClick={() => {
                  setSelectedDashboardComponent("Auctions");
                }}
              >
                Auctions
              </div>
              <div
                className={`justify-center items-start py-2 pr-16 pl-3 rounded-lg max-md:pr-5 ${
                  selectedDashboardComponent === "Deliveries"
                    ? "bg-slate-200"
                    : ""
                }`}
                onClick={() => {
                  setSelectedDashboardComponent("Deliveries");
                }}
              >
                Deliveries
              </div>
            </div>
          </div>

          {selectedDashboardComponent == "Auctions" ? (
            <AuctionDataTable tableData={tableData} />
          ) : (
            <>
              <DeliveriesDataTable tableData={tableData} />{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
