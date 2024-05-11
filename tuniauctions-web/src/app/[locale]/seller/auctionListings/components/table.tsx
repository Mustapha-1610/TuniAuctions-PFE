import { Table, TableColumnsType, Tag } from "antd";
import { auctionListingsChildrenProps } from "../page";
import { AuctionListingType } from "@/models/types/auctionListing";
import moment from "moment";
import { useSellerStore } from "@/helpers/store/seller/sellerStore";
import SellerAuctionListingModal from "@/app/[locale]/seller/modals/auctionListingModal";
import SellerBiddingRoomModal from "../../modals/biddingRoomModal";
import AuctionStatisticsModal from "../../modals/auctionStatistics";
export default function StatisticsTable({
  auctionListings,
}: auctionListingsChildrenProps) {
  const {
    setAuction,
    setUpcomingAucitonModalState,
    setOngoingAuctionModalState,
    auction,
    isOngoingAuctionModalOpen,
    isUpcomingAuctionModalOpen,
    isAuctionStatisticsModalOpen,
    setAuctionStatisticsModalState,
  } = useSellerStore();
  function handleAuctionListingModal(auction: AuctionListingType) {
    if (auction) {
      setAuction(auction);
      setUpcomingAucitonModalState(true);
    }
  }
  function handleOngoingListingModal(auction: AuctionListingType) {
    if (auction) {
      setAuction(auction);
      setOngoingAuctionModalState(true);
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
      width: 490,
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
          record.participatingBidders.length +
          "/" +
          record.minParticipatingBidders
        );
      },
    },
    {
      title: "Starting Date",
      align: "center",
      width: 260,
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
      title: "Starting Date",
      align: "center",
      dataIndex: "startingDate",
      render: (value, record, index) => {
        return (
          <Tag
            color={
              record.status === "Pending Start"
                ? "purple"
                : record.status === "Ongoing"
                ? "gold"
                : "green"
            }
          >
            <span className="font-bold">{record.status}</span>
          </Tag>
        );
      },
    },
    {
      title: "Action",
      align: "center",
      children: [
        {
          title: "View Statistics",
          align: "center",

          render: (value, record, index) => {
            return record.listingType !== "Basic" ? (
              <p
                className="cursor-pointer text-blue-500"
                onClick={() => {
                  setAuction(record), setAuctionStatisticsModalState(true);
                }}
              >
                View
              </p>
            ) : (
              <></>
            );
          },
        },
        {
          title: "View Listing",
          align: "center",

          render: (value, record, index) => {
            return record.status === "Ongoing" ? (
              <>
                <p
                  className="cursor-pointer text-blue-500"
                  onClick={() => {
                    handleOngoingListingModal(record);
                  }}
                >
                  Participate
                </p>
              </>
            ) : (
              <>
                <p
                  className="cursor-pointer text-blue-500"
                  onClick={() => {
                    handleAuctionListingModal(record);
                  }}
                >
                  View
                </p>
              </>
            );
          },
        },
      ],
    },
  ];
  return (
    <>
      <Table
        columns={UpcomingAuctionsColumnType}
        dataSource={auctionListings}
        scroll={{ x: 800 }}
        pagination={{
          position: ["bottomCenter"],
          pageSize: 10,
        }}
        className="mr-2"
        bordered
      />
      {isUpcomingAuctionModalOpen && auction && <SellerAuctionListingModal />}
      {isOngoingAuctionModalOpen && auction && <SellerBiddingRoomModal />}
      {isAuctionStatisticsModalOpen && auction && <AuctionStatisticsModal />}
    </>
  );
}
