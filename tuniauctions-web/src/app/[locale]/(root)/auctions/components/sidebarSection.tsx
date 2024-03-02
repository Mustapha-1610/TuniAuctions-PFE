export default function SidebarSection() {
  return (
    <>
      <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch max-md:mt-4">
          <div className="flex flex-col justify-center px-4 w-full text-base bg-violet-50 rounded-md text-neutral-500 max-md:pr-5">
            <div className="flex gap-5 justify-between px-4 py-4 rounded-md">
              <div className="flex-auto">Search products…</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/150f0651ab2da8ce1366829f7682303bbcecd0b467d4c0a9cc230c8b1f5a3e79?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                className="aspect-square w-[25px]"
              />
            </div>
          </div>
          <div className="flex flex-col p-8 mt-9 bg-violet-50 rounded-md max-md:px-5">
            <div className="text-2xl font-bold tracking-tighter leading-8 text-slate-900">
              Product categories
            </div>
            <div className="flex flex-col items-start py-0.5 pr-20 pl-2.5 mt-5 text-base leading-7 whitespace-nowrap text-zinc-800 max-md:pr-5">
              <div>Antiques</div>
              <div className="mt-1.5">Cameras (15)</div>
              <div className="mt-1.5">Electronics</div>
              <div className="mt-1.5">Gaming</div>
              <div className="mt-1.5">Headphones</div>
              <div className="mt-1.5">Laptops</div>
              <div className="mt-1.5">Mobiles</div>
              <div className="mt-1.5">Sneakers</div>
              <div className="mt-1.5">Stamps</div>
              <div className="mt-1.5">Televisions</div>
              <div className="mt-1.5">Vehicles</div>
              <div className="mt-1.5">Watch</div>
              <div className="mt-1.5">Watches</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
