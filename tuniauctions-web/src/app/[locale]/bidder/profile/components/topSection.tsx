export default function TopSection() {
  return (
    <>
      <div className="flex z-10 gap-10 justify-between items-start self-start pr-20 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col mt-12 text-sm font-medium leading-5 whitespace-nowrap basis-0 text-neutral-900 max-md:mt-10">
          <div className="justify-center items-start py-2 pr-16 pl-3 rounded-xl bg-slate-200 max-md:pr-5">
            Personal Information
          </div>
          <div className="justify-center items-start py-2 pr-16 pl-3 mt-2 bg-white max-md:pr-5">
            Notifications
          </div>
          <div className="justify-center items-start py-2 pr-16 pl-3 mt-2 bg-white max-md:pr-5">
            Transactions
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://as2.ftcdn.net/v2/jpg/04/84/39/57/1000_F_484395747_AVqmqsGnH42LCviLB6G4RaYkgsiDPZHD.jpg"
          className="shrink-0 mt-11 object-cover max-w-full aspect-[1] w-[200px] max-md:mt-10 rounded-full"
        />

        <div className="flex flex-col flex-1 mt-20 font-bold text-black max-md:mt-10 max-md:max-w-full">
          <div className="text-2xl leading-5 max-md:max-w-full">
            Mustapha Talbi
          </div>
          <div className="flex gap-5 justify-between mt-3 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto my-auto text-base leading-5">
              Mustapha.talbi55@gmail.com
            </div>
            <div className="justify-center  px-6 py-4 text-sm tracking-wide leading-5 rounded-3xl bg-slate-200 max-md:px-5">
              Edit
            </div>
          </div>
          <div className="flex-auto my-auto text-base leading-5">
            Balance : 300$
          </div>
        </div>
      </div>
    </>
  );
}
