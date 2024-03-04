"use client";
import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";

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
];

const App: React.FC = () => (
  <div className="flex ml-2 overflow-hidden bg-white pt-16">
    <div
      id="main-content"
      className="h-full w-10/12  relative overflow-y-auto lg:ml-64"
    >
      <h1 className="text-2xl font-bold mb-6">Latest Transactions</h1>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 800 }}
        pagination={{
          position: ["bottomCenter"],
          pageSize: 4,
        }}
        bordered
      />
    </div>
  </div>
);

export default App;
