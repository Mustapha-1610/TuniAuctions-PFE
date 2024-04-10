"use client";
import { useRootFilterStore } from "@/helpers/store/general/rootAuctionsNavigationStore";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  Title: string;
  BrowseButtonText: string;
  specificRoute?: string;
}
export default function HeroSection({
  Title,
  BrowseButtonText,
  specificRoute,
}: Props) {
  const router = useRouter();
  const locale = useLocale();
  const { setSelectedCategory } = useRootFilterStore();
  return (
    <>
      <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-full min-h-[800px] max-md:max-w-full">
        <Image
          loading="lazy"
          src="https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/DisplayImages%2Fapple-event-5_1712637095378.jpeg?alt=media&token=c003f2ee-09b7-410e-8a54-acd223bdc46c"
          className="object-cover absolute inset-0 size-full"
          alt="Hero Image"
          height={150}
          width={1400}
          quality={100}
        />
        <div className="flex relative flex-col w-full max-w-[1202px] max-md:max-w-full items-center justify-center">
          <div
            className="mt-52 font-bold text-white text-8xl tracking-tighter leading-[95px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px] text-center"
            style={{
              backgroundImage: "linear-gradient(45deg, #979797, #FFFFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {Title}
          </div>

          <div
            onClick={() => (
              specificRoute
                ? router.push("/" + locale + specificRoute + "/auctions")
                : router.push("/" + locale + "/auctions"),
              setSelectedCategory("")
            )}
            className="flex cursor-pointer gap-2 items-center justify-center  rounded-xl  px-14 py-6 mt-12 text-base font-medium tracking-wide leading-4 text-white bg-slate-600  max-md:mt-10"
          >
            <div className="text-gl">{BrowseButtonText}</div>
          </div>
        </div>
      </div>
    </>
  );
}
