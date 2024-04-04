interface Props {
  setPictureFiles: (value: any) => void;
  setAuctionListingForm: (value: any) => void;
}
export default function BuyItNowSection({
  setAuctionListingForm,
  setPictureFiles,
}: Props) {
  return (
    <>
      <div className="mb-6 flex justify-center items-center h-full">
        <div className="w-full sm:w-1/2 mb-2 sm:mb-0 item-center justify-center">
          <div className="flex flex-col items-center justify-center h-60 border border-2 border-gray-300 rounded-md">
            <p>Buy it now section</p>
            <label>
              <div className="mt-2 mb-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                Upload Promotional Image
              </div>
              <input
                className="hidden"
                type="file"
                onChange={(e) => {
                  setPictureFiles((prevState: any) => ({
                    ...prevState,
                    promotionalPicture: e.target.files?.[0],
                  }));
                }}
              />
            </label>

            <textarea
              className="text-xs text-gray-500 mt-1 border border-black rounded-lg"
              rows={6}
              cols={80}
              placeholder="Promotional Description"
              onChange={(e) => {
                setAuctionListingForm((prev: any) => ({
                  ...prev,
                  buyItNowSection: {
                    ...prev.buyItNowSection,
                    promotionalDescription: e.target.value,
                  },
                }));
              }}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
