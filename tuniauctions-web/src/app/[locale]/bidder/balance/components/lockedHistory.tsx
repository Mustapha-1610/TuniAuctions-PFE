"use client";
import React from "react";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { Table, TableColumnsType } from "antd";
import moment from "moment";
import { useTranslations } from "next-intl";

export default function TransactionHistory() {
  interface transactionTableDataType {
    amount: number;
    date: Date;
    reciever: string;
    context: string;
  }
  const tableTitles = useTranslations("bidder.transactionTableTitles");
  const tableText = useTranslations("bidder.transactions");

  const transactionTableColumns: TableColumnsType<transactionTableDataType> = [
    {
      title: tableTitles("context"),
      render: (_, record) => {
        return tableText(record.context);
      },
      key: "context",
    },
    {
      title: tableTitles("amount"),
      render: (_, record, index) => {
        return <div key={index}>{record.amount}$</div>;
      },
      sorter: {
        compare: (a, b) => a.amount - b.amount,
      },
      key: "amount",
    },
    {
      title: tableTitles("date"),
      key: "date",
      width: 250,
      render: (_, record, index) => {
        return (
          <div key={index}>
            {moment(record.date).format("ddd, MMM D, YYYY [at] h:mm A")}
          </div>
        );
      },
    },
    {
      title: tableTitles("to"),
      dataIndex: "reciever",
      key: "reciever",
    },
  ];
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
