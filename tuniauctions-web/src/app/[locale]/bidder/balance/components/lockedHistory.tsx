"use client";
import React from "react";
import { Table } from "antd";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { transactionTableColumns } from "./table";

export default function TransactionHistory() {
  const { bidderLocalStorageData } = useBidderProfileStore();
  return (
    <div className="flex flex-col px-5 mt-16 max-md:mt-10 max-md:max-w-full">
      <div className="text-2xl max-md:max-w-full font-bold text-black">
        {" "}
        Transactions{" "}
      </div>
      <Table
        className="custom-transaction-table mt-4 py-6"
        columns={transactionTableColumns}
        dataSource={bidderLocalStorageData?.transactions}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}
