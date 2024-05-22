"use client";
import * as React from "react";
import LocationPresets from "./components/locationPresets";
import { DeliveryType } from "@/models/types/delivery";
import DeliveryStatusDisplay from "./components/deliveryStatusDisplay";
import Image from "next/image";
import { Input } from "antd";
export interface locationPeset {
  phoneNumber: string | null;
  street: string | null;
}
function MyComponent({ params }: { params: { deliveryId: string } }) {
  const [selectedOption, setSelectedOption] = React.useState<string>("billing");
  const [delivery, setDelivery] = React.useState<DeliveryType | undefined>(
    undefined
  );
  const [locationPreset, setLocationPreset] = React.useState<locationPeset>({
    phoneNumber: null,
    street: null,
  });
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  async function confirmLocation() {
    if (
      (locationPreset.street !== null || "") &&
      (locationPreset.phoneNumber !== null || "")
    ) {
      setSubmitting(true);
      const res = await fetch("/api/bidder/confirmLocation", {
        method: "POST",
        body: JSON.stringify({ locationPreset, deliveryId: params.deliveryId }),
      });
      const resData = await res.json();
      if (resData.delivery) {
        setDelivery(resData.delivery);
      }
      setSubmitting(false);
    }
    setSubmitting(false);
  }
  async function getDeliveryData() {
    const res = await fetch("/api/general/getDeliveryData", {
      method: "POST",
      body: JSON.stringify({ deliveryId: params.deliveryId }),
    });
    const resData = await res.json();
    console.log(resData);
    if (resData.delivery) {
      setDelivery(resData.delivery);
    }
  }
  React.useEffect(() => {
    if (params.deliveryId) {
      getDeliveryData();
    }
  }, [params]);
  return (
    <>
      {delivery != undefined && (
        <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
          <div className="flex flex-col mt-6 w-full max-w-[1586px] max-md:max-w-full">
            <div className="max-md:max-w-full">
              {delivery && delivery.status === "Pending bidder informations" ? (
                <>
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-center items-center">
                    <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                        <div className="text-5xl max-md:text-4xl">
                          Delivery Page
                        </div>
                        <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full justify-center">
                          <div
                            className={`text-2xl max-md:mt-10 max-md:text-center mt-12 cursor-pointer ${
                              selectedOption === "billing"
                                ? "text-blue-800"
                                : ""
                            }`}
                            onClick={() => (
                              setSelectedOption("billing"),
                              setLocationPreset({
                                phoneNumber: "",
                                street: "",
                              })
                            )}
                          >
                            Billing Details
                          </div>
                          <div
                            className={`text-2xl max-md:mt-10 max-md:text-center mt-12 cursor-pointer ${
                              selectedOption === "preset" ? "text-blue-800" : ""
                            }`}
                            onClick={() => (
                              setSelectedOption("preset"),
                              setLocationPreset({
                                phoneNumber: "",
                                street: "",
                              })
                            )}
                          >
                            Select Preset
                          </div>
                        </div>
                        {selectedOption === "billing" ? (
                          <>
                            <div className="flex gap-5 justify-between mt-12 max-md:flex-wrap max-md:mt-10">
                              <Input
                                size="large"
                                placeholder="Phone Number"
                                onChange={(e) => {
                                  setLocationPreset((prev) => ({
                                    ...prev,
                                    phoneNumber: e.target.value,
                                  }));
                                }}
                                className="shrink-0 max-w-full rounded-xl h-[65px] w-[446px] text-xl"
                              />
                            </div>
                            <Input.TextArea
                              placeholder="Address"
                              onChange={(e) => {
                                setLocationPreset((prev) => ({
                                  ...prev,
                                  street: e.target.value,
                                }));
                              }}
                              className="shrink-0 mt-4 rounded-xl h-[203px] max-md:max-w-full text-xl"
                              autoSize={{ minRows: 4, maxRows: 6 }}
                            />
                          </>
                        ) : (
                          <>
                            <LocationPresets
                              setLocationPreset={setLocationPreset}
                            />
                          </>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            confirmLocation();
                          }}
                          className="justify-center items-center self-center px-8 py-6 mt-7 max-w-full text-xl tracking-wide leading-5 text-center text-white whitespace-nowrap bg-emerald-400 rounded w-[442px] max-md:px-5 cursor-pointer"
                          disabled={submitting}
                        >
                          {submitting ? "Loading ..." : "Confirm"}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-10 pt-8 pb-20 rounded-2xl border border-gray-200 border-solid shadow-sm text-slate-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="text-2xl leading-7 max-md:max-w-full">
                          Your Order
                        </div>
                        <div className="shrink-0 mt-10 h-px bg-gray-200 max-md:max-w-full" />
                        <Image
                          className="shrink-0 self-center mt-16 h-52 rounded-2xl border border-gray-200 border-solid w-[225px] max-md:mt-10"
                          src={delivery?.productInformations.productPicture}
                          alt="ProductPicture"
                          height={400}
                          width={500}
                        />
                        <div className="self-center mt-14 text-xl leading-5 text-center max-md:mt-10">
                          {delivery?.productInformations.productName}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <DeliveryStatusDisplay
                    deliveryData={delivery}
                    setDeliveryData={setDelivery}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyComponent;
