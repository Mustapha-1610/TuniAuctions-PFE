import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { columns } from "./tableTypes";
import { auctionListingsChildrenProps } from "../page";

export default function StatisticsTable({
  auctionListings,
}: auctionListingsChildrenProps) {
  return (
    <>
      <Table
        columns={columns}
        dataSource={auctionListings}
        scroll={{ x: 800 }}
        key="_"
        pagination={{
          position: ["bottomCenter"],
          pageSize: 8,
        }}
        className="mr-2 border-gray-400 border border-xl"
      />
    </>
  );
}
