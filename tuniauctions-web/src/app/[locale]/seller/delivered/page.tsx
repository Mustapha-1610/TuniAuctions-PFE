"use client";
import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { GoChecklist } from "react-icons/go";
import { IoMdCheckmarkCircle } from "react-icons/io";
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
      <div className="justify-center max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch pb-6 max-md:mt-6 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5  max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col border-black w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex bg-gray-500  border flex-col grow justify-center self-stretch p-5 mx-auto w-full font-semibold bg-white rounded-lg border-black shadow-sm leading-[150%] text-zinc-800 max-md:mt-6">
                      <div className="flex border-black flex-wrap gap-5 justify-between content-center">
                        <div className="flex flex-col flex-1">
                          <div className="text-base whitespace-nowrap">
                            Delivered Products
                          </div>
                          <div className="mt-3 text-2xl">9,789</div>
                          <div className="flex gap-2.5 justify-between py-1 pr-7 mt-3 text-xs text-emerald-400 max-md:pr-5"></div>
                        </div>

                        <GoChecklist
                          color="white"
                          size={65}
                          className="my-auto max-w-full aspect-[3.03] w-[120px]"
                        />
                      </div>
                    </div>
                  </div>
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
      />
    </div>
  </div>
);

export default App;
