"use client";
import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import EarningsDisplay from "./components/earningsDisplay";
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

const App: React.FC = () => (
  <div className="flex ml-2 overflow-hidden bg-white pt-12">
    <div
      id="main-content"
      className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
    >
      <h1 className="text-2xl font-bold mt-8 mb-6">
        <span className="text-green-600">Earnings</span> : 299$
      </h1>
      <div className="justify-center max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch pb-6 max-md:mt-6 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <EarningsDisplay Title="Basic" Amount={200} />
                  <EarningsDisplay Title="Standard" Amount={300} />
                  <EarningsDisplay Title="Premium" Amount={1000} />
                </div>
              </div>
            </div>
          </div>
        </div>
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
);

export default App;
