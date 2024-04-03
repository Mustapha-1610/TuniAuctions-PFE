"use client";
import { Modal } from "antd";
import { auctionListingFormType, pictureFiles } from "./types";
import { useEffect, useState } from "react";
interface Props {
  isPreviewModalOpen: boolean;
  setPreviewModalOpen: (isPreviewModalOpen: boolean) => void;
  auctionListing: auctionListingFormType;
  picture: pictureFiles;
}
interface images {
  promotionalImage: string;
}
export default function PreviewModal({
  isPreviewModalOpen,
  setPreviewModalOpen,
  picture,
  auctionListing,
}: Props) {
  const [images, setImages] = useState<images>({
    promotionalImage: "",
  });
  useEffect(() => {
    const handleFileInputChange = () => {
      console.log("working");
      const file = picture.promotionalPicture;
      if (file) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = (e) => {
          setImages((prev) => ({
            ...prev,
            promotionalImage: e.target?.result as string,
          }));
        };
      }
      console.log(images);
    };

    handleFileInputChange();
  }, []);
  return (
    <>
      <>
        <Modal
          title=""
          centered
          open={isPreviewModalOpen}
          width={1650}
          footer={null}
          onCancel={() => setPreviewModalOpen(false)}
        >
          <div className="flex flex-col items-center px-20 mt-6 pt-7 pb-16 bg-white border border-black border-solid max-md:px-5">
            <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-7/12 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet={images.promotionalImage}
                    className="grow w-fit object-cover aspect-[1] max-md:mt-10 max-md:max-w-full"
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center self-stretch pt-9 pr-6 pb-6 pl-1.5 my-auto w-full font-bold text-black bg-white border border-white border-solid max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                    <div className="text-3xl text-center whitespace-nowrap">
                      Iphone 15 Example{" "}
                    </div>
                    <div className="self-stretch mt-8 text-sm max-md:max-w-full">
                      Unveiled in September 2023, the iPhone 15 boasts a
                      familiar design with a powerful A16 Bionic chip at its
                      core. Its beautiful Super Retina XDR OLED display,
                      available in 6.1-inch and 6.7-inch versions,{" "}
                    </div>
                    <div className="flex flex-col mt-6 max-w-full text-xl bg-white rounded-2xl w-[620px]">
                      <div className="flex items-center justify-center px-14 text-5xl font-bold text-center text-black whitespace-nowrap bg-white rounded-full border border-black border-solid h-[156px] stroke-[1px] w-[156px] max-md:px-5 max-md:text-4xl mx-auto">
                        4:49
                      </div>

                      <div className="flex gap-1 px-2 py-3 mt-6 text-base font-bold text-center text-black bg-white  border-solid max-md:w-full">
                        <div>Balance:</div>
                        <div>$300</div>
                      </div>

                      <div className="flex flex-col gap-3 self-stretch  text-base font-bold text-center text-black max-md:flex-wrap max-md:mt-6 max-md:max-w-full">
                        <input
                          type="text"
                          placeholder="Place Bid"
                          className=" justify-center items-center px-2 py-6 bg-zinc-300 rounded-[41px] max-md:px-5 text-center"
                        />

                        <div className="grow justify-center items-center px-16 py-6 whitespace-nowrap bg-slate-900 w-fit max-md:px-5 text-white">
                          Submit
                        </div>
                      </div>

                      <div className="mt-4 text-base font-bold text-center text-black whitespace-nowrap">
                        Bidding History
                      </div>
                      <div className="flex overflow-hidden relative flex-col justify-center self-stretch py-1 border border-black border-solid leading-[150%] min-h-[141px] stroke-[1px] stroke-black max-md:max-w-full">
                        <div className="flex relative flex-col px-1.5 py-1  max-md:max-w-full">
                          <div className="flex gap-5 justify-between py-1.5 w-full border border-white border-solid max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-4 text-base font-medium whitespace-nowrap text-neutral-900">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="shrink-0 w-14 aspect-square"
                              />
                              <div className="my-auto">$1,300</div>
                            </div>
                            <div className="flex-auto my-auto text-sm text-slate-500">
                              12/19/2023, 6:45 PM
                            </div>
                          </div>
                          <div className="flex gap-5 justify-between py-1.5 w-full border border-white border-solid max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-4 text-base font-medium whitespace-nowrap text-neutral-900">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="shrink-0 w-14 aspect-square"
                              />
                              <div className="my-auto">$1,300</div>
                            </div>
                            <div className="flex-auto my-auto text-sm text-slate-500">
                              12/19/2023, 6:45 PM
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-7 w-full max-w-[1396px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col  w-[56%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-8 py-6 w-full text-3xl text-center text-black bg-white border border-white border-solid max-md:px-5 max-md:max-w-full">
                    <div className="self-center">Product Video</div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 , https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                      className="mt-3.5 w-full aspect-[2.13] max-md:max-w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center self-stretch px-1.5 pt-7 pb-5 my-auto w-full text-center text-black bg-white border border-black border-solid max-md:mt-10 max-md:max-w-full">
                    <div className="text-3xl">Buy It Now</div>
                    <img
                      loading="lazy"
                      srcSet={images.promotionalImage}
                      className="mt-1 max-w-full aspect-[1.59] w-[253px]"
                    />
                    <div className="self-stretch px-14 pt-2 pb-3.5 mt-6 text-xl bg-white rounded-lg border border-white border-solid max-md:pr-6 max-md:pl-5 max-md:max-w-full">
                      Save big! Get 20% off everything. Shop now and treat
                      yourself to the things you love at amazing prices. This
                      offer wont last long, so dont miss out!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col pb-2.5 mt-7 w-full bg-white rounded-2xl border border-black border-solid max-w-[1600px] max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col items-center px-16 pt-10 w-full min-h-[189px] max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  className="object-cover absolute inset-0 size-full"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  className="z-10 mb-0 max-w-full aspect-[1.03] w-[225px] max-md:mb-2.5"
                />
              </div>
              <div className="self-center mt-20 text-xl text-center text-black max-md:mt-10">
                Long Seller Name For Testing Purposes
              </div>
              <div className="flex gap-5 justify-between self-center mt-8 max-md:flex-wrap">
                <div className="shrink-0 rounded-full bg-zinc-300 h-[54px] w-[51px]" />
                <div className="shrink-0 rounded-full bg-zinc-300 h-[54px] w-[51px]" />
                <div className="shrink-0 rounded-full bg-zinc-300 h-[54px] w-[51px]" />
                <div className="shrink-0 rounded-full bg-zinc-300 h-[54px] w-[51px]" />
                <div className="shrink-0 rounded-full bg-zinc-300 h-[54px] w-[51px]" />
                <div className="shrink-0 rounded-full bg-zinc-300 h-[54px] w-[51px]" />
              </div>
              <div className="z-10 px-4 pb-12 mx-6 mt-7 text-sm text-center text-black bg-white rounded-xl border border-white border-solid max-md:mr-2.5 max-md:max-w-full">
                Unveiled in September 2023, the iPhone 15 boasts a familiar
                design with a powerful A16 Bionic chip at its core. Its
                beautiful Super Retina XDR OLED display, available in 6.1-inch
                and 6.7-inch versions, delivers stunning visuals. The camera
                system takes a leap forward with a 48MP main sensor for
                exceptional photo and video capture, accompanied by versatile
                ultra-wide and telephoto lenses. The iPhone 15 continues to
                excel with long battery life, secure Face ID, and the latest iOS
                17 software, making it a compelling choice for mobile
                enthusiasts.
              </div>
            </div>
          </div>
        </Modal>
      </>
    </>
  );
}
