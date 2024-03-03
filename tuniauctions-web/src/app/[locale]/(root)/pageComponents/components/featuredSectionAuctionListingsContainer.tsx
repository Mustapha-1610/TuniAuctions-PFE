interface Props {
  OpeningBid: string;
}
export default function FeaturedSectionAuctionListingsContainer({
  OpeningBid,
}: Props) {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center md:flex-col md:gap-0 md:px-3">
        {/* updated width to fit 4 items per row */}
        <div className="flex flex-col w-1/4 w-full  p-4 bg-white rounded-md border border-solid border-zinc-100 md:w-full md:mb-5">
          {/* Item content */}
          <div className="flex justify-center">
            <img
              loading="lazy"
              srcSet="https://firebasestorage.googleapis.com/v0/b/dar-seranity.appspot.com/o/false1705809919539FzQFNXyWIAsKuau.jpg?alt=media&token=8e903ab6-861e-4a19-adb2-37c627442bf5"
              className="mt-5 max-w-full aspect-square w-[158px] object-center rounded-md"
              alt="Product Image"
            />
          </div>
          <div className="self-start mt-7 ml-4 text-base font-medium leading-7 text-center capitalize text-slate-950 md:ml-2.5">
            Canon Eos 4000D 18MP 2.7inch
            <br />
            Display
          </div>
          <div className="self-center mt-3 text-base font-bold leading-5 text-center capitalize whitespace-nowrap text-zinc-600">
            {OpeningBid} $85.00
          </div>
          <div className="flex gap-5 justify-center px-8 py-1 mt-4 text-center whitespace-nowrap md:px-5">
            {/* Countdown timer */}
            <div className="flex flex-col flex-1 px-1.5 py-1 rounded">
              <div className="text-xl font-medium leading-6 text-neutral-800">
                00
              </div>
              <div className="mt-2 text-xs leading-3 text-zinc-600">Days</div>
            </div>
            <div className="flex flex-col flex-1 px-1.5 py-1 rounded">
              <div className="text-xl font-medium leading-6 text-neutral-800">
                00
              </div>
              <div className="mt-2 text-xs leading-3 text-zinc-600">Hours</div>
            </div>
            <div className="flex flex-col flex-1 px-1.5 py-1 rounded">
              <div className="text-xl font-medium leading-6 text-neutral-800">
                00
              </div>
              <div className="mt-2 text-xs leading-3 text-zinc-600">Mins</div>
            </div>
            <div className="flex flex-col flex-1 px-1.5 py-1 rounded">
              <div className="text-xl font-medium leading-6 text-neutral-800">
                00
              </div>
              <div className="mt-2 text-xs leading-3 text-zinc-600">Secs</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
