import { Modal, Button, Image, Input } from "antd";
import { useState } from "react";
import { IBidderFrontData } from "@/models/usersModels/types/bidderTypes";
import { AuctionListingType } from "@/models/types/auctionListing";

interface Props {
  isEditLockedBalanceModalOpen: boolean;
  setEditLockedBalanceModalSate: (value: boolean) => void;
  setTableData: (value: AuctionListingType[] | undefined) => void;
  previousLockedBalance: number;
  setBidderLocalStorageData: (value: IBidderFrontData) => void;
  activeBalance: number;
  auctionListing: AuctionListingType;
}

export default function EditLockedBalanceModal({
  isEditLockedBalanceModalOpen,
  setEditLockedBalanceModalSate,
  setTableData,
  previousLockedBalance,
  setBidderLocalStorageData,
  auctionListing,
  activeBalance,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [newLockedBalance, setNewLockedBalance] = useState<number>(
    previousLockedBalance
  );

  const handleConfirm = async () => {
    setLoading(true);
    setErrorMessage("");
    if (newLockedBalance !== previousLockedBalance) {
      if (newLockedBalance > auctionListing.openingBid) {
        if (newLockedBalance < activeBalance) {
          const res = await fetch("/api/bidder/editLockedBalance", {
            method: "PUT",
            body: JSON.stringify({
              previousLockedBalance,
              newLockedBalance,
              minPartFee: auctionListing.openingBid,
              auctionId: auctionListing._id,
            }),
          });
          const resData = await res.json();
          if (resData.success) {
            setBidderLocalStorageData(resData.bidderFrontData);
            setTableData(resData.auctions);
            setEditLockedBalanceModalSate(false);
          } else {
            setErrorMessage(resData.errorMessage);
          }
        } else {
          setErrorMessage("notEnoughBalance");
        }
      } else {
        setErrorMessage("lessThenMinFee");
      }
    } else {
      setErrorMessage("sameLockedBalance");
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setEditLockedBalanceModalSate(false);
    setErrorMessage("");
  };

  return (
    <Modal
      title="Edit Locked Balance"
      centered
      open={isEditLockedBalanceModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <div className="flex flex-col items-center justify-center">
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <Input
          min={auctionListing.openingBid}
          value={newLockedBalance || 0}
          onChange={(e) => setNewLockedBalance(parseInt(e.target.value))}
          placeholder="Enter verification code"
        />
        <div className="flex gap-4 mt-4">
          <Button
            key="confirm"
            type="primary"
            loading={loading}
            onClick={handleConfirm}
            style={{ backgroundColor: "green", borderColor: "green" }}
          >
            Confirm
          </Button>
          <Button loading={loading} key="cancel" onClick={handleCancel} danger>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}
