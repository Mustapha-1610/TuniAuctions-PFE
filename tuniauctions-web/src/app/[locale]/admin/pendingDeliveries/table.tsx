"use client";
import { Table, TableColumnsType, Tag } from "antd";
import moment from "moment";
import { useEffect } from "react";
import { MdOutlinePendingActions } from "react-icons/md";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import AdminAuctionListingModal from "../modals/auctionListingModal";
import { DeliveryType } from "@/models/types/delivery";

interface Props {
  pendingDeliveries: DeliveryType[];
}
export default function PendingDeliveriesTable({ pendingDeliveries }: Props) {
  useEffect(() => {}, [pendingDeliveries]);
  const {
    isUpcomingAuctionModalOpen,
    auction,

    setDelivery,
    setDeliveryModalState,
  } = useAdminStore();
  const deliveryDeliveriesColumnType: TableColumnsType<DeliveryType> = [
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
      title: "Delivery Date",
      align: "center",
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
      title: "Status",
      width: 80,
      dataIndex: "status",
      align: "center",
      render: (_, record) => {
        return (
          <Tag
            color={
              record.status === "Pending bidder informations"
                ? "blue"
                : record.status === "Pending delivery shipment"
                ? "pink"
                : "purple"
            }
          >
            <span className="font-bold">{String(record.status)}</span>
          </Tag>
        );
      },
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
            <h1 className="text-2xl font-bold mb-2 mr-2">Pending Deliveries</h1>
            <MdOutlinePendingActions size={30} />
          </div>

          {pendingDeliveries && (
            <>
              <Table
                columns={deliveryDeliveriesColumnType}
                dataSource={pendingDeliveries}
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
