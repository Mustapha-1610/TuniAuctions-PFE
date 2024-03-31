interface Props {
  name: string;
  price: number;
}
export default function PricingBanner({ name, price }: Props) {
  return (
    <>
      <div className="flex flex-col w-[33%] max-lg:ml-0 max-lg:w-full">
        <div className="flex flex-col items-start px-4 py-10 mx-auto w-full text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid shadow-2xl max-md:mt-10">
          <div className="flex gap-5 justify-between items-start self-center max-w-full w-[269px]">
            <div className="flex flex-col self-end mt-5">
              <div className="text-2xl tracking-widest leading-8">{name}</div>
              <div className="mt-3.5 text-xs leading-5">10 lines min</div>
            </div>
            <div className="flex flex-col self-start">
              <div className="flex gap-2 justify-between">
                <div className="text-lg leading-7">$</div>
                <div className="text-3xl leading-7">
                  {price > 0 ? price : "Free"}
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 self-stretch mt-6 h-0.5 bg-black" />
          <div className="mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
            5 Auto-Attendants
          </div>
        </div>
      </div>
    </>
  );
}
