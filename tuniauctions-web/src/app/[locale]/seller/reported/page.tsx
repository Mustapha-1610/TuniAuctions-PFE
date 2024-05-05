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
import SellerAuctionListingModal from "../modals/auctionListingModal";
import { FaCircleExclamation } from "react-icons/fa6";

export default function ReportedDeliveriesPage() {
  const [tableData, setTableData] = useState<DeliveryType[] | undefined>();
  const {
    delivery,
    isDeliveryModalOpen,
    setDelivery,
    setDeliveryModalState,
    auction,
    isUpcomingAuctionModalOpen,
  } = useSellerStore();
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
    <div className="flex ml-2 overflow-hidden pt-8">
      <div
        id="main-content"
        className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
      >
        <div className="flex items-center justify-center mb-2 mt-8">
          <h1 className="text-2xl font-bold mb-2 mr-2">Reported Deliveries</h1>
          <FaCircleExclamation size={30} />
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
      {isUpcomingAuctionModalOpen && auction && <SellerAuctionListingModal />}
    </div>
  );
}
