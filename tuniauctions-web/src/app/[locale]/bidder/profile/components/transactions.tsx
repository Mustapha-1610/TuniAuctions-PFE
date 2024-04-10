"use client";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { Table, TableColumnsType, TableProps } from "antd";
import moment from "moment";

export default function Transactions() {
  interface DataType {
    amount: number;
    date: Date;
    reciever: string;
    context: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Context",
      dataIndex: "context",
      key: "context",
    },
    {
      title: "Amount",
      render: (_, record) => {
        return <>{record.amount}$</>;
      },
      sorter: {
        compare: (a, b) => a.amount - b.amount,
      },
      key: "amount",
    },
    {
      title: "Date",

      key: "date",
      render: (_, record) => {
        return (
          <>{moment(record.date).format("ddd, MMM D, YYYY [at] h:mm A")}</>
        );
      },
    },
    {
      title: "To",
      dataIndex: "reciever",
      key: "reciever",
    },
  ];
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const { bidderLocalStorageData, setBidderLocalStorageData } =
    useBidderProfileStore();
  return (
    <>
      <div className=" mr-12 pt-12 max-w-full w-[960px] max-md:mr-2.5">
        <div className="flex flex-row flex-1 mt-6 mb-2  max-md:mt-10 max-md:max-w-full">
          <div className="text-2xl max-md:max-w-full font-bold text-black">
            Transactions
          </div>
        </div>
        <div className="flex flex-col justify-center py-6 pr-16 pl-4 mt-2  leading-[120%] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <Table
            columns={columns}
            dataSource={bidderLocalStorageData?.transactions.reverse()}
            onChange={onChange}
            pagination={{ pageSize: 6 }} // Set pagination with a page size of 10
          />
        </div>
      </div>
    </>
  );
}
