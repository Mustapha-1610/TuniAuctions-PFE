"use client";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import { Button, Modal, Image } from "antd";
import { DeliveryType } from "@/models/types/delivery";
import moment from "moment";
import { useState } from "react";
import { ObjectId } from "mongoose";
import SellerDataModal from "./sellerModal";
export default function ReportedDeliveryModal() {
  const {
    delivery,
    isDeliveryModalOpen,
    setDeliveryModalState,
    setSeller,
    setSellerModalState,
    isSellerModalOpen,
    seller,
  } = useAdminStore();
  const [selectedImage, setSelectedImage] = useState("");
  async function fetchSellerData(sellerId: string) {
    const res = await fetch("/api/admin/fetchSellerData", {
      method: "POST",
      body: JSON.stringify({
        sellerId,
      }),
    });
    const resData = await res.json();
    if (resData) {
      setSeller(resData);
      setDeliveryModalState(false);
      setSellerModalState(true);
    }
  }
  return (
    <>
      <Modal
        title="Reported Delivery Information"
        centered
        open={isDeliveryModalOpen}
        width={1280} // Increased width for better organization
        onCancel={() => setDeliveryModalState(false)}
        footer={null}
      >
        {delivery && (
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2">
              {/* Seller Information */}
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-lg font-semibold">Seller Information</h2>
                <p>Seller ID: {String(delivery.sellerId)}</p>
                <p>Seller Name: {delivery.sellerName}</p>
                <p
                  className="cursor-pointer text-blue-500"
                  onClick={() => {
                    fetchSellerData(String(delivery.sellerId));
                  }}
                >
                  View Seller
                </p>
              </div>
              {/* Product Information */}
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-lg font-semibold">Auction Information</h2>
                <p>Auction Name: {delivery.productInformations.productName}</p>
                <p>
                  Auction ID: {String(delivery.productInformations.productId)}
                </p>
                <p className="cursor-pointer text-blue-500" onClick={() => {}}>
                  View Auction Listing
                </p>
                <Image src={delivery.productInformations.productPicture} />
              </div>
            </div>
            <div className="lg:w-1/2">
              {/* Delivery Information */}
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-lg font-semibold">Delivery Information</h2>
                <p>
                  Delivery Date:{" "}
                  {moment(delivery.deliveryDate).format(
                    "dddd, MMMM D, YYYY hh:mm A"
                  )}
                </p>
              </div>
              {/* Bidder Information */}
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-lg font-semibold">Bidder Information</h2>
                <p>Bidder Name: {delivery.biddderDeliveryInformations?.name}</p>
                <p>
                  Bidder Phone Number:{" "}
                  {delivery.biddderDeliveryInformations?.phoneNumber}
                </p>
                <p>
                  Bidder Street: {delivery.biddderDeliveryInformations?.sreet}
                </p>
                <p className="cursor-pointer  text-blue-500" onClick={() => {}}>
                  View Bidder
                </p>
              </div>
              {/* Report Information */}
              <div>
                <h3 className="text-lg font-semibold">Attachments</h3>
                {delivery.report.attachments.length > 0 && (
                  <div className="relative flex flex-col items-center">
                    <Image
                      src={selectedImage || delivery.report.attachments[0]}
                      height={500}
                      width="full"
                      className="self-center mt-1"
                    />
                    <div className="flex justify-center mt-4">
                      {delivery.report.attachments.map((image, index) => (
                        <div
                          key={index}
                          className="w-12 h-12 mx-1 cursor-pointer rounded-full bg-gray-300 border border-gray-400"
                          onClick={() => {
                            setSelectedImage(
                              delivery.report.attachments[index]
                            );
                          }}
                          style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
