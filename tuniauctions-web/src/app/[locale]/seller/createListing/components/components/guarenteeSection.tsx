interface Props {
  setAuctionListingForm: (value: any) => void;
}
export default function GuarenteeSection({ setAuctionListingForm }: Props) {
  return (
    <>
      <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
        <label
          htmlFor="guarantee"
          className="block text-sm font-medium text-gray-700"
        >
          Guarantee
        </label>
        <div className="flex mt-1">
          <input
            type="number"
            placeholder="Guanretee Length"
            min="0"
            onBlur={(e) => {
              setAuctionListingForm((previous: any) => ({
                ...previous,
                guarentee: {
                  ...previous.guarentee,
                  length: parseInt(e.target.value),
                },
              }));
            }}
            className="p-2 w-22 border border-gray-300 rounded-md mr-1"
          />
          <select
            className="p-2 border border-gray-300 rounded-md"
            onBlur={(e) => {
              setAuctionListingForm((previous: any) => ({
                ...previous,
                guarentee: {
                  ...previous.guarentee,
                  period: e.target.value,
                },
              }));
            }}
          >
            <option value="Years">Years</option>
            <option value="Months">Months</option>
          </select>
        </div>
      </div>
    </>
  );
}
