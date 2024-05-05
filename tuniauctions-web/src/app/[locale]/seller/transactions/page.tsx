"use client";
import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import EarningsDisplay from "../earnings/components/earningsDisplay";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
import { sellerTransactions } from "@/models/usersModels/types/sellerTypes";
import moment from "moment";
import { useTranslations } from "next-intl";

export default function TransactionsPage() {
  const tableTranslations = useTranslations("seller.transactions");
  const tableHeaderTranslations = useTranslations(
    "seller.transactionTableTitles"
  );

  const sellerTransactionTableColumns: TableColumnsType<sellerTransactions> = [
    {
      title: tableHeaderTranslations("amount"),
      width: 60,
      render: (_, record) => {
        return record.amount + "$";
      },
      align: "center",
    },
    {
      title: tableHeaderTranslations("date"),
      width: 80,
      render: (_, record) => {
        return moment(record.date).format("ddd, MMM D, YYYY [at] h:mm A");
      },
      align: "center",
    },

    {
      title: tableHeaderTranslations("to"),
      width: 90,
      dataIndex: "reciever",
      align: "center",
    },
    {
      title: tableHeaderTranslations("context"),
      width: 100,
      render: (_, record) => {
        return tableTranslations(record.context);
      },
      align: "center",
    },
  ];
  const { sellerLocaleStorageData } = useSellerProfileStore();

  return (
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
                    <div className="flex flex-col  w-full max-md:ml-0 max-md:w-full">
                      <div className="flex border flex-col grow justify-center self-stretch p-5 mx-auto w-full font-semibold bg-green-500 rounded-lg border-black shadow-sm leading-[150%] text-zinc-800 max-md:mt-6">
                        <div className="flex border-black flex-wrap gap-5 justify-between content-center">
                          <div className="flex flex-col flex-1">
                            <div className="text-base whitespace-nowrap">
                              Earnings Recieved{" "}
                            </div>
                            <div className="mt-3 text-2xl">
                              {sellerLocaleStorageData &&
                                sellerLocaleStorageData.earnnings}
                              $
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
                              {sellerLocaleStorageData &&
                                sellerLocaleStorageData.platformFees}
                              $
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

        {sellerLocaleStorageData && (
          <Table
            dataSource={sellerLocaleStorageData.transactions}
            columns={sellerTransactionTableColumns}
            scroll={{ x: 800 }}
            pagination={{ position: ["bottomCenter"], pageSize: 4 }}
            bordered
            className="mt-2"
          />
        )}
      </div>
    </div>
  );
}
