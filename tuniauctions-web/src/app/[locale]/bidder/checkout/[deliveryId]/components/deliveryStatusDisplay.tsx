"use client";
import { DeliveryType } from "@/models/types/delivery";
import moment from "moment";
import { useEffect, useState } from "react";
import { Rate } from "antd";

interface Props {
  deliveryData: DeliveryType | undefined;
  setDeliveryData: (value: DeliveryType) => void;
}
export default function DeliveryStatusDisplay({
  deliveryData,
  setDeliveryData,
}: Props) {
  useEffect(() => {}, [deliveryData]);
  async function handleSellerRating(value: number) {
    if (deliveryData) {
      const res = await fetch("/api/bidder/giveSellerRating", {
        method: "PUT",
        body: JSON.stringify({
          deliveryId: deliveryData._id,
          rating: value,
        }),
      });
      const resData = await res.json();
      console.log(resData);
      if (resData.success) {
        setDeliveryData(resData.delivery);
      }
    }
  }
  return (
    <>
      {deliveryData && (
        <>
          <div className=" text-5xl leading-[57.6px] text-slate-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Delivery Page
          </div>
          <div className="flex flex-col justify-center px-16 py-10 mt-12 rounded-2xl border border-gray-200 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col mx-11 max-md:mr-2.5 max-md:max-w-full">
              <div className="text-2xl leading-7 text-slate-700 max-md:max-w-full">
                Your Order
              </div>
              <div className="shrink-0 mt-8 h-px bg-gray-200 max-md:max-w-full" />
              <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <img
                      src={deliveryData.productInformations.productPicture}
                      className="shrink-0 max-w-full rounded-2xl border border-gray-900 border-solid h-[405px] w-[442px] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-2xl leading-[57.6px] text-black font-lg max-md:mt-10 max-md:max-w-full">
                      <div className="max-md:max-w-full">
                        Product : {deliveryData.productInformations.productName}
                      </div>
                      <div className="mt-2 max-md:mt-10 max-md:max-w-full">
                        Expected Delivery Date :{" "}
                        {deliveryData.deliveryDate ? (
                          <>Delivered</>
                        ) : (
                          <>
                            {deliveryData.expectedDeliveryDate ? (
                              <>
                                from :{" "}
                                {moment(
                                  deliveryData.expectedDeliveryDate.from
                                ).format("MMMM DD, YYYY ")}
                                , to :{" "}
                                {moment(
                                  deliveryData.expectedDeliveryDate.to
                                ).format("MMMM DD, YYYY  ")}
                              </>
                            ) : (
                              <>Not decided yet</>
                            )}
                          </>
                        )}
                      </div>
                      <div className="mt-2 max-md:mt-10 max-md:max-w-full">
                        Delivery Date :{" "}
                        {deliveryData.deliveryDate &&
                          moment(deliveryData.deliveryDate).format(
                            " dddd, MMMM D, YYYY hh:mm A"
                          )}
                      </div>
                      <div className="mt-2 max-md:mt-10 max-md:max-w-full">
                        Status : {deliveryData.status}
                      </div>
                      {deliveryData.deliveryDate && (
                        <>
                          {!deliveryData.sellerReview && (
                            <div className="mt-2 max-md:mt-10 max-md:max-w-full">
                              Seller Rating :{" "}
                              <Rate
                                defaultValue={1}
                                onChange={(value) => handleSellerRating(value)}
                              />
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
