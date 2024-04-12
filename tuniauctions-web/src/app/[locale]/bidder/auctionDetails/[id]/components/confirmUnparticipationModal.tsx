"use client";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { AuctionListingType } from "@/models/types/auctionListing";
import { Modal } from "antd";
import { useSignoutBidder } from "../../../navbar/components/components/profileDropdownMenu";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";

interface Props {
  isConfirmUnarticipationModalOpen: boolean;
  setIsComfirmUnparticipationModal: (value: boolean) => void;
  auctionListing: AuctionListingType;
  setAuctionListing: (item: AuctionListingType) => void;
}
export default function ConfirmUnparticipationModal({
  isConfirmUnarticipationModalOpen,
  setIsComfirmUnparticipationModal,
  auctionListing,
  setAuctionListing,
}: Props) {
  const { setBidderLocalStorageData } = useBidderProfileStore();
  const signout = useSignoutBidder();
  const [loading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  async function handleConfirmParticipation() {
    setIsLoading(true);
    const res = await fetch("/api/bidder/unparticipate", {
      method: "POST",
      body: JSON.stringify({ auctionId: auctionListing._id }),
    });
    const resData: any = await res.json();

    setIsLoading(false);
    if (resData.errorMessage) {
      setErrorMessage(resData.errorMessage);
    }
    if (resData.bidderFrontData) {
      setBidderLocalStorageData(resData.bidderFrontData);
      setIsComfirmUnparticipationModal(false);
      setAuctionListing(resData.auctionListing);
    } else if (resData.authError) {
      await signout();
    }
  }
  return (
    <>
      <Modal
        title=""
        centered
        open={isConfirmUnarticipationModalOpen}
        width={600}
        onCancel={() => {
          setIsComfirmUnparticipationModal(false);
        }}
        onOk={handleConfirmParticipation}
        okButtonProps={{
          style: {
            backgroundColor: "green",
            borderColor: "green",
            color: "white",
          },
        }}
        cancelButtonProps={{
          style: { backgroundColor: "red", borderColor: "red", color: "white" },
        }}
      >
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          spinning={loading}
        >
          <p>
            {errorMessage && (
              <span className="text-red-700 text-lg">{errorMessage}</span>
            )}
          </p>
          Confirm Unparticipation For {auctionListing.title} auction ?
        </Spin>
      </Modal>
    </>
  );
}
