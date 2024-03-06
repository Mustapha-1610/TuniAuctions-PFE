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
    title: "Auction Title",
    width: 200,
    dataIndex: "name",
  },
  {
    title: "Status",
    width: 100,
    dataIndex: "age",
  },
  { title: "Created On", width: 100, dataIndex: "address" },
  { title: "Finished On", width: 100, dataIndex: "address" },
  { title: "Opening Bid", width: 100, dataIndex: "address" },
  { title: "Views", width: 100, dataIndex: "address" },
  { title: "Participations", width: 100, dataIndex: "address" },
  { title: "Video Views", width: 100, dataIndex: "address" },
  {
    title: "Statistics",

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
  {
    key: "7",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
];
export default function StatisticsTable() {
  return (
    <>
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
    </>
  );
}
