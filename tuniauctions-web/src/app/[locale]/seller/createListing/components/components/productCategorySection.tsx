interface Props {
  setAuctionListingForm: (value: any) => void;
}
export default function ProductCategorySection({
  setAuctionListingForm,
}: Props) {
  return (
    <>
      <div className="w-full sm:w-1/2 sm:mr-2">
        <label
          htmlFor="category1"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Select Product Category
        </label>
        <select
          id="category1"
          name="productCategory"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          onChange={(e) => {
            setAuctionListingForm((prev: any) => ({
              ...prev,
              productCategory: e.target.value,
            }));
          }}
        >
          <option value="Electronics">Electronics</option>
          <option value="Clothing & Apparel">Clothing & Apparel</option>
          <option value="Sports & Outdoors">Sports & Outdoors</option>
          <option value="Home & Garden">Home & Garden</option>
          <option value="Health & Beauty">Health & Beauty</option>
          <option value="Toys & Games">Toys & Games</option>
          <option value="Pet Supplies">Pet Supplies</option>
        </select>
      </div>
    </>
  );
}
