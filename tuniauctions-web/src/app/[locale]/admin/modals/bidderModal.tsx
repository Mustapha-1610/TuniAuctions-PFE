"use client";
import { Modal, Table, Image, Tag, Button, TableColumnsType } from "antd";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import { useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import { useTranslations } from "next-intl";
import moment from "moment";

interface transactionTableDataType {
  amount: number;
  date: Date;
  reciever: string;
  context: string;
}
interface Props {
  setBidders?: (value: IBidder[] | undefined) => void;
  refresh?: boolean;
}
export default function BidderInformationsModal({
  setBidders,
  refresh,
}: Props) {
  const [loading, setLoading] = useState(false);

  const {
    bidder,
    isBidderInformationModalOpen,
    setBidderInformationsModalState,
    setBidder,
  } = useAdminStore();
  const tableTitles = useTranslations("bidder.transactionTableTitles");
  const tableText = useTranslations("bidder.transactions");

  async function updateBidderStatus() {
    setLoading(true);

    const res = await fetch("/api/admin/updateBidderStatus", {
      method: "PUT",
      body: JSON.stringify({
        bidderId: bidder!._id,
        refresh: refresh ? true : false,
      }),
    });
    const resData = await res.json();
    if (resData.success) {
      if (refresh && resData.bidders && setBidders) {
        setBidders(resData.bidders);
      }
      setBidder(resData.bidder);
    }
    setLoading(false);
  }
  const transactionTableColumns: TableColumnsType<transactionTableDataType> = [
    {
      title: tableTitles("context"),
      render: (_, record) => {
        return tableText(record.context);
      },
      key: "context",
    },
    {
      title: tableTitles("amount"),
      render: (_, record, index) => {
        return <div key={index}>{record.amount}$</div>;
      },
      sorter: {
        compare: (a, b) => a.amount - b.amount,
      },
      key: "amount",
    },
    {
      title: tableTitles("date"),
      key: "date",
      width: 250,
      render: (_, record, index) => {
        return (
          <div key={index}>
            {moment(record.date).format("ddd, MMM D, YYYY [at] h:mm A")}
          </div>
        );
      },
    },
    {
      title: tableTitles("to"),
      dataIndex: "reciever",
      key: "reciever",
    },
  ];
  return (
    <Modal
      title="Bidder Information"
      centered
      open={isBidderInformationModalOpen}
      width={1280}
      onCancel={() => setBidderInformationsModalState(false)}
      footer={null}
    >
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        spinning={loading}
      >
        {bidder && (
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            <div className="lg:w-1/2 flex flex-col items-center gap-4">
              {/* Bidder Profile */}
              <div className="w-full border border-gray-200 p-4">
                <p>
                  <strong>Bidder Id:</strong> {String(bidder._id)}
                </p>
                <p>
                  <strong>Full Name:</strong> {bidder.fullName}
                </p>
                <p>
                  <strong>Email:</strong> {bidder.email}
                </p>
                <p>
                  <strong>Gender:</strong> {bidder.gender}
                </p>
                <p>
                  <strong>Gmail Account:</strong>{" "}
                  {bidder.gmailAccount ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Profile Picture:</strong>
                </p>
                <div className="flex justify-center">
                  <Image
                    src={bidder.profilePicture}
                    height={200}
                    preview={true}
                    className="w-32 h-32 rounded-full"
                    style={{ margin: "auto" }} // Center the image horizontally
                    alt="Bidder Picture"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col gap-4">
              {/* Auction References */}
              <div className="w-full border border-gray-200 p-4">
                <p>
                  <strong>Auction References:</strong>
                </p>
                <p>
                  <strong>Upcoming Auctions:</strong>{" "}
                  {bidder.auctionReferences.upcoming.length}
                </p>
                <p>
                  <strong>Saved Auctions:</strong>{" "}
                  {bidder.auctionReferences.saved.length}
                </p>
              </div>

              {/* Deliveries */}
              <div className="w-full border border-gray-200 p-4">
                <p>
                  <strong>Deliveries:</strong>
                </p>
                <p>
                  <strong>Pending:</strong> {bidder.deliveries.pending.length}
                </p>
                <p>
                  <strong>Delivered:</strong>{" "}
                  {bidder.deliveries.delivered.length}
                </p>
              </div>

              {/* Balance */}
              <div className="w-full border border-gray-200 p-4">
                <p>
                  <strong>Balance:</strong>
                </p>
                <p>
                  <strong>Active Balance:</strong> $
                  {bidder.balance.activeBalance.toFixed(2)}
                </p>
                <p>
                  <strong>Locked Balance:</strong> $
                  {bidder.balance.lockedBalance.toFixed(2)}
                </p>
              </div>

              {/* Status */}
              <div className="w-full border border-gray-200 p-4">
                <p>
                  <strong>Status:</strong>
                </p>
                <Tag color={bidder.disabled ? "error" : "success"}>
                  {bidder.disabled ? "Disabled" : "Enabled"}
                </Tag>
                <Tag color={bidder.verified ? "success" : "default"}>
                  {bidder.verified ? "Verified" : "Not Verified"}
                </Tag>
              </div>
            </div>
          </div>
        )}

        {/* Transactions Table */}
        {bidder && (
          <>
            <Table
              dataSource={bidder.transactions.reverse()}
              columns={transactionTableColumns}
              scroll={{ x: 800 }}
              pagination={{ position: ["bottomCenter"], pageSize: 4 }}
              bordered
              className="mt-8"
            />
            <div className="flex justify-center mt-4">
              {bidder.disabled ? (
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  onClick={() => {
                    updateBidderStatus();
                  }}
                >
                  Enable
                </button>
              ) : (
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => {
                    updateBidderStatus();
                  }}
                >
                  Disable
                </button>
              )}
            </div>
          </>
        )}
      </Spin>
    </Modal>
  );
}
