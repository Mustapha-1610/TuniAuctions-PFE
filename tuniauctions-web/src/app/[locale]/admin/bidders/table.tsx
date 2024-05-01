"use client";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import { Table, TableColumnsType } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdPending } from "react-icons/md";
import BidderInformationsModal from "../modals/bidderModal";

interface Props {
  bidders: IBidder[];
}
export default function BiddersTable({ bidders }: Props) {
  const { setBidder, setBidderInformationsModalState } = useAdminStore();
  const [biddersData, setBiddersData] = useState<IBidder[] | undefined>(
    bidders
  );

  useEffect(() => {}, [bidders]);
  const {
    delivery,
    seller,
    isDeliveryModalOpen,

    isSellerModalOpen,
    isSellerAccountApplicationModalOpen,
    auction,
    isUpcomingAuctionModalOpen,
    isOngoingAuctionModalOpen,
    bidder,
    isBidderInformationModalOpen,
  } = useAdminStore();
  const transactionTableColumns: TableColumnsType<IBidder> = [
    {
      title: "Name",
      dataIndex: "fullName",
      align: "center",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      align: "center",
    },
    {
      title: "Upcoming Participated Auctions",
      align: "center",

      render(value, record, index) {
        return record.auctionReferences.upcoming.length;
      },
    },
    {
      title: "Deliveries",
      children: [
        {
          title: "Pending",
          align: "center",

          render(value, record, index) {
            return record.deliveries.pending.length;
          },
        },
        {
          title: "Delivered",
          align: "center",

          render(value, record, index) {
            return record.deliveries.delivered.length;
          },
        },
      ],
    },
    {
      title: "email",
      dataIndex: "email",
      align: "center",
    },
    {
      title: "Status",
      align: "center",
      children: [
        {
          title: "Verified",
          align: "center",

          render(value, record, index) {
            return String(record.verified);
          },
        },
        {
          title: "Disabled",
          align: "center",

          render(value, record, index) {
            return String(record.disabled);
          },
        },
      ],
    },
    {
      title: "Action",
      align: "center",

      render(value, record, index) {
        return (
          <p
            className="cursor-pointer text-blue-500"
            onClick={() => {
              setBidder(record), setBidderInformationsModalState(true);
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
            <h1 className="text-2xl font-bold mb-2 mr-2">Bidders</h1>
            <HiMiniUserGroup size={30} />
          </div>

          {biddersData && (
            <>
              <Table
                columns={transactionTableColumns}
                dataSource={biddersData}
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
      {isBidderInformationModalOpen && bidder && (
        <BidderInformationsModal refresh={true} setBidders={setBiddersData} />
      )}
    </>
  );
}
