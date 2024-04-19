import { Modal } from "antd";
import React, { useEffect } from "react";

export interface BidderSellerDeliveryInformationsData {
  name: string | undefined;
  phoneNumber: number | undefined;
  street: string | undefined;
}

interface Props {
  isBidderLocationModalOpen: boolean;
  setIsBidderLocationModalOpen: (value: boolean) => void;
  bidderData: BidderSellerDeliveryInformationsData | undefined;
  setBidderData: (value: BidderSellerDeliveryInformationsData) => void;
}

export default function BidderLocationModal({
  isBidderLocationModalOpen,
  setIsBidderLocationModalOpen,
  bidderData,
  setBidderData,
}: Props) {
  useEffect(() => {}, [bidderData]);

  return (
    <Modal
      title=""
      centered
      open={isBidderLocationModalOpen}
      width={600}
      footer={null}
      onCancel={() => {
        setIsBidderLocationModalOpen(false);
        setBidderData({
          name: undefined,
          phoneNumber: undefined,
          street: undefined,
        });
      }}
    >
      {bidderData && (
        <div className="flex flex-col bg-white">
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="flex flex-col pb-2 bg-white items-center mt-8 mx-4">
              <div className="text-center font-bold text-lg">
                Bidder Delivery Location Data
              </div>
              <div className="px-10 py-8 w-full max-w-xl bg-white rounded-lg sm:w-[600px]">
                <div className="mt-4">
                  <label htmlFor="nameInput">Name:</label>
                  <input
                    type="text"
                    id="nameInput"
                    defaultValue={bidderData.name}
                    disabled={true}
                    readOnly={true}
                    className="mt-1 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Name"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="phoneNumberInput">Phone Number:</label>
                  <input
                    type="text"
                    id="phoneNumberInput"
                    defaultValue={bidderData.phoneNumber}
                    readOnly={true}
                    disabled={true}
                    placeholder="Phone Number"
                    className="mt-1 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="streetInput">Street:</label>
                  <textarea
                    id="streetInput"
                    placeholder="Street"
                    defaultValue={bidderData.street}
                    disabled={true}
                    readOnly={true}
                    className="mt-1 px-4 py-2 w-full h-20 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
