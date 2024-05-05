"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { GoChecklist } from "react-icons/go";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { DeliveryType } from "@/models/types/delivery";
import moment from "moment";
import { useSellerStore } from "@/helpers/store/seller/sellerStore";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import SellerDeliveryModal from "../modals/deliveriesModal";

export default function ReportedDeliveriesPage() {
  const [tableData, setTableData] = useState<DeliveryType[] | undefined>();
  const { delivery, isDeliveryModalOpen, setDelivery, setDeliveryModalState } =
    useSellerStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getDeliveries() {
      const res = await fetch("/api/seller/fetchReportedDeliveries", {
        method: "POST",
      });
      const resData = await res.json();
      if (resData) {
        setTableData(resData);
      }
      setLoading(false);
    }
    getDeliveries();
  }, []);
  const columns: TableColumnsType<DeliveryType> = [
    {
      title: "Product Name",
      width: 80,
      align: "center",
      render: (_, value) => {
        return value.productInformations.productName;
      },
    },
    {
      title: "Bidder Informations",
      width: 200,
      children: [
        {
          title: "Name",
          align: "center",
          render: (_, a) => {
            return a.biddderDeliveryInformations?.name;
          },
        },
        {
          title: "Phone Number",
          align: "center",
          render: (_, a) => {
            return a.biddderDeliveryInformations?.phoneNumber;
          },
        },
      ],
      align: "center",
    },
    {
      title: "Delivery Date",
      align: "center",
      render: (_, record) => {
        return (
          <>
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
    <div className="flex ml-2  overflow-hidden  pt-16">
      <div
        id="main-content"
        className="h-full w-11/12   relative overflow-y-auto lg:ml-64"
      >
        <div className="flex items-center mb-2">
          <h1 className="text-2xl font-bold mb-2 mr-2">Delivered</h1>
          <IoMdCheckmarkCircle size={30} />
        </div>
        <div className="mb-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-gray-600 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-white">
                  2,340
                </span>
                <h3 className="text-base text-white font-normal ">
                  Delivered Products
                </h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 ">
                <GoChecklist size={50} color="white" />
              </div>
            </div>
          </div>
        </div>
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          spinning={loading}
        >
          <Table
            columns={columns}
            dataSource={tableData}
            scroll={{ x: 800 }}
            pagination={{
              position: ["bottomCenter"],
              pageSize: 8,
            }}
            bordered
          />
        </Spin>
      </div>
      {isDeliveryModalOpen && delivery && <SellerDeliveryModal />}
    </div>
  );
}
