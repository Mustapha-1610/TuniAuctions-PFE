"use client";
import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
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
    title: "Transaction Nature",
    width: 50,
    dataIndex: "name",
    render: (text: any, record: any) => {
      const backgroundColor =
        record.name === "Recieved" ? "#68D391" : "#FC8181";
      const color = record.name === "Recieved" ? "#5AC69F" : "#FF0000";
      return {
        props: {
          style: {
            color,
            fontWeight: "bold",
            fontSize: "15px", // Set the font size
          },
        },
        children: <div>{text}</div>, // Render text content
      };
    },
  },
  {
    title: "Transaction Amount",
    width: 30,
    dataIndex: "age",
  },
  { title: "Transaction Date", width: 80, dataIndex: "address" },

  {
    title: "Transactioned By",
    width: 90,
    dataIndex: "By",
  },
  {
    title: "Transactioned To",
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

export default function TransactionsPage() {
  const { sellerLocaleStorageData } = useSellerProfileStore();

  return (
    <>
      {sellerLocaleStorageData && (
        <div className="flex ml-2 overflow-hidden bg-white pt-12">
          <div
            id="main-content"
            className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
          >
            <h1 className="text-2xl font-bold mb-6">Transactions</h1>
            <div className="justify-center max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[100%] pr-1 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch pb-6 max-md:mt-6 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col border-black w-full max-md:ml-0 max-md:w-full">
                          <div className="flex border flex-col grow justify-center self-stretch p-5 mx-auto w-full font-semibold bg-green-500 rounded-lg border-black shadow-sm leading-[150%] text-zinc-800 max-md:mt-6">
                            <div className="flex border-black flex-wrap gap-5 justify-between content-center">
                              <div className="flex flex-col flex-1">
                                <div className="text-base whitespace-nowrap">
                                  Earnings Recieved
                                </div>
                                <div className="mt-3 text-2xl">
                                  {sellerLocaleStorageData.earnnings}$
                                </div>
                                <div className="flex gap-2.5 justify-between py-1 pr-7 mt-3 text-xs text-emerald-400 max-md:pr-5"></div>
                              </div>

                              <GiReceiveMoney
                                color="white"
                                size={65}
                                className="my-auto max-w-full aspect-[3.03] w-[120px]"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col border-black w-full max-md:ml-0 max-md:w-full">
                          <div className="flex border flex-col grow justify-center self-stretch p-5 mx-auto w-full font-semibold bg-red-500 rounded-lg border-black shadow-sm leading-[150%] text-zinc-800 max-md:mt-6">
                            <div className="flex border-black flex-wrap gap-5 justify-between content-center">
                              <div className="flex flex-col flex-1">
                                <div className="text-base whitespace-nowrap">
                                  Platform Fees
                                </div>
                                <div className="mt-3 text-2xl">
                                  {sellerLocaleStorageData.platformFees}$
                                </div>
                                <div className="flex gap-2.5 justify-between py-1 pr-7 mt-3 text-xs text-emerald-400 max-md:pr-5"></div>
                              </div>

                              <GiPayMoney
                                color="white"
                                size={75}
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
              className="mr-4"
            />
          </div>
        </div>
      )}
    </>
  );
}
