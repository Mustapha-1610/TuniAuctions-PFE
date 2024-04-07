import { AuctionListingType } from "@/models/types/auctionListing";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

interface Props {
  auctionItem: AuctionListingType;
}

export default function AuctionListingItems({ auctionItem }: Props) {
  const locale = useLocale();

  return (
    <>
      {auctionItem && (
        <Link
          href={"/" + locale + "/bidder/auctionDetails/" + auctionItem._id}
          className="flex flex-col w-[calc(33%-1.25rem)] max-md:ml-0 max-md:w-full mb-4"
        >
          <Image
            loading="lazy"
            src={auctionItem.productPictures[0]}
            alt="Product Image"
            className="w-full aspect-[1.45] object-contain border border-gray-300 rounded rounded-gl"
            width={300}
            height={100}
          />
          <div className="flex flex-col px-4 py-4 bg-violet-50">
            <div className="text-sm leading-4">{auctionItem.category}</div>
            <div className="text-2xl font-bold tracking-tighter leading-7 text-slate-900">
              {auctionItem.title}
            </div>
            <div className="flex items-center mt-3 text-xs leading-3 whitespace-nowrap">
              <span className="mr-1">Opening bid:</span>
              <span className="text-xl font-bold leading-8">
                {auctionItem.openingBid > 0 ? (
                  <>{auctionItem.openingBid}$</>
                ) : (
                  <>Free!</>
                )}
              </span>
            </div>
            <div className="mt-3 p-2 bg-purple-200 text-purple-800 rounded-lg shadow-md">
              <div className="text-xs leading-3 font-medium">Starts on:</div>
              <div className="text-gl font-bold">
                {moment(auctionItem.startingDate).format(
                  "ddd, MMM D, YYYY [at] h:mm A"
                )}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
