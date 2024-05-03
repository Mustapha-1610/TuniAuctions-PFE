"use client";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import { Table, TableColumnsType, Tag } from "antd";
import { useEffect, useState } from "react";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import SellerDataModal from "../modals/sellerModal";
import { FaUserCheck } from "react-icons/fa";

interface Props {
  sellers: ISeller[];
}
export default function ActiveSellersTable({ sellers }: Props) {
  const [sellersData, setSellersData] = useState<ISeller[] | undefined>(
    sellers
  );

  useEffect(() => {}, [sellers]);
  const {
    seller,
    setSeller,
    isSellerModalOpen,

    setSellerModalState,
  } = useAdminStore();
  const pendingSellersAdminTableColumnsType: TableColumnsType<ISeller> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 150,
      align: "center",
    },
    {
      title: "Location",
      width: 120,
      align: "center",
      children: [
        {
          title: "City",
          render: (_, record) => {
            return record.location.city;
          },
          align: "center",
        },
        {
          title: "Municipality",
          render: (_, record) => {
            return record.location.municipality;
          },
          align: "center",
        },
        {
          title: "Street",
          render: (_, record) => {
            return record.location.street;
          },
          align: "center",
        },
      ],
    },
    {
      title: "Earnings",
      dataIndex: "earnnings",
      key: "earnnings",
      width: 150,
      align: "center",
    },
    {
      title: "Platform Fees",
      dataIndex: "platformFees",
      key: "platformFees",
      width: 150,
      align: "center",
    },
    {
      title: "Status",
      width: 120,
      align: "center",
      children: [
        {
          title: "Verified",
          render: (_, record) => {
            return (
              <Tag color={record.verified ? "green" : "red"}>
                <span className="font-bold">{String(record.verified)}</span>
              </Tag>
            );
          },
          align: "center",
        },
        {
          title: "Disabled",
          render: (_, record) => {
            return (
              <Tag color={record.disabled ? "red" : "green"}>
                <span className="font-bold">{String(record.disabled)}</span>
              </Tag>
            );
          },
          align: "center",
        },
      ],
    },
    {
      title: "Action",
      align: "center",
      render: (_, record) => {
        return (
          <p
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              setSeller(record);
              setSellerModalState(true);
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
              Verified Sellers Table
            </h1>
            <FaUserCheck size={30} />
          </div>

          {sellersData && (
            <>
              <Table
                columns={pendingSellersAdminTableColumnsType}
                dataSource={sellersData}
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
      {isSellerModalOpen && seller && (
        <SellerDataModal setSellers={setSellersData} />
      )}
    </>
  );
}
