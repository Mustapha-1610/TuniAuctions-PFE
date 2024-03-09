import * as React from "react";
import { BsThreeDots } from "react-icons/bs";
import { RiAuctionLine } from "react-icons/ri";
import { MdPendingActions } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";

export default function MyComponent() {
  return (
    <div className="flex pt-20 flex-col justify-center">
      <div className="flex justify-center items-center px-16 w-full  max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-end  pl-3.5 w-full border border-white border-solid max-w-[1320px] max-md:max-w-full">
          <div className="flex z-10 gap-10 justify-between items-start self-start pr-20 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="flex flex-col mt-12 text-sm font-medium leading-5 whitespace-nowrap basis-0 text-neutral-900 max-md:mt-10">
              <div className="justify-center items-start py-2 pr-16 pl-3 mt-2 bg-white max-md:pr-5">
                Personal Information
              </div>
              <div className="justify-center items-start py-2 pr-16 pl-3 rounded-xl bg-slate-200 max-md:pr-5">
                Notifications
              </div>
            </div>
            <img
              loading="lazy"
              srcSet="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="shrink-0 mt-11 max-w-full aspect-[0.96] w-[169px] max-md:mt-10 rounded-full"
            />
            <div className="flex flex-col flex-1 mt-20 font-bold text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl leading-5 max-md:max-w-full">
                Mustapha Talbi
              </div>
              <div className="flex gap-5 justify-between mt-3 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto text-base leading-5">
                  Mustapha.talbi55@gmail.com
                </div>
                <div className="justify-center px-12 py-4 text-sm tracking-wide leading-5 rounded-3xl bg-slate-200 max-md:px-5">
                  Edit
                </div>
              </div>
            </div>
          </div>

          <div className=" mr-12 pt-12 max-w-full w-[960px] max-md:mr-2.5">
            <div className="flex flex-row flex-1 mt-6 mb-8  max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl max-md:max-w-full font-bold text-black">
                Notifications
              </div>
            </div>
            <div className="flex flex-col justify-center py-6 pr-16 pl-4 mt-10  leading-[120%] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-4 pr-20 max-md:flex-wrap max-md:pr-5 max-md:mr-2.5">
                <img
                  className="shrink-0 h-16 rounded-lg bg-slate-200 w-[66px]"
                  src="https://firebasestorage.googleapis.com/v0/b/tunibids.appspot.com/o/false1694805437902natural-iphone-15-pro-sku-header-120923.png?alt=media&token=1ac45808-bc8e-44f5-9a13-22d2b13e2583"
                />
                <div className="flex flex-col justify-center my-auto">
                  <div className="text-base font-medium text-neutral-900">
                    Recieved A Big Juicy Kiss From A Really Cute Princess Called
                    Melisa
                  </div>
                  <div className="text-sm text-slate-600">
                    Recieved From Adorable Lovely Really Pretty And Funny
                    Melisa, 16 Aug, 2002{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
