import { getDashboardTableDataResponse } from "@/app/api/bidder/getDashboardTableData/route";
import { AuctionListingType } from "@/models/types/auctionListing";
import { Table } from "antd";
import { useEffect, useState } from "react";
import type { TableColumnsType, TableProps } from "antd";
import { DeliveryType } from "@/models/types/delivery";
import { useLocale } from "next-intl";
import Link from "next/link";
import moment from "moment";
import { getauctionStartDateFormat } from "@/app/[locale]/nextIntlTranslations/getTime";

interface Props {
  tableData: getDashboardTableDataResponse;
}

export default function DeliveriesDataTable({ tableData }: Props) {
  const [data, setDataTable] = useState<DeliveryType[] | undefined>(
    tableData.pendingDeliveries
  );
  const [selectedItem, setSelectedItem] = useState("pending");
  const locale = useLocale();
  const columns: TableColumnsType<DeliveryType> = [
    {
      title: "Product Name",
      render: (_, record) => {
        return (
          <>
            <p>{record.productInformations.productName}</p>
          </>
        );
      },
    },
    {
      title: "Expected Delivery Date",
      render: (_, record) => {
        return (
          <>
            {record.deliveryDate ? (
              <>Delivered</>
            ) : (
              <>
                {record.expectedDeliveryDate ? (
                  <>
                    From :{" "}
                    {moment(record.expectedDeliveryDate.from)
                      .locale(locale)
                      .format("ddd, MMM D, YYYY ")}
                    <span className="">, To : </span>
                    {moment(record.expectedDeliveryDate.to)
                      .locale(locale)
                      .format("ddd, MMM D, YYYY ")}
                  </>
                ) : (
                  <>Not decided yet</>
                )}
              </>
            )}
          </>
        );
      },
    },
    {
      title: "Delivery Date",
      render: (_, record) => {
        return (
          record.deliveryDate &&
          moment(record.deliveryDate)
            .locale(locale)
            .format(getauctionStartDateFormat(locale))
        );
      },
    },
    {
      title: "Gurantee",
      render: (_, record) => {
        return (
          <>
            <p>
              {record.guarantee?.startsWith("0")
                ? "No guarantee"
                : record.guarantee}
            </p>
          </>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      render: (_, record) => {
        return (
          <>
            <Link href={`/${locale}/bidder/checkout/${record._id}`}>View</Link>
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
            Deliveries{" "}
          </div>
          <div className="flex overflow-hidden relative flex-col pt-2 pb-10 mt-8 w-full tracking-wide text-center whitespace-nowrap border border-white border-solid leading-[150%] min-h-[127px] stroke-[1px] stroke-white max-md:max-w-full">
            <div className="flex relative flex-col pb-3 pl-4 border border-white border-solid max-md:max-w-full">
              <div className="flex gap-0 justify-between py-px border-b border-solid border-slate-300 max-md:flex-wrap max-md:max-w-full">
                <div
                  className={`grow justify-center items-center px-16 py-4 border-gray-200 border-solid border-b-[3px]  w-fit max-md:px-5 max-md:max-w-full cursor-pointer ${
                    selectedItem == "pending"
                      ? "text-blue-800"
                      : "text-neutral-900"
                  }`}
                  onClick={() => {
                    setDataTable(tableData.pendingDeliveries);
                    setSelectedItem("upcoming");
                  }}
                >
                  Pending
                </div>
                <div
                  className={`grow justify-center items-center px-16 py-4 border-gray-200 border-solid border-b-[3px] w-fit max-md:px-5 max-md:max-w-full cursor-pointer ${
                    selectedItem == "delivered"
                      ? "text-blue-800"
                      : "text-neutral-900"
                  }`}
                  onClick={() => {
                    setDataTable(tableData.deliveredDeliveries);
                    setSelectedItem("delivered");
                  }}
                >
                  Delivered
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-lg">
            <Table
              className="rounded-lg "
              columns={columns}
              dataSource={data || tableData.pendingDeliveries}
              pagination={{ pageSize: 8 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
