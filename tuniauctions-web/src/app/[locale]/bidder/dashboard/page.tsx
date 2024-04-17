"use client";
import * as React from "react";
import type { TableColumnsType, TableProps } from "antd";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { getDashboardTableDataResponse } from "@/app/api/bidder/getDashboardTableData/route";
import AuctionDataTable from "./components/auctionTable";
import DeliveriesDataTable from "./components/deliveriesPage";
export default function MyComponent() {
  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  interface AuctionItemData {
    imageSrc: string;
    altText: string;
    title: string;
    startDate: string;
    lockedBalance: string;
  }

  interface AuctionItemProps {
    item: AuctionItemData;
  }

  const auctionData: AuctionItemData[] = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44e7c9cc674535cf9ee1aee3510c308622af02a0e40aec1e3d50db111bfb2912?apiKey=452d394c7c1e42459c0e2415b6f84ad2&",
      altText: "Auction Item Description for Item 1",
      title: "Auction Title Example 1",
      startDate: "Auction Starts 16/08/2002",
      lockedBalance: "300.000$",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44e7c9cc674535cf9ee1aee3510c308622af02a0e40aec1e3d50db111bfb2912?apiKey=452d394c7c1e42459c0e2415b6f84ad2&",
      altText: "Auction Item Description for Item 2",
      title: "Auction Title Example 2",
      startDate: "Auction Starts 17/08/2002",
      lockedBalance: "350.000$",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44e7c9cc674535cf9ee1aee3510c308622af02a0e40aec1e3d50db111bfb2912?apiKey=452d394c7c1e42459c0e2415b6f84ad2&",
      altText: "Auction Item Description for Item 3",
      title: "Auction Title Example 3 aaaaaaaaa aaaa",
      startDate: "Auction Starts 18/08/2002",
      lockedBalance: "400.000$",
    },
    {
      imageSrc:
        "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-260nw-1498702814.jpg",
      altText: "Auction Item Description for Item 4",
      title: "Auction Title Example 4",
      startDate: "Auction Starts 19/08/2002",
      lockedBalance: "450.000$",
    },
    {
      imageSrc:
        "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-260nw-1498702814.jpg",
      altText: "Auction Item Description for Item 4",
      title: "Auction Title Example 4",
      startDate: "Auction Starts 19/08/2002",
      lockedBalance: "450.000$",
    },
    {
      imageSrc:
        "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-260nw-1498702814.jpg",
      altText: "Auction Item Description for Item 4",
      title: "Auction Title Example 4",
      startDate: "Auction Starts 19/08/2002",
      lockedBalance: "450.000$",
    },
  ];
  const { selectedDashboardComponent, setSelectedDashboardComponent } =
    useBidderNavigationStore();
  const { bidderLocalStorageData } = useBidderProfileStore();
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
                className="justify-center items-start py-2 pr-16 pl-3 rounded-lg bg-slate-200 max-md:pr-5"
                onClick={() => {
                  setSelectedDashboardComponent("Auctions");
                }}
              >
                Auctions
              </div>
              <div
                className="self-start mt-4 ml-3 max-md:ml-2.5"
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
