"use client";
import { Table, TableColumnsType, TableProps } from "antd";

export default function Transactions() {
  interface DataType {
    key: React.Key;
    name: string;
    chinese: number;
    math: number;
    english: number;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Chinese Score",
      dataIndex: "chinese",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "Math Score",
      dataIndex: "math",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "English Score",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: "2",
      name: "Jim Green",
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: "3",
      name: "Joe Black",
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: "4",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
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
  return (
    <>
      <div className=" mr-12 pt-12 max-w-full w-[960px] max-md:mr-2.5">
        <div className="flex flex-row flex-1 mt-6 mb-2  max-md:mt-10 max-md:max-w-full">
          <div className="text-2xl max-md:max-w-full font-bold text-black">
            Transactions
          </div>
        </div>
        <div className="flex flex-col justify-center py-6 pr-16 pl-4 mt-2  leading-[120%] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </div>
    </>
  );
}
