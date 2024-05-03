"use client";
import { Table, TableColumnsType, Tag } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { MdOutlinePendingActions } from "react-icons/md";
import { AuctionListingType } from "@/models/types/auctionListing";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import AdminAuctionListingModal from "../modals/auctionListingModal";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import AdminBiddingRoomModal from "../modals/biddingRoomModal";

interface Props {
  ongoingAuctions: AuctionListingType[];
}
export default function OngoingAuctionsTable({ ongoingAuctions }: Props) {
  useEffect(() => {}, [ongoingAuctions]);
  const {
    setAuction,
    setUpcomingAucitonModalState,
    isUpcomingAuctionModalOpen,
    auction,
    setSeller,
    setSellerModalState,
    isOngoingAuctionModalOpen,
    setOngoingAuctionModalState,
  } = useAdminStore();
  const [loading, setLoading] = useState(false);

  async function handleAuctionListingModal(auction: AuctionListingType) {
    if (auction) {
      setAuction(auction);
      setOngoingAuctionModalState(true);
    }
  }
  async function handleSellerModal(auction: AuctionListingType) {
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

        setSellerModalState(true);
      }
    }
  }
  const UpcomingAuctionsColumnType: TableColumnsType<AuctionListingType> = [
    {
      title: "Listing Type",
      width: 80,
      align: "center",
      dataIndex: "listingType",
      render: (_, record) => {
        return (
          <Tag
            color={
              record.listingType === "Premium"
                ? "gold"
                : record.listingType === "Standard"
                ? "blue"
                : "black"
            }
          >
            <span className="font-bold">{record.listingType}</span>
          </Tag>
        );
      },
    },
    {
      title: "Title",
      width: 100,
      align: "center",
      dataIndex: "title",
    },
    {
      title: "Description",
      width: 600,
      align: "center",
      dataIndex: "description",
    },
    {
      title: "Category",
      align: "center",
      dataIndex: "category",
      width: 80,
    },
    {
      title: "Original Price",
      width: 70,
      align: "center",
      render: (value, record, index) => {
        return record.originalPrice + "$";
      },
    },
    {
      title: "Opening Bid",
      align: "center",
      render: (value, record, index) => {
        return record.openingBid + "$";
      },
    },
    {
      title: "Pariticipating Bidders",
      width: 40,
      align: "center",
      render: (value, record, index) => {
        return (
          record.minParticipatingBidders +
          "/" +
          record.participatingBidders.length
        );
      },
    },
    {
      title: "Starting Date",
      align: "center",
      dataIndex: "startingDate",
      sorter: (a, b) =>
        moment(a.startingDate).unix() - moment(b.startingDate).unix(),
      sortDirections: ["descend", "ascend"],
      render: (value, record, index) => {
        return moment(record.startingDate).format(
          "ddd, MMM D, YYYY [at] h:mm A"
        );
      },
    },
    {
      title: "Action",
      align: "center",
      children: [
        {
          title: "View Seller",
          align: "center",

          render: (value, record, index) => {
            return (
              <p
                className="cursor-pointer text-blue-500"
                onClick={() => {
                  handleSellerModal(record);
                }}
              >
                View
              </p>
            );
          },
        },
        {
          title: "Participate",
          align: "center",

          render: (value, record, index) => {
            return (
              <p
                className="cursor-pointer text-blue-500"
                onClick={() => {
                  handleAuctionListingModal(record);
                }}
              >
                View
              </p>
            );
          },
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex ml-2 overflow-hidden pt-8">
        <div
          id="main-content"
          className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
        >
          <div className="flex items-center justify-center mb-2">
            <h1 className="text-2xl font-bold mb-2 mr-2">
              Ongoing Auctions Table
            </h1>
            <MdOutlinePendingActions size={30} />
          </div>

          {ongoingAuctions && (
            <>
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                spinning={loading}
              >
                <Table
                  columns={UpcomingAuctionsColumnType}
                  dataSource={ongoingAuctions}
                  scroll={{ x: 800 }}
                  pagination={{
                    position: ["bottomCenter"],
                    pageSize: 10,
                  }}
                  className="mr-2"
                  bordered
                />
              </Spin>
            </>
          )}
        </div>
      </div>
      {isOngoingAuctionModalOpen && auction && <AdminBiddingRoomModal />}
    </>
  );
}
