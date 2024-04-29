"use client";
import { Table } from "antd";
import { AuctionListingType } from "@/models/types/auctionListing";
import { TableColumnsType } from "antd";
import React, { useState } from "react";
import moment from "moment";
import AdminAuctionListingModal from "../../modals/auctionListingModal";
interface Props {
  upcomingAuctions: AuctionListingType[] | null;
}
export default function UpcomingAuctions({ upcomingAuctions }: Props) {
  const [isUpcomingAuctionModalOpen, setIsUpcomingAuctionModalState] =
    useState<boolean>(false);
  const [auctionListing, setAuctionListing] = useState<AuctionListingType>();
  const upcomingAuctionAdminTableColumnType: TableColumnsType<AuctionListingType> =
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
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    setAuctionListing(record),
                      setIsUpcomingAuctionModalState(true);
                  }}
                >
                  View Listing
                </p>
              ) : (
                <p>View Live Room</p>
              )}
            </>
          );
        },
      },
    ];
  return (
    <>
      <div className="bg-white shadow rounded-lg  p-4 sm:p-6 h-full border border-gray-400">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900">
            Upcoming Auctions
          </h3>
          <a
            href="#"
            className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          {upcomingAuctions && (
            <Table
              className="custom-transaction-table  "
              columns={upcomingAuctionAdminTableColumnType}
              dataSource={upcomingAuctions}
              bordered={true}
              size="middle"
              pagination={false}
              tableLayout="auto"
            />
          )}
        </div>
      </div>
      {isUpcomingAuctionModalOpen && auctionListing && (
        <AdminAuctionListingModal
          auctionListing={auctionListing}
          isAuctionListingModalOpen={isUpcomingAuctionModalOpen}
          setIsAuctionListingModalState={setIsUpcomingAuctionModalState}
          setAuctionListing={setAuctionListing}
        />
      )}
    </>
  );
}
