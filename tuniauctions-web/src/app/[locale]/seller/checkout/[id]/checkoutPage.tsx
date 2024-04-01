"use client";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
import { Pricing } from "@/models/types/pricing";
import { resDataType } from "@/serverHelpers/types";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { handleClientScriptLoad } from "next/script";
import * as React from "react";
import { FaCheckCircle, FaLock } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
interface Props {
  pricing: Pricing;
}
export default function CheckoutPage({ pricing }: Props) {
  const [success, setSuccess] = React.useState(false);
  const { setSellerLocalStorageData } = useSellerProfileStore();

  async function handleConfirmPayment() {
    const res = await fetch("/api/seller/buyPack", {
      method: "PUT",
      body: JSON?.stringify({
        pricingId: pricing._id,
      }),
    });
    const resData: resDataType = await res.json();
    console.log(resData);
    if (resData.sellerFrontData) {
      setSellerLocalStorageData(resData.sellerFrontData);
      setSuccess(true);
    }
  }
  return (
    <div className="flex ml-2 overflow-hidden bg-white ">
      <div
        id="main-content"
        className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
      >
        <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="mt-8 mb-2 w-full max-w-[1200px] max-md:mb-2 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {success ? (
                <div className="flex flex-col items-center mt-20 justify-center w-full h-full">
                  <div className="flex flex-col items-center max-w-md p-8 ">
                    <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                      <ImCheckmark color="green" size={40} />
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-gray-800">
                      Transaction Successful
                    </h2>
                    <p className="mt-2 text-base text-gray-600">
                      Your payment has been processed successfully.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-center mt-3.5 text-base font-medium whitespace-nowrap text-black text-opacity-50 max-md:mt-10">
                      <div className="overflow-hidden relative flex-col items-center self-stretch  mt-6 w-full text-3xl font-semibold text-black underline aspect-square max-md:px-5 max-md:pt-10">
                        <img
                          loading="lazy"
                          srcSet="https://img.freepik.com/premium-vector/packaging-box-icon-vector-logo-template_917138-1363.jpg"
                          className="object-cover absolute inset-0 "
                        />
                      </div>

                      <div className="max-w-full h-px bg-black bg-opacity-50 w-[360px]" />

                      <div className="mt-5 text-black font-bold text-2xl">
                        {pricing.name} Package
                      </div>
                      <div className="mt-4 underline">
                        Total ${pricing.price}
                      </div>
                      <div className="mt-2 underline">Tax $25.00</div>
                      <div className="mt-4 text-4xl font-bold text-gray-900 text-opacity-80">
                        Bill Total : ${(pricing.price + 25).toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                      <div className="text-xl font-medium text-black underline max-md:max-w-full">
                        Check Out
                      </div>
                      <div className="mt-3 text-base underline text-black text-opacity-60 max-md:max-w-full">
                        complete your purchase by providing us with your payment
                        details
                      </div>
                      <div className="mt-6 text-xl font-medium text-black underline max-md:max-w-full">
                        Card Type
                      </div>
                      <div className="flex gap-5 justify-between pr-20 mt-2.5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                        <div className="flex flex-1 justify-center items-center px-5 py-2.5 rounded-md border border-black border-solid max-md:pr-5">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/afb2d8f51d5d5e2fc2c831e4acc439af01ca84a5b19563e480aba04594766e8c?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/afb2d8f51d5d5e2fc2c831e4acc439af01ca84a5b19563e480aba04594766e8c?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afb2d8f51d5d5e2fc2c831e4acc439af01ca84a5b19563e480aba04594766e8c?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/afb2d8f51d5d5e2fc2c831e4acc439af01ca84a5b19563e480aba04594766e8c?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/afb2d8f51d5d5e2fc2c831e4acc439af01ca84a5b19563e480aba04594766e8c?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afb2d8f51d5d5e2fc2c831e4acc439af01ca84a5b19563e480aba04594766e8c?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/afb2d8f51d5d5e2fc2c831e4acc439af01ca84a5b19563e480aba04594766e8c?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/afb2d8f51d5d5e2fc2c831e4acc439af01ca84a5b19563e480aba04594766e8c?apiKey=667400e2ab464aafaf7f58f148eb5c4c&"
                            className="aspect-[3.23] w-[70px]"
                          />
                        </div>
                        <div className="flex flex-1 justify-center items-center px-7 py-1 rounded-md border border-black border-solid max-md:px-5">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3f0e4fb32e2f60d313bb3890f9ca4cadc822d394b5806abdc6a6ffe567544905?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f0e4fb32e2f60d313bb3890f9ca4cadc822d394b5806abdc6a6ffe567544905?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f0e4fb32e2f60d313bb3890f9ca4cadc822d394b5806abdc6a6ffe567544905?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f0e4fb32e2f60d313bb3890f9ca4cadc822d394b5806abdc6a6ffe567544905?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f0e4fb32e2f60d313bb3890f9ca4cadc822d394b5806abdc6a6ffe567544905?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f0e4fb32e2f60d313bb3890f9ca4cadc822d394b5806abdc6a6ffe567544905?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f0e4fb32e2f60d313bb3890f9ca4cadc822d394b5806abdc6a6ffe567544905?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f0e4fb32e2f60d313bb3890f9ca4cadc822d394b5806abdc6a6ffe567544905?apiKey=667400e2ab464aafaf7f58f148eb5c4c&"
                            className="aspect-[1.49] w-[51px]"
                          />
                        </div>
                        <div className="flex flex-1 justify-center items-center px-5 py-3 rounded-md border border-black border-solid max-md:pl-5">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/866de0c525caff8bd80a99d87603d7e70bb3d4ccf905c914c10ce494f99a97bc?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/866de0c525caff8bd80a99d87603d7e70bb3d4ccf905c914c10ce494f99a97bc?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/866de0c525caff8bd80a99d87603d7e70bb3d4ccf905c914c10ce494f99a97bc?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/866de0c525caff8bd80a99d87603d7e70bb3d4ccf905c914c10ce494f99a97bc?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/866de0c525caff8bd80a99d87603d7e70bb3d4ccf905c914c10ce494f99a97bc?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/866de0c525caff8bd80a99d87603d7e70bb3d4ccf905c914c10ce494f99a97bc?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/866de0c525caff8bd80a99d87603d7e70bb3d4ccf905c914c10ce494f99a97bc?apiKey=667400e2ab464aafaf7f58f148eb5c4c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/866de0c525caff8bd80a99d87603d7e70bb3d4ccf905c914c10ce494f99a97bc?apiKey=667400e2ab464aafaf7f58f148eb5c4c&"
                            className="aspect-[3.33] w-[70px]"
                          />
                        </div>
                      </div>
                      <div className="mt-14 text-xl font-medium text-black underline max-md:mt-10 max-md:max-w-full">
                        Card holder Name
                      </div>
                      <div className="mt-4">
                        <input
                          type="text"
                          className="w-full py-2.5 px-5 rounded-lg bg-zinc-100 bg-opacity-60 text-black  border border-black border-solid outline-none"
                        />
                      </div>

                      <div className="mt-4 text-xl font-medium text-black underline max-md:mt-10 max-md:max-w-full">
                        Card Number
                      </div>
                      <div className="mt-4">
                        <input
                          type="text"
                          className="w-full py-2.5 px-5 rounded-lg bg-zinc-100 bg-opacity-60 text-black  border border-black border-solid outline-none"
                        />
                      </div>
                      <div className="flex gap-5 justify-between pr-20 mt-8 font-medium whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                        <div className="flex flex-col flex-1">
                          <div className="text-xl text-black underline">
                            Expiration Date
                          </div>
                          <div>
                            <input
                              type="text"
                              className="flex gap-5 justify-between py-1 py-2.5 text-center  mt-2.5 text-base rounded-lg border border-black border-solid bg-zinc-100 bg-opacity-60 text-black text-opacity-50 max-md:pl-5"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col flex-1">
                          <div className="text-xl text-black underline">
                            CVV code
                          </div>
                          <div>
                            <input
                              type="text"
                              className="flex gap-5 justify-between py-1 py-2.5 text-center  mt-2.5 text-base rounded-lg border border-black border-solid bg-zinc-100 bg-opacity-60 text-black text-opacity-50 max-md:pl-5"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        className="flex cursor-pointer read-only justify-center items-center px-16 py-3 mt-14 text-base font-semibold text-white bg-black rounded-lg max-md:px-5 max-md:mt-10 max-md:max-w-full"
                        onClick={handleConfirmPayment}
                      >
                        Pay ${(pricing.price + 25).toFixed(2)}
                      </button>

                      <div className="flex self-start mt-4 text-base font-medium text-black underline whitespace-nowrap max-md:ml-2.5 items-center">
                        <FaLock className="mr-2" />
                        Payments are secured and encrypted
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
