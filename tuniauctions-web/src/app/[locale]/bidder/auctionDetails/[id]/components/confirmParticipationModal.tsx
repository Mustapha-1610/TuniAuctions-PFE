"use client";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { AuctionListingType } from "@/models/types/auctionListing";
import { Modal } from "antd";
import { useSignoutBidder } from "../../../navbar/components/components/profileDropdownMenu";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";

interface Props {
  isConfirmParticipationModalOpen: boolean;
  setIsComfirmParticipationModal: (value: boolean) => void;
  auctionListing: AuctionListingType;
  setAuctionListing: (item: AuctionListingType) => void;
}
export default function ConfirmParticipartionModal({
  isConfirmParticipationModalOpen,
  setIsComfirmParticipationModal,
  auctionListing,
  setAuctionListing,
}: Props) {
  const { setBidderLocalStorageData } = useBidderProfileStore();
  const signout = useSignoutBidder();
  const [loading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  async function handleConfirmParticipation() {
    setIsLoading(true);
    const res = await fetch("/api/bidder/participate", {
      method: "POST",
      body: JSON.stringify({ auctionListingId: auctionListing._id }),
    });
    const resData: any = await res.json();

    setIsLoading(false);
    if (resData.errorMessage) {
      setErrorMessage(resData.errorMessage);
    }
    if (resData.bidderFrontData) {
      setBidderLocalStorageData(resData.bidderFrontData);
      setIsComfirmParticipationModal(false);
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
        open={isConfirmParticipationModalOpen}
        width={600}
        onCancel={() => {
          setIsComfirmParticipationModal(false);
        }}
        onOk={handleConfirmParticipation}
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
          {auctionListing.openingBid > 0 ? (
            <>
              By confirming your participation for {auctionListing.title}{" "}
              auction, {auctionListing.openingBid}$ will be locked out of your
              active balance till the auction is over !{" "}
            </>
          ) : (
            <>Confirm participation for {auctionListing.title} auction ?</>
          )}
        </Spin>
      </Modal>
    </>
  );
}
