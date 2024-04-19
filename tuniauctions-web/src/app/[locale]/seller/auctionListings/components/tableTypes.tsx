import { sellerAuctionListingFrontData } from "@/models/types/auctionListing";
import type { TableColumnsType } from "antd";
import moment from "moment";
import { LuCircleOff } from "react-icons/lu";

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
    title: "Unique Views",
    children: [
      {
        title: "Total",
        width: 50,
        dataIndex: "totalViews",
        key: "totalViews",
        render: (_, record) => {
          if (record.listingType !== "Basic") {
            const totalBidders = record.uniqueViews?.bidders?.length ?? 0;
            return <div>{totalBidders}</div>;
          }
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LuCircleOff size={25} />
            </div>
          );
        },
      },
      {
        title: "Male",
        width: 50,
        dataIndex: "male",
        key: "male",
        render: (_, record) => {
          if (record.listingType !== "Basic") {
            const totalBidders = record.uniqueViews?.bidders?.length ?? 0;
            const maleViews = record.uniqueViews?.gender?.Male ?? 0;
            const malePercentage = totalBidders
              ? (maleViews / totalBidders) * 100
              : 0;
            const maleColor = malePercentage > 50 ? "green" : "red";
            return (
              <div style={{ color: maleColor }}>
                {malePercentage.toFixed(2)}%
              </div>
            );
          }
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LuCircleOff size={25} />
            </div>
          );
        },
      },
      {
        title: "Female",
        width: 40,
        dataIndex: "female",
        key: "female",
        render: (_, record) => {
          if (record.listingType !== "Basic") {
            const totalBidders = record.uniqueViews?.bidders?.length ?? 0;
            const femaleViews = record.uniqueViews?.gender?.Female ?? 0;
            const femalePercentage = totalBidders
              ? (femaleViews / totalBidders) * 100
              : 0;
            const femaleColor = femalePercentage > 50 ? "green" : "red";
            return (
              <div style={{ color: femaleColor }}>
                {femalePercentage.toFixed(2)}%
              </div>
            );
          }
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LuCircleOff size={25} />
            </div>
          );
        },
      },
    ],
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
    children: [
      {
        title: "Name",
        width: 70,
        render: (_, record) => (
          <div key={_}>
            {record.winningBidder && (
              <>
                <div>{record.winningBidder.name}</div>
              </>
            )}
          </div>
        ),
      },
      {
        title: "Winning Bid",
        width: 70,
        render: (_, record) => (
          <div key={_}>
            {record.winningBidder && (
              <>
                <div>{record.winningBidder.winningPrice}</div>
              </>
            )}
          </div>
        ),
      },
    ],
  },
];
