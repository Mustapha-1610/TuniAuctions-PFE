"use client";
import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { GoChecklist, GoEye } from "react-icons/go";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Full Name",
    width: 300,
    dataIndex: "name",
  },
  {
    title: "Age",
    width: 100,
    dataIndex: "age",
  },
  { title: "Address", width: 100, dataIndex: "address" },
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

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "2",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "3",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "4",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "5",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "6",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "7",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "7",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
];

const App: React.FC = () => (
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
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 800 }}
        pagination={{
          position: ["bottomCenter"],
          pageSize: 8,
        }}
        bordered
      />
    </div>
  </div>
);

export default App;
