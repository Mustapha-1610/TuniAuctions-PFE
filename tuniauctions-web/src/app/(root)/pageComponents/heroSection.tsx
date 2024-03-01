import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <>
      <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-full min-h-[800px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <div className="flex relative flex-col w-full max-w-[1202px] max-md:max-w-full items-center justify-center">
          <div
            className="mt-52 font-bold text-white text-8xl tracking-tighter leading-[95px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px] text-center"
            style={{
              backgroundImage: "linear-gradient(45deg, #F3E0C7, #FFFFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Bid with Joy, Win with Equity
          </div>

          <div
            onClick={() => router.push("/auctions")}
            className="flex cursor-pointer gap-2 items-center justify-center  rounded-xl  px-14 py-6 mt-12 text-base font-medium tracking-wide leading-4 text-slate-200 bg-slate-900  max-md:mt-10"
          >
            <div>Browse</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/639fc77328cf500e9ea233d9c3682ae9f503b1720be594ad214343a3b01b007c?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
              className="self-start aspect-square w-[19px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
