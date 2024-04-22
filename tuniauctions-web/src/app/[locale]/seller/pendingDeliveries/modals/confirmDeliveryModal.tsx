import React, { useState } from "react";
import { Modal } from "antd";
import { DeliveryType } from "@/models/types/delivery";

interface Props {
  auctionTitle: string;
  deliveryId: string;
  setConfirmDeliveryModal: (value: boolean) => void;
  isConfirmDeliveryModalOpen: boolean;
  setTableData: (value: DeliveryType[] | undefined) => void;
}

export default function ConfirmDeliverymodal({
  setTableData,
  auctionTitle,
  deliveryId,
  isConfirmDeliveryModalOpen,
  setConfirmDeliveryModal,
}: Props) {
  const [errMessage, setErrMessage] = useState("");
  async function confirmDelivery() {
    setErrMessage("");
    const res = await fetch("/api/seller/confirmDelivery", {
      method: "PUT",
      body: JSON.stringify({ deliveryId }),
    });
    const resData = await res.json();
    if (resData.success) {
      setTableData(resData.deliveries);
      setConfirmDeliveryModal(false);
    } else {
      setConfirmDeliveryModal(false);
    }
  }
  return (
    <>
      <Modal
        title="Confirm Delivery ?"
        open={isConfirmDeliveryModalOpen}
        onOk={() => {
          setConfirmDeliveryModal(false);
        }}
        onCancel={() => {
          setConfirmDeliveryModal(false);
        }}
        footer={false}
        width={500}
      >
        {errMessage && <p className="text-red-700">{errMessage}</p>}

        <button
          type="button"
          className="mt-6 px-16 py-3 w-full bg-gray-800 text-white rounded-lg"
          onClick={confirmDelivery}
        >
          Submit
        </button>
      </Modal>
    </>
  );
}
