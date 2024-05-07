import { getDashboardTableDataResponse } from "@/app/api/bidder/getDashboardTableData/route";
import { AuctionListingType } from "@/models/types/auctionListing";
import { Table } from "antd";
import { useEffect, useState } from "react";
import type { TableColumnsType, TableProps } from "antd";
import Link from "next/link";
import { useLocale } from "next-intl";
import moment from "moment";

interface Props {
  tableData: getDashboardTableDataResponse;
}

export default function AuctionDataTable({ tableData }: Props) {
  const [data, setDataTable] = useState<AuctionListingType[] | undefined>(
    tableData.upcomingAuctions
  );
  const [selectedItem, setSelectedItem] = useState("upcoming");
  const locale = useLocale();
  const columns: TableColumnsType<AuctionListingType> = [
    {
      title: "Title",
      dataIndex: "title",
      width: 400,
    },
    {
      title: "Opening Bid",
      dataIndex: "openingBid",

      sorter: (a, b) => a.openingBid - b.openingBid,
    },
    {
      title: "Starting Date",
      render: (_, record) => {
        return moment(record.startingDate).format("MMMM DD, YYYY hh:mm A");
      },
    },
    {
      title: "End Date",
      render: (_, record) => {
        return moment(record.endDate).format("MMMM DD, YYYY hh:mm A");
      },
    },
    {
      title: "Action",
      render: (_, record) => {
        return (
          <>
            <Link href={`/${locale}/bidder/auctionDetails/${record._id}`}>
              View
            </Link>
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className="flex flex-col ml-5 w-11/12 max-md:ml-0 max-md:w-full">
        <div className="flex z-10 flex-col self-stretch my-auto text-sm font-bold max-md:mt-10 max-md:max-w-full">
          <div className="pt-11 text-3xl tracking-tighter border border-white border-solid text-neutral-900 max-md:max-w-full">
            Auctions{" "}
          </div>
          <div className="flex overflow-hidden relative flex-col pt-2 pb-10 mt-8 w-full tracking-wide text-center whitespace-nowrap border border-white border-solid leading-[150%] min-h-[127px] stroke-[1px] stroke-white max-md:max-w-full">
            <div className="flex relative flex-col pb-3 pl-4 border border-white border-solid max-md:max-w-full">
              <div className="flex gap-0 justify-between py-px border-b border-solid border-slate-300 max-md:flex-wrap max-md:max-w-full">
                <div
                  className={`grow justify-center items-center px-16 py-4 border-gray-200 border-solid border-b-[3px]  w-fit max-md:px-5 max-md:max-w-full cursor-pointer ${
                    selectedItem == "upcoming"
                      ? "text-blue-800"
                      : "text-neutral-900"
                  }`}
                  onClick={() => {
                    setDataTable(tableData.upcomingAuctions);
                    setSelectedItem("upcoming");
                  }}
                >
                  Upcoming
                </div>
                <div
                  className={`grow justify-center items-center px-16 py-4 border-gray-200 border-solid border-b-[3px] w-fit max-md:px-5 max-md:max-w-full cursor-pointer ${
                    selectedItem == "participated"
                      ? "text-blue-800"
                      : "text-neutral-900"
                  }`}
                  onClick={() => {
                    setDataTable(tableData.participatedAuctions);
                    setSelectedItem("participated");
                  }}
                >
                  Participated
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-lg">
            <Table
              className="rounded-lg "
              columns={columns}
              dataSource={data || tableData.upcomingAuctions}
              pagination={{ pageSize: 8 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
