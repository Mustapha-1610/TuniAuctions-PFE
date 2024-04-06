import { sellerAuctionListingFrontData } from "@/models/types/auctionListing";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export const columns: TableColumnsType<sellerAuctionListingFrontData> = [
  {
    title: "Auction Title",
    width: 200,
    dataIndex: "title",
    key: "_id",
  },
  {
    title: "Total Views",
    width: 100,
    dataIndex: "totalViews",
    key: "_id",
  },
];
