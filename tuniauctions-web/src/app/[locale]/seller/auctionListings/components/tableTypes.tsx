import { sellerAuctionListingFrontData } from "@/models/types/auctionListing";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import moment from "moment";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export const columns: TableColumnsType<sellerAuctionListingFrontData> = [
  {
    title: "Auction Title",
    width: 100,
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Status",
    width: 50,
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Total Views",
    width: 60,
    dataIndex: "totalViews",
    key: "totalViews",
  },
  {
    title: "Starting Date",
    width: 90,
    key: "startingDate",
    render: (_, record) => (
      <div>{moment(record.startingDate).format("MMMM DD, YYYY HH:mm")}</div>
    ),
  },
  {
    title: "End Date",
    width: 90,
    dataIndex: "endDate",
    key: "endDate",
  },
  {
    title: "Original Price",
    width: 60,
    key: "originalPrice",
    render: (_, record) => <div>{record.originalPrice}$</div>,
  },
  {
    title: "Opening Bid",
    width: 60,
    key: "openingBid",
    render: (_, record) => <div>{record.openingBid}$</div>,
  },
  {
    title: "Participating Bidders",
    width: 70,
    key: "participatingBidders",
    render: (_, record) => (
      <div>
        {record.participatingBidders.length +
          " / " +
          record.minParticipatingBidders}
      </div>
    ),
  },
  {
    title: "Winning Bidder",
    width: 70,
    key: "winningBidderName",
    render: (_, record) => (
      <>
        {record.winningBidder && (
          <>
            <div>{record.winningBidder.name}</div>
            <div>{String(record.winningBidder.winningPrice)}</div>
          </>
        )}
      </>
    ),
  },
];
