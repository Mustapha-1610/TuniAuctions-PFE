"use client";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import { Table, TableColumnsType } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
import BidderInformationsModal from "../modals/bidderModal";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import SellerAccountApplicationModal from "../modals/sellerApplicationModal";
import { MdOutlinePendingActions } from "react-icons/md";

interface Props {
  sellers: ISeller[];
}
export default function PendingSellersTable({ sellers }: Props) {
  const { setBidder, setBidderInformationsModalState } = useAdminStore();
  const [sellersData, setSellersData] = useState<ISeller[] | undefined>(
    sellers
  );

  useEffect(() => {}, [sellers]);
  const {
    delivery,
    seller,
    isDeliveryModalOpen,
    setSeller,
    setSellerAccountApplicationModalState,
    isSellerModalOpen,
    isSellerAccountApplicationModalOpen,
    auction,
    isUpcomingAuctionModalOpen,
    isOngoingAuctionModalOpen,
    bidder,
    isBidderInformationModalOpen,
  } = useAdminStore();
  const pendingSellersAdminTableColumnsType: TableColumnsType<ISeller> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 500,
      align: "center",
    },
    {
      title: "Location",
      width: 120,
      align: "center",
      children: [
        {
          title: "City",
          width: 90,
          render: (_, record) => {
            return record.location.city;
          },
          align: "center",
        },
        {
          title: "Municipality",
          width: 90,

          render: (_, record) => {
            return record.location.municipality;
          },
          align: "center",
        },
        {
          title: "Street",
          width: 450,
          render: (_, record) => {
            return record.location.street;
          },
          align: "center",
        },
      ],
    },
    {
      title: "Action",
      align: "center",
      render: (_, record) => {
        return (
          <p
            className="cursor-pointer text-blue-500"
            onClick={() => {
              setSeller(record);
              setSellerAccountApplicationModalState(true);
            }}
          >
            View Application
          </p>
        );
      },
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
              Sellers Pending Approval Table
            </h1>
            <MdOutlinePendingActions size={30} />
          </div>

          {sellersData && (
            <>
              <Table
                columns={pendingSellersAdminTableColumnsType}
                dataSource={sellersData}
                scroll={{ x: 800 }}
                pagination={{
                  position: ["bottomCenter"],
                  pageSize: 10,
                }}
                className="mr-2"
                bordered
              />
            </>
          )}
        </div>
      </div>
      {isSellerAccountApplicationModalOpen && seller && (
        <SellerAccountApplicationModal setSellers={setSellersData} />
      )}
    </>
  );
}
