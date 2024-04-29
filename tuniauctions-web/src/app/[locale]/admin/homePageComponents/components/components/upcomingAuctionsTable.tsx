import { AuctionListingType } from "@/models/types/auctionListing";
import { TableColumnsType } from "antd";
import moment from "moment";
import React from "react";

export const upcomingAuctionAdminTableColumnType: TableColumnsType<AuctionListingType> =
  [
    {
      title: "Title",
      dataIndex: "title",
      width: 80,
      align: "center",
    },
    {
      title: "Listing Type",
      width: 80,
      dataIndex: "listingType",
      align: "center",
    },
    {
      title: "Auction Details",
      align: "center",
      children: [
        {
          title: "Opening Bid",
          width: 40,
          dataIndex: "openingBid",
          align: "center",
        },
        {
          title: "Participating Bidders",
          width: 40,
          align: "center",
          render: (_, render, index) => {
            return (
              <React.Fragment key={index}>
                {render.participatingBidders.length +
                  " / " +
                  render.minParticipatingBidders}
              </React.Fragment>
            );
          },
        },
        {
          title: "Starting Date",
          align: "center",
          width: 120,
          render: (_, record) =>
            moment(record.startingDate).format("dddd, MMM D, YYYY hh:mm A "),
        },
      ],
    },
    {
      title: "Action",
      align: "center",
      width: 80,
      render: (_, record) => {
        return (
          <>
            {record.status === "Pending Start" ? (
              <p>View Listing</p>
            ) : (
              <p>View Live Room</p>
            )}
          </>
        );
      },
    },
  ];
