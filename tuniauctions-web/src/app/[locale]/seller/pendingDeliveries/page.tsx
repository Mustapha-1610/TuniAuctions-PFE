"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { FaUserAlt } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { TbCheckupList } from "react-icons/tb";
import { MdPending } from "react-icons/md";
import { sellerFetchDeliveriesType } from "@/app/api/seller/getDeliveries/route";
import { DeliveryType } from "@/models/types/delivery";
import ConfirmDeliveryShipmentModal from "./modals/confirmModal";
import BidderLocationModal, {
  BidderSellerDeliveryInformationsData,
} from "./modals/bidderLocationModal";
import moment from "moment";

export default function PendingDeliveriesPage() {
  const [tableData, setTableData] = useState<DeliveryType[] | undefined>();
  const [confirmDelivery, setConfirmDelivery] = useState(false);
  const [deliveryId, setDeliveryId] = useState("");
  const [isBidderDataModalOpen, setBidderDataModal] = useState(false);
  const [bidderData, setBidderData] =
    useState<BidderSellerDeliveryInformationsData>();
  useEffect(() => {
    async function getDeliveies() {
      const res = await fetch("/api/seller/getDeliveries", {
        method: "POST",
      });
      const resData: sellerFetchDeliveriesType = await res.json();
      console.log(resData);
      if (resData.pendingDeliveries) {
        setTableData(resData.pendingDeliveries);
      }
    }
    getDeliveies();
  }, []);
  const columns: TableColumnsType<DeliveryType> = [
    {
      title: "Product",
      width: 200,
      render: (_, record) => {
        return record.productInformations.productName;
      },
    },
    {
      title: "Winning Bidder",
      width: 200,
      render: (_, record) => {
        return (
          <>
            {record.biddderDeliveryInformations &&
            record.biddderDeliveryInformations ? (
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => {
                  setBidderData({
                    name: record.biddderDeliveryInformations?.name,
                    phoneNumber:
                      record.biddderDeliveryInformations?.phoneNumber,
                    street: record.biddderDeliveryInformations?.sreet,
                  });
                  setBidderDataModal(true);
                }}
              >
                View Location
              </button>
            ) : (
              <>Not Submitted Yet</>
            )}
          </>
        );
      },
    },
    {
      title: "Expected Delivery Day",
      width: 300,
      render: (_, record) => {
        return (
          <>
            {record.expectedDeliveryDate && (
              <>
                From :{" "}
                {moment(record.expectedDeliveryDate.from).format(
                  " dddd, MMMM D, YYYY"
                )}
                <span className="">, To : </span>
                {moment(record.expectedDeliveryDate.to).format(
                  " dddd, MMMM D, YYYY"
                )}
              </>
            )}
          </>
        );
      },
    },
    {
      title: "Guarantee",
      width: 200,
      render: (_, record) => {
        return (
          <>
            {record.guarantee?.startsWith("0") ? (
              <>No guarantee</>
            ) : (
              record.guarantee
            )}
          </>
        );
      },
    },
    {
      title: "Action",
      width: 200,
      render: (_, record) => {
        return (
          <>
            {record.status === "Pending delivery shipment" && (
              <p
                onClick={() => {
                  setDeliveryId(String(record._id));
                  setConfirmDelivery(true);
                }}
                className="cursor-pointer"
              >
                Confirm Delivery Shipment
              </p>
            )}
            {record.status === "Pending delivery" && (
              <p
                onClick={() => {
                  setDeliveryId(String(record._id));
                  setConfirmDelivery(true);
                }}
                className="cursor-pointer"
              >
                Confirm Delivery
              </p>
            )}
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className="flex ml-2 overflow-hidden pt-16">
        <div
          id="main-content"
          className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
        >
          <div className="flex items-center mb-2">
            <h1 className="text-2xl font-bold mb-2 mr-2">Pending</h1>
            <MdPending size={30} />
          </div>

          {tableData && (
            <>
              <Table
                columns={columns}
                dataSource={tableData}
                scroll={{ x: 800 }}
                pagination={{
                  position: ["bottomCenter"],
                  pageSize: 4,
                }}
                className="mr-2"
                bordered
              />
            </>
          )}
        </div>
      </div>
      {confirmDelivery && (
        <ConfirmDeliveryShipmentModal
          deliveryId={deliveryId}
          setShowModal={setConfirmDelivery}
          showModal={confirmDelivery}
          setTableData={setTableData}
        />
      )}
      {isBidderDataModalOpen && (
        <BidderLocationModal
          bidderData={bidderData}
          isBidderLocationModalOpen={isBidderDataModalOpen}
          setIsBidderLocationModalOpen={setBidderDataModal}
          setBidderData={setBidderData}
        />
      )}
    </>
  );
}
