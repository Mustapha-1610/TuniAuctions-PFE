export default function UpcomingSectionAuctionListingsItems() {
  return (
    <>
      <div className="px-7 mt-6 py-6 bg-white rounded-md max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/18c58d0e073f3606d59be250b1b6aa2bf0cf001f711b86ac34037c4e5e0ab9ec?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/18c58d0e073f3606d59be250b1b6aa2bf0cf001f711b86ac34037c4e5e0ab9ec?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18c58d0e073f3606d59be250b1b6aa2bf0cf001f711b86ac34037c4e5e0ab9ec?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/18c58d0e073f3606d59be250b1b6aa2bf0cf001f711b86ac34037c4e5e0ab9ec?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/18c58d0e073f3606d59be250b1b6aa2bf0cf001f711b86ac34037c4e5e0ab9ec?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18c58d0e073f3606d59be250b1b6aa2bf0cf001f711b86ac34037c4e5e0ab9ec?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/18c58d0e073f3606d59be250b1b6aa2bf0cf001f711b86ac34037c4e5e0ab9ec?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/18c58d0e073f3606d59be250b1b6aa2bf0cf001f711b86ac34037c4e5e0ab9ec?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
              className="self-stretch my-auto max-w-full aspect-[0.88] w-[184px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-1 pr-14 pl-6 max-md:px-5 max-md:mt-8">
              <div className="text-lg font-medium leading-7 capitalize text-slate-950">
                Xiaomi Amazfit A1919D Touch Screen
                <br />
                Display Smart Watch
              </div>
              <div className="mt-2.5 text-base font-semibold tracking-wider leading-6 text-zinc-600">
                Auction ID:{" "}
                <span className="text-zinc-600">20202025463695</span>
              </div>
              <div className="flex gap-0 justify-between px-5 py-3 mt-3.5 rounded-md border border-solid border-zinc-100">
                <div className="flex gap-px justify-between whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1a4ff8e695810caa60748363874b9c3b2389ee68a765a7433749865f5e11ca6?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                    className="my-auto aspect-[0.96] w-[25px]"
                  />
                  <div className="flex flex-col flex-1 py-px pl-3">
                    <div className="text-sm font-semibold tracking-wider leading-5 text-zinc-600">
                      Current Bid
                    </div>
                    <div className="text-base font-black tracking-wider leading-5 text-slate-950">
                      $1000.99
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 py-px text-right">
                  <div className="text-base font-black tracking-wider leading-5 text-slate-950">
                    00 : 00 : 00
                  </div>
                  <div className="text-sm font-semibold tracking-wider leading-5 whitespace-nowrap text-zinc-600">
                    Waiting For Bid
                  </div>
                </div>
              </div>
              <div className="mt-7 text-base font-medium tracking-wider leading-6 text-center">
                <button className="px-6 py-3 bg-slate-800 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
                  View Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
