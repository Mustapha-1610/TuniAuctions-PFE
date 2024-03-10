export default function Notifications() {
  return (
    <>
      <div className=" mr-12 pt-12 max-w-full w-[960px] max-md:mr-2.5">
        <div className="flex flex-row flex-1 mt-6 mb-2  max-md:mt-10 max-md:max-w-full">
          <div className="text-2xl max-md:max-w-full font-bold text-black">
            Notifications
          </div>
        </div>
        <div className="flex flex-col justify-center py-6 pr-16 pl-4 mt-2  leading-[120%] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
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
                Recieved From Adorable Lovely Really Pretty And Funny Melisa, 16
                Aug, 2002{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
