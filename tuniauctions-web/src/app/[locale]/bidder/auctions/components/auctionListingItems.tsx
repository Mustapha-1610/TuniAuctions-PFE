import { useLocale } from "next-intl";
import Link from "next/link";

export default function AuctionListingItems() {
  const locale = useLocale();
  return (
    <>
      <div className="mt-8 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 max-md:flex-col max-md:gap-0 max-md:">
          {/* item 1 */}

          <Link
            href={"/" + locale + "/bidder/listingDetails"}
            className="flex flex-col w-[calc(33%-1.25rem)] max-md:ml-0 max-md:w-full"
          >
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
              className="w-full aspect-[1.45]"
            />
            <div className="flex flex-col px-4 py-4 bg-violet-50">
              <div className="text-sm leading-4">Electronics</div>
              <div className="text-2xl font-bold tracking-tighter leading-7 text-slate-900">
                Logitech keyboard
              </div>
              <div className="self-end mt-3 text-xs leading-3 whitespace-nowrap">
                Starting bid:
              </div>
              <div className="self-end text-xl font-bold leading-8">$10.00</div>
            </div>
          </Link>
          {/* item 2 */}
          <div className="flex flex-col w-[calc(33%-1.25rem)] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
              className="w-full aspect-[1.45]"
            />
            <div className="flex flex-col px-4 py-4 bg-violet-50">
              <div className="text-sm leading-4">Electronics</div>
              <div className="text-2xl font-bold tracking-tighter leading-7 text-slate-900">
                Logitech keyboard
              </div>
              <div className="self-end mt-3 text-xs leading-3 whitespace-nowrap">
                Starting bid:
              </div>
              <div className="self-end text-xl font-bold leading-8">$10.00</div>
            </div>
          </div>
          {/* item 3 */}
          <div className="flex flex-col w-[calc(33%-1.25rem)] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
              className="w-full aspect-[1.45]"
            />
            <div className="flex flex-col px-4 py-4 bg-violet-50">
              <div className="text-sm leading-4">Electronics</div>
              <div className="text-2xl font-bold tracking-tighter leading-7 text-slate-900">
                Logitech keyboard
              </div>
              <div className="self-end mt-3 text-xs leading-3 whitespace-nowrap">
                Starting bid:
              </div>
              <div className="self-end text-xl font-bold leading-8">$10.00</div>
            </div>
          </div>
          {/* item 4 */}
          <div className="flex flex-col w-[calc(33%-1.25rem)] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5fbac2d5969d8bba78c4c98222133be1f961ee605adfb4a9f3f1499814e99ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
              className="w-full aspect-[1.45]"
            />
            <div className="flex flex-col px-4 py-4 bg-violet-50">
              <div className="text-sm leading-4">Electronics</div>
              <div className="text-2xl font-bold tracking-tighter leading-7 text-slate-900">
                Logitech keyboard
              </div>
              <div className="self-end mt-3 text-xs leading-3 whitespace-nowrap">
                Starting bid:
              </div>
              <div className="self-end text-xl font-bold leading-8">$10.00</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
