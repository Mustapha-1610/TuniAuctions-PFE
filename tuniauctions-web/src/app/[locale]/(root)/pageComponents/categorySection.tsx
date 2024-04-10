"use client";
import { useRootFilterStore } from "@/helpers/store/general/rootAuctionsNavigationStore";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  locale: string;
  specificRoute?: string;
}
export default function CategorySection({ locale, specificRoute }: Props) {
  const { setSelectedCategory } = useRootFilterStore();
  const router = useRouter();
  const categories = [
    {
      name: "Electronics",
      value: "Electronics",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/DisplayImages%2FElectronics.webp?alt=media&token=c9914eb1-4520-4ed1-b3cd-78835aa0b3a9",
    },

    {
      name: "Clothing & Apparel",
      value: "Clothing & Apparel",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/DisplayImages%2F1000_F_223195393_rBrK1IeV3m7f4fUSiCbQmYVR0nrlx8Ce.jpg?alt=media&token=9d591775-7b14-40f1-afdf-4890cbaf080b",
    },
    {
      name: "Sports & Outdoors",
      value: "Sports & Outdoors",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/DisplayImages%2FSpors%26Outdoors.jpeg?alt=media&token=6e417ac9-e292-4000-8f09-4fba5c8ac14d",
    },
    {
      name: "Home & Garden",
      value: "Home & Garden",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/DisplayImages%2FHomeAndGarden.jpg?alt=media&token=f80a2220-8cc7-455f-8a97-c043c19d5ad4",
    },
    {
      name: "Health & Beauty",
      value: "Health & Beauty",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/DisplayImages%2FHealth%26Beayty.jpg?alt=media&token=5d8ffb85-1aa6-4f81-92d5-af075f145145",
    },
    {
      name: "Toys & Games",
      value: "Toys & Games",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/DisplayImages%2FToys%26Games.jpg?alt=media&token=0236fba9-5818-4c5a-980b-81cf921631d4",
    },
    {
      name: "Pet Supplies",
      value: "Pet Supplies",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/DisplayImages%2FPetSupplies.jpg?alt=media&token=cfe1b27d-c093-48c8-948a-14f7dcbaed0a",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center px-16 pb-2 mt-12 w-full text-center text-black max-w-[1320px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="text-4xl font-bold capitalize">Categories</div>
      </div>
      <div className="flex flex-wrap justify-center content-start px-3 pt-12 w-full max-w-[1720px] max-md:max-w-full">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center p-4">
            <Image
              src={category.imageUrl}
              alt={category.name}
              className="rounded-full w-48 h-48 object-cover cursor-pointer"
              height={120}
              width={300}
              onClick={() => {
                setSelectedCategory(category.value),
                  specificRoute
                    ? router.push(`/${locale}/${specificRoute}/auctions`)
                    : router.push(`/${locale}/auctions`);
              }}
            />
            <div
              className="mt-4 text-lg font-semibold cursor-pointer"
              onClick={() => {
                setSelectedCategory(category.value),
                  specificRoute
                    ? router.push(`/${locale}/${specificRoute}/auctions`)
                    : router.push(`/${locale}/auctions`);
              }}
            >
              {category.name}
            </div>
          </div>
        ))}
        {/* Button to check all categories */}
        <div
          className="w-full flex justify-center mt-8"
          onClick={() => {
            setSelectedCategory(""),
              specificRoute
                ? router.push(`/${locale}/${specificRoute}/auctions`)
                : router.push(`/${locale}/auctions`);
          }}
        >
          <button className="relative justify-center px-10 py-3.5 mt-2 text-base font-bold tracking-wide leading-6 text-center capitalize whitespace-nowrap bg-black text-white rounded-md text-slate-950 max-md:px-5 max-md:mt-10">
            Browse All
          </button>
        </div>
      </div>
    </>
  );
}
