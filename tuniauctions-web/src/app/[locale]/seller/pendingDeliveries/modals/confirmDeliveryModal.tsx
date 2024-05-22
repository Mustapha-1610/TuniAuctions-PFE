"use client";
import React, { useState } from "react";
import { Modal } from "antd";
import { DeliveryType } from "@/models/types/delivery";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";

interface Props {
  deliveryId: string;
  setConfirmDeliveryModal: (value: boolean) => void;
  isConfirmDeliveryModalOpen: boolean;
  setTableData: (value: DeliveryType[] | undefined) => void;
}

export default function ConfirmDeliverymodal({
  setTableData,
  deliveryId,
  isConfirmDeliveryModalOpen,
  setConfirmDeliveryModal,
}: Props) {
  const { setSellerLocalStorageData } = useSellerProfileStore();
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(false);
  async function confirmDelivery() {
    setLoading(true);
    setErrMessage("");
    const res = await fetch("/api/seller/confirmDelivery", {
      method: "PUT",
      body: JSON.stringify({ deliveryId }),
    });
    const resData = await res.json();
    if (resData.success && resData.sellerFrontData) {
      setTableData(resData.deliveries);
      setSellerLocalStorageData(resData.sellerFrontData);
      setConfirmDeliveryModal(false);
    } else {
      setConfirmDeliveryModal(false);
    }
    setLoading(false);
  }
  return (
    <>
      <Modal
        title={"Confirm Product Delivery Arrival ?"}
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
          className="mt-6 px-16 py-3 w-full bg-green-800 text-white rounded-lg"
          onClick={confirmDelivery}
        >
          {loading ? "Loading ..." : "Confirm"}
        </button>
      </Modal>
    </>
  );
}
