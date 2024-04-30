"use client";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { Modal, Button, Image, Spin } from "antd";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";

interface Props {
  isSellerAccountApplicationModalOpen: boolean;
  setSellerAccountApplicationModalState: (value: boolean) => void;
  sellerData: ISeller | undefined;
}

export default function SellerAccountApplicationModal({
  isSellerAccountApplicationModalOpen,
  setSellerAccountApplicationModalState,
  sellerData,
}: Props) {
  const locale = useLocale();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  async function handleSellerResponse(response: boolean) {
    if (sellerData) {
      setLoading(true);
      const res = await fetch("/api/admin/handleSellerApproval", {
        method: "POST",
        body: JSON.stringify({
          sellerId: sellerData._id,
          approve: response,
        }),
      });
      const resData = await res.json();
      if (resData.success) {
        // Get the router object
        router.push(`/${locale}/admin/sellers/active`);
        setSellerAccountApplicationModalState(false);
      } else {
        setSellerAccountApplicationModalState(false);
      }
      setLoading(false);
    }
  }

  return (
    <Modal
      title="Seller Account Application"
      centered
      open={isSellerAccountApplicationModalOpen}
      width={800}
      onCancel={() => setSellerAccountApplicationModalState(false)}
      footer={[
        <Button
          key="accept"
          className=" color-white bg-green-400"
          onClick={() => {
            handleSellerResponse(true);
          }}
          disabled={loading}
        >
          Accept
        </Button>,
        <Button
          key="decline"
          danger
          disabled={loading}
          onClick={() => {
            handleSellerResponse(false);
          }}
        >
          Decline
        </Button>,
      ]}
    >
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        spinning={loading}
      >
        {sellerData && (
          <div className="flex justify-between">
            {/* Seller General Information */}
            <div className="flex flex-col  w-1/2 p-4 border-r">
              <h2 className="text-lg font-bold ">Seller Information's :</h2>
              <p className="mt-4 mb-4 text-lg">
                <span className="font-bold mt-4 mb-4">Name:</span>{" "}
                {sellerData.name}
              </p>
              <p className="mt-4 mb-4 text-lg">
                <span className="font-bold">Description:</span>{" "}
                {sellerData.description}
              </p>
              <p className="mt-4 mb-4 text-lg">
                <span className="font-bold">Location:</span>{" "}
                {sellerData.location.city}, {sellerData.location.municipality},{" "}
                {sellerData.location.street}
              </p>
            </div>

            {/* Registration License Image */}
            <div className="w-1/2 p-4">
              <h2 className="text-lg font-bold mb-4">Registration License</h2>
              <Image
                src={sellerData.registrationLicense}
                alt="Registration License"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </Spin>
    </Modal>
  );
}
