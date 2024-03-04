interface Props {
  isEditing: Boolean;
  setIsEditing: (open: boolean) => void;
}
export default function IsEditingProfile({ isEditing, setIsEditing }: Props) {
  return (
    <>
      <div className="flex mt-12 flex-col px-6 py-7 bg-white max-md:px-5">
        <div className="self-center text-xl leading-8 whitespace-nowrap text-slate-800">
          Update Profile
        </div>
        <div className="flex flex-col px-8 py-3 bg-white rounded-lg border-solid shadow-sm max-md:px-5 max-md:max-w-full">
          <div className="mt-6">
            <div className="mb-4 flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <label
                  htmlFor="stock1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  style={{ overflowWrap: "break-word" }}
                  id="stock1"
                  name="stock1"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="stock2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="stock2"
                  name="stock2"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <label
                  htmlFor="stock1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  style={{ overflowWrap: "break-word" }}
                  id="stock1"
                  name="stock1"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="stock2"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="stock2"
                  name="stock2"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <label
                  htmlFor="stock1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Municipality
                </label>
                <input
                  type="text"
                  style={{ overflowWrap: "break-word" }}
                  id="stock1"
                  name="stock1"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="stock2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full location
                </label>
                <input
                  type="text"
                  id="stock2"
                  name="stock2"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            </div>
          </div>

          <textarea
            rows={7}
            className="items-start pt-5 pr-16 pb-6 pl-4 mt-2 text-sm leading-5 text-gray-700 whitespace-normal rounded-lg border border-black border-solid max-md:pr-5 max-md:pb-10 max-md:max-w-full"
          />

          <div className="flex justify-center items-center gap-5 mt-6">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="py-3 px-6 text-sm leading-6 text-white capitalize bg-red-700 rounded-lg"
            >
              Cancel
            </button>
            <button className="py-3 px-6 text-sm leading-6 text-white capitalize bg-green-700 rounded-lg">
              Save Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
