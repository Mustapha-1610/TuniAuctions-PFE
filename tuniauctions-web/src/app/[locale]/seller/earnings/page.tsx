"use client";
import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import EarningsDisplay from "./components/earningsDisplay";
import { IoMdCreate } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  By: string;
  To: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Auction Title",
    width: 50,
    dataIndex: "name",
  },
  {
    title: "Opening Bid",
    width: 30,
    dataIndex: "age",
  },
  { title: "Winning Bid", width: 80, dataIndex: "address" },

  {
    title: "Won By",
    width: 90,
    dataIndex: "By",
  },
  {
    title: "Platform Fees",
    width: 90,
    dataIndex: "To",
  },
  {
    title: "Auction Ended On",
    width: 90,
    dataIndex: "To",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Recieved",
    age: 100,
    address: "10/09/2024",
    By: "Mustapha Talbi",
    To: "Tuni-Auctions",
  },
  {
    key: "2",
    name: "Payed",
    age: 32,
    address: "10/09/2024",
    By: "Mustapha Talbi",
    To: "Tuni-Auctions",
  },
];

export default function EarningsPage() {
  const { sellerLocaleStorageData } = useSellerProfileStore();
  return (
    sellerLocaleStorageData && (
      <div className="flex ml-2 overflow-hidden bg-white pt-12">
        <div
          id="main-content"
          className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
        >
          <h1 className="text-2xl font-bold mt-8 mb-6">
            <span className="text-green-600">Earnings</span> :{" "}
            {sellerLocaleStorageData.earnnings}
          </h1>
          <div className="mb-4 px-2 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <EarningsDisplay
              Amount={sellerLocaleStorageData.auctionEarnings.Basic}
              Title="Basic"
            />
            <EarningsDisplay
              Amount={sellerLocaleStorageData.auctionEarnings.Standard}
              Title="Standard"
            />
            <EarningsDisplay
              Amount={sellerLocaleStorageData.auctionEarnings.Premium}
              Title="Premium"
            />
          </div>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 800 }}
            pagination={{
              position: ["bottomCenter"],
              pageSize: 8,
            }}
            bordered
            className="mr-4"
          />
        </div>
      </div>
    )
  );
}
