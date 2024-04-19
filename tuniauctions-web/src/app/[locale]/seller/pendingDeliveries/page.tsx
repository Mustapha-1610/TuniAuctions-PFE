"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { FaUserAlt } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { TbCheckupList } from "react-icons/tb";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdPending } from "react-icons/md";
import { Modal } from "antd";
import { sellerFetchDeliveriesType } from "@/app/api/seller/getDeliveries/route";
import { DeliveryType } from "@/models/types/delivery";
import ConfirmModal from "./modals/confirmModal";

export default function PendingDeliveriesPage() {
  const [tableData, setTableData] = useState<DeliveryType[] | undefined>();
  const [confirmShipment, setConfirmShipment] = useState(false);
  const [confirmDelivery, setConfirmDelivery] = useState(false);
  const [deliveryId, setDeliveryId] = useState("");
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
      title: "Full Name",
      width: 300,
      dataIndex: "auctionId",
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "age",
    },
    {
      title: "Address",
      width: 100,
      render: (_, record) => {
        return (
          <>
            {record.status === "Pending bidder informations" && (
              <p
                onClick={() => {
                  setDeliveryId(String(record._id));
                  setConfirmDelivery(true);
                }}
              >
                Show
              </p>
            )}
          </>
        );
      },
    },
    { title: "Address", width: 150, dataIndex: "address" },
    { title: "Address", width: 100, dataIndex: "address" },
    { title: "Address", width: 100, dataIndex: "address" },
    { title: "Address", width: 100, dataIndex: "address" },
    { title: "Address", width: 100, dataIndex: "address" },
    { title: "Address", width: 100, dataIndex: "address" },
    {
      title: "Action",

      width: 90,
      render: () => <a>View</a>,
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

          <div className="mb-4 px-2 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className="bg-gray-600 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl leading-none font-bold text-white">
                    9,789
                  </span>
                  <h3 className="text-base text-white font-normal ">
                    Pending Bidder Informations
                  </h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 ">
                  <FaUserAlt size={50} color="white" />
                </div>
              </div>
            </div>
            <div className="bg-gray-600 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl leading-none font-bold text-white">
                    2,340
                  </span>
                  <h3 className="text-base text-white font-normal ">
                    Pending Shipment
                  </h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 ">
                  <GrDeliver size={50} color="white" />
                </div>
              </div>
            </div>
            <div className="bg-gray-600   shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl leading-none font-bold text-white">
                    4.1
                  </span>
                  <h3 className="text-base text-white font-normal ">
                    Pending Delivery Confirmation
                  </h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1">
                  <TbCheckupList size={55} color="white" />
                </div>
              </div>
            </div>
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
        <ConfirmModal
          deliveryId={deliveryId}
          setShowModal={setConfirmDelivery}
          showModal={confirmDelivery}
        />
      )}
    </>
  );
}
