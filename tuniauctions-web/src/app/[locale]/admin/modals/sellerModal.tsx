import { Modal, Table, Image, Tag, TableColumnsType } from "antd";
import {
  ISeller,
  sellerTransactions,
} from "@/models/usersModels/types/sellerTypes";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import moment from "moment";
interface Props {
  setSellers?: (value: ISeller[] | undefined) => void;
}
export const sellerTransactionTableColumns: TableColumnsType<sellerTransactions> =
  [
    {
      title: "Transaction Amount",
      width: 60,
      render: (_, record) => {
        return record.amount + "$";
      },
      align: "center",
    },
    {
      title: "Transaction Date",
      width: 80,
      render: (_, record) => {
        return moment(record.date).format("ddd, MMM D, YYYY [at] h:mm A");
      },
      align: "center",
    },

    {
      title: "To",
      width: 90,
      dataIndex: "reciever",
      align: "center",
    },
    {
      title: "Context",
      width: 100,
      dataIndex: "context",
      align: "center",
    },
  ];
export default function SellerDataModal({ setSellers }: Props) {
  const [loading, setLoading] = useState(false);

  const { seller, setSeller, isSellerModalOpen, setSellerModalState } =
    useAdminStore();
  async function updateSellerStatus() {
    setLoading(true);
    const res = await fetch("/api/admin/updateSellerStatus", {
      method: "PUT",
      body: JSON.stringify({
        sellerId: seller!._id,
        refresh: setSellers ? true : false,
      }),
    });
    const resData = await res.json();
    if (resData.success) {
      if (setSellers && resData.sellers) {
        setSellers(resData.sellers);
      }
      setSeller(resData.seller);
    }
    setLoading(false);
  }
  return (
    <Modal
      title="Seller Information"
      centered
      open={isSellerModalOpen}
      width={1240}
      onCancel={() => setSellerModalState(false)}
      footer={null}
      className="mt-2"
    >
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        spinning={loading}
      >
        {seller && (
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            <div className="lg:w-1/2 flex flex-col items-center gap-4">
              <div className="w-full border border-gray-200 p-4">
                <p>
                  <strong>Seller ID:</strong> {String(seller._id)}
                </p>
                <p>
                  <strong>Name:</strong> {seller.name}
                </p>
                <p>
                  <strong>Email:</strong> {seller.email}
                </p>
                <p>
                  <strong>Description:</strong> {seller.description}
                </p>
                <p>
                  <strong>Location:</strong> {seller.location.city},{" "}
                  {seller.location.municipality}, {seller.location.street}
                </p>
                <p>
                  <strong>Registration License:</strong>{" "}
                  <Image
                    src={seller.registrationLicense}
                    preview={true}
                    className="w-32 h-32 rounded-lg"
                  />
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col gap-4">
              {/* Earnings */}
              <div className="w-full border border-gray-200 p-4">
                <p>
                  <strong>Earnings:</strong> ${seller.earnnings.toFixed(2)}
                </p>
                <p>
                  <strong>Platform Fees:</strong> $
                  {seller.platformFees.toFixed(2)}
                </p>
              </div>

              {/* Created Auctions */}
              <div className="w-full border border-gray-200 p-4">
                <p>
                  <strong>Created Auctions:</strong>
                </p>
                <p>
                  <strong>Upcoming:</strong>{" "}
                  {seller.createdAuctions.upcoming.length}
                </p>
                <p>
                  <strong>Finished:</strong>{" "}
                  {seller.createdAuctions.finished.length}
                </p>
              </div>

              {/* Deliveries */}
              <div className="w-full border border-gray-200 p-4">
                <p>
                  <strong>Deliveries:</strong>
                </p>
                <p>
                  <strong>Pending:</strong> {seller.deliveries.pending.length}
                </p>
                <p>
                  <strong>Delivered:</strong>{" "}
                  {seller.deliveries.delivered.length}
                </p>
              </div>

              {/* Auction Earnings */}
              <div className="w-full border border-gray-200 p-4">
                <p>
                  <strong>Auction Earnings:</strong>
                </p>
                <p>
                  <strong>Premium:</strong> $
                  {seller.auctionEarnings.Premium.toFixed(2)}
                </p>
                <p>
                  <strong>Standard:</strong> $
                  {seller.auctionEarnings.Standard.toFixed(2)}
                </p>
                <p>
                  <strong>Basic:</strong> $
                  {seller.auctionEarnings.Basic.toFixed(2)}
                </p>
              </div>

              {/* Status */}
              <div className="w-full border border-gray-200 p-4">
                <p>
                  <strong>Status:</strong>
                </p>
                <Tag color={seller.disabled ? "error" : "success"}>
                  {seller.disabled ? "Disabled" : "Enabled"}
                </Tag>
                <Tag color={seller.verified ? "success" : "default"}>
                  {seller.verified ? "Verified" : "Not Verified"}
                </Tag>
              </div>
            </div>
          </div>
        )}

        {/* Transactions Table */}
        {seller && (
          <>
            <Table
              dataSource={seller.transactions}
              columns={sellerTransactionTableColumns}
              scroll={{ x: 800 }}
              pagination={{ position: ["bottomCenter"], pageSize: 4 }}
              bordered
              className="mt-8"
            />
            <div className="flex justify-center mt-4">
              {seller.disabled ? (
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  onClick={() => {
                    updateSellerStatus();
                  }}
                >
                  Enable
                </button>
              ) : (
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => {
                    updateSellerStatus();
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
