"use client";
import { Table } from "antd";
import { AuctionListingType } from "@/models/types/auctionListing";
import { TableColumnsType } from "antd";
import React, { useState } from "react";
import moment from "moment";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useLocale } from "next-intl";
import Link from "next/link";

interface Props {
  upcomingAuctions: AuctionListingType[] | null;
}
export default function UpcomingAuctions({ upcomingAuctions }: Props) {
  const [loading, setLoading] = useState(false);
  const locale = useLocale();

  const {
    setSeller,
    setAuction,
    setOngoingAuctionModalState,
    setUpcomingAucitonModalState,
  } = useAdminStore();
  async function handleAuctionListingModal(auction: AuctionListingType) {
    if (auction) {
      setLoading(true);
      const res = await fetch("/api/admin/fetchSellerData", {
        method: "POST",
        body: JSON.stringify({
          sellerId: auction.sellerId,
        }),
        cache: "default",
      });
      const resData: ISeller = await res.json();
      setLoading(false);
      if (resData) {
        setSeller(resData);
        setAuction(auction);
        setUpcomingAucitonModalState(true);
      }
    }
  }
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
                  className="cursor-pointer text-blue-500"
                  onClick={() => {
                    handleAuctionListingModal(record);
                  }}
                >
                  View Listing
                </p>
              ) : (
                <p
                  className="cursor-pointer text-blue-500"
                  onClick={() => {
                    setAuction(record), setOngoingAuctionModalState(true);
                  }}
                >
                  View Live Room
                </p>
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
          <Link
            href={`/${locale}/admin/upcomingAuctions`}
            className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
          >
            View all
          </Link>
        </div>
        <div className="flow-root">
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            spinning={loading}
          >
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
          </Spin>
        </div>
      </div>
    </>
  );
}
