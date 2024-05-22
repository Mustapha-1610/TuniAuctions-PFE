import { getDashboardTableDataResponse } from "@/app/api/bidder/getDashboardTableData/route";
import { AuctionListingType } from "@/models/types/auctionListing";
import { Table } from "antd";
import { useEffect, useState } from "react";
import type { TableColumnsType, TableProps } from "antd";
import Link from "next/link";
import { useLocale } from "next-intl";
import moment from "moment";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import EditLockedBalanceModal from "./editLockedBalanceModal";
import { getauctionStartDateFormat } from "@/app/[locale]/nextIntlTranslations/getTime";
import { LuCircleSlash2 } from "react-icons/lu";

interface Props {
  tableData: getDashboardTableDataResponse;
}

export default function AuctionDataTable({ tableData }: Props) {
  const { bidderLocalStorageData, setBidderLocalStorageData } =
    useBidderProfileStore();
  const [data, setDataTable] = useState<AuctionListingType[] | undefined>(
    tableData.upcomingAuctions
  );
  const [selectedItem, setSelectedItem] = useState("upcoming");
  const locale = useLocale();
  const [isEditBalanceModalOpen, setEditBalanceModalState] =
    useState<boolean>(false);
  const [auction, setAuction] = useState<AuctionListingType>();
  const [previousLockedBalance, setPreviousLockedBalance] = useState<number>();
  const columns: TableColumnsType<AuctionListingType> = [
    {
      title: "Title",
      dataIndex: "title",
      width: 200,
      align: "center",
    },
    {
      title: "Opening Bid",
      width: 140,
      render: (_, record) => {
        return record.openingBid + "$";
      },
      align: "center",

      sorter: (a, b) => a.openingBid - b.openingBid,
    },
    {
      title: "Locked Balance",
      width: 140,

      align: "center",
      render: (_, record) => {
        const item =
          bidderLocalStorageData &&
          record.participatingBidders.find(
            (b) => b.bidderId === bidderLocalStorageData._id
          );
        return item?.lockedBalance + "$";
      },
    },
    {
      title: "Starting Date",
      align: "center",
      width: 260,
      render: (_, record) => {
        return moment(record.startingDate)
          .locale(locale)
          .format(getauctionStartDateFormat(locale));
      },
    },
    {
      title: "End Date",
      align: "center",
      width: 260,

      render: (_, record) => {
        return moment(record.endDate)
          .locale(locale)
          .format(getauctionStartDateFormat(locale));
      },
    },
    {
      title: "Action",
      align: "center",
      children: [
        {
          title: "Locked Balance",
          align: "center",
          width: 120,
          render: (_, record) => {
            const item =
              bidderLocalStorageData &&
              record.participatingBidders.find(
                (b) => b.bidderId === bidderLocalStorageData._id
              );
            return (
              <>
                {record.status !== "Pending Start" ? (
                  <div className="flex justify-center items-center">
                    <LuCircleSlash2 size={23} />
                  </div>
                ) : (
                  <>
                    <div
                      className="cursor-pointer text-blue-500"
                      onClick={() => {
                        item && setPreviousLockedBalance(item?.lockedBalance),
                          setAuction(record),
                          setEditBalanceModalState(true);
                      }}
                    >
                      Edit
                    </div>
                  </>
                )}
              </>
            );
          },
        },
        {
          title: "Listing",
          align: "center",
          width: 120,

          render: (_, record) => {
            return record.status === "Ongoing" ? (
              <Link
                href={`/${locale}/bidder/auctionRoom/${record._id}`}
                className="cursor-pointer text-blue-500"
              >
                Participate
              </Link>
            ) : (
              <Link
                href={`/${locale}/bidder/auctionDetails/${record._id}`}
                className="cursor-pointer text-blue-500"
              >
                View
              </Link>
            );
          },
        },
      ],
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
                  Finished
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-lg">
            <Table
              className="rounded-lg "
              columns={columns}
              dataSource={data || tableData.upcomingAuctions}
              pagination={{ pageSize: 5 }}
              bordered
            />
          </div>
        </div>
      </div>
      {bidderLocalStorageData && auction && previousLockedBalance && (
        <EditLockedBalanceModal
          activeBalance={bidderLocalStorageData.balance.activeBalance}
          isEditLockedBalanceModalOpen={isEditBalanceModalOpen}
          auctionListing={auction}
          previousLockedBalance={previousLockedBalance}
          setBidderLocalStorageData={setBidderLocalStorageData}
          setEditLockedBalanceModalSate={setEditBalanceModalState}
          setTableData={setDataTable}
        />
      )}
    </>
  );
}
