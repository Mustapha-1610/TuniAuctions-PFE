"use client";
import { Table, TableColumnsType } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { MdOutlinePendingActions } from "react-icons/md";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import AdminAuctionListingModal from "../modals/auctionListingModal";
import { DeliveryType } from "@/models/types/delivery";

interface Props {
  reportedDeliveries: DeliveryType[];
}
export default function ReportedDeliveriesTable({ reportedDeliveries }: Props) {
  useEffect(() => {}, [reportedDeliveries]);
  const {
    isUpcomingAuctionModalOpen,
    auction,

    setDelivery,
    setDeliveryModalState,
  } = useAdminStore();
  const reportedDeliveriesColumnType: TableColumnsType<DeliveryType> = [
    {
      title: "Seller Id",
      width: 80,
      dataIndex: "sellerId",
      align: "center",
    },
    {
      title: "Bidder Id",
      width: 80,
      dataIndex: "bidderId",
      align: "center",
    },
    {
      title: "Auction Id",
      width: 80,
      dataIndex: "auctionId",
      align: "center",
    },
    {
      title: "Report Informations",
      width: 300,
      align: "center",
      children: [
        {
          title: "Subject",
          align: "center",

          width: 170,
          render: (value, record, index) => {
            return record.report.subject;
          },
        },
        {
          title: "Description",
          align: "center",
          width: 300,
          render: (value, record, index) => {
            return record.report.description;
          },
        },
        {
          title: "Attachments",
          align: "center",

          width: 40,
          render: (value, record, index) => {
            return record.report.attachments.length;
          },
        },
      ],
    },
    {
      title: "Delivery Date",
      align: "center",
      width: 200,
      render: (_, record) => {
        return (
          <>
            {!record.deliveryDate && record.expectedDeliveryDate && (
              <>
                from :{" "}
                {moment(record.expectedDeliveryDate.from).format(
                  "dddd, MMMM D, YYYY "
                )}
                , to :{" "}
                {moment(record.expectedDeliveryDate.to).format(
                  "dddd, MMMM D, YYYY  "
                )}
              </>
            )}
            {record.deliveryDate &&
              moment(record.deliveryDate).format("dddd, MMMM D, YYYY hh:mm A ")}
          </>
        );
      },
    },
    {
      title: "Guarantee",
      width: 80,
      render: (value, record, index) => {
        return (
          <>
            {record.guarantee?.startsWith("0") ? (
              <>No Guarantee</>
            ) : (
              <>{record.guarantee}</>
            )}
          </>
        );
      },
      align: "center",
    },
    {
      title: "Action",
      align: "center",
      render: (_, record) => {
        return (
          <p
            className="cursor-pointer text-blue-500"
            onClick={() => {
              setDelivery(record);
              setDeliveryModalState(true);
            }}
          >
            View
          </p>
        );
      },
    },
  ];

  return (
    <>
      <div className="flex ml-2 overflow-hidden pt-8">
        <div
          id="main-content"
          className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
        >
          <div className="flex items-center justify-center mb-2">
            <h1 className="text-2xl font-bold mb-2 mr-2">
              Reported Deliveries
            </h1>
            <MdOutlinePendingActions size={30} />
          </div>

          {reportedDeliveries && (
            <>
              <Table
                columns={reportedDeliveriesColumnType}
                dataSource={reportedDeliveries}
                scroll={{ x: 800 }}
                pagination={{
                  position: ["bottomCenter"],
                  pageSize: 10,
                }}
                className="mr-2"
                bordered
              />
            </>
          )}
        </div>
      </div>
      {isUpcomingAuctionModalOpen && auction && <AdminAuctionListingModal />}
    </>
  );
}
