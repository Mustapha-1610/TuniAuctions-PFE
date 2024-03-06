import React from "react";

const MyComponent: React.FC = () => {
  interface IProductProps {
    id: string;
    placedOn: string;
    status: string;
    items: {
      name: string;
      price: number;
      properties: string;
      imageUrl: string;
    }[];
  }
  return (
    <div className="flex ml-2 overflow-hidden bg-white pt-16">
      <div
        id="main-content"
        className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
      >
        <div className="flex flex-col px-9 py-11 bg-white max-md:px-5">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col  w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-14 pt-6 pb-12 w-full text-lg font-semibold leading-7 text-black bg-gray-200 rounded-3xl border border-black border-dashed max-md:px-5 max-md:mt-9 max-md:max-w-full">
                  {/* Rounded Picture */}
                  <div className="flex justify-center items-center mb-6">
                    <div className="w-64 h-64 rounded-full bg-gray-300" />
                  </div>

                  {/* User Name */}
                  <div className="text-left text-xl mb-4 whitespace-pre-wrap">
                    John Doe
                  </div>

                  {/* User Address */}
                  <div className="text-left text-gray-500 mb-4 whitespace-pre-wrap">
                    123 Main St, New York
                  </div>

                  {/* Estimated Arrival Date */}
                  <div className="text-left text-gray-500 whitespace-pre-wrap">
                    Estimated Arrival: 10 March 2024
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaa
                  </div>
                </div>
              </div>

              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-4 py-11 w-full text-2xl font-semibold text-black bg-gray-200 rounded-3xl border border-black border-dashed max-md:mt-9 max-md:max-w-full">
                  {/* Dropdown Menu */}
                  <div className="relative inline-flex w-full mt-12 max-md:mt-10">
                    <svg
                      className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 412 232"
                    >
                      <path
                        d="M206 232c26 0 45-19 45-45 0-7-3-14-7-19L74 44a45 45 0 0 1 61-67C197 6 289 114 350 182a45 45 0 0 1 7 19c0 26 19 45 45 45s45-19 45-45c0-46-39-84-85-84-14 0-28 3-39 9a82 82 0 0 1-99 0 123 123 0 0 0-39-9c-46 0-85 38-85 84 0 26 19 45 45 45z"
                        fill="#648299"
                        fill-rule="nonzero"
                      />
                    </svg>
                    <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none w-full">
                      <option>Status</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>

                  {/* Current Status */}
                  <div className="mt-24 ml-3.5 leading-7 text-left whitespace-pre-wrap max-md:mt-10 max-md:ml-2.5">
                    Current Status : <br />
                    <br />
                    <br />
                    Last Updated :{" "}
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-center items-center self-center px-16 py-5 mt-12 max-w-full whitespace-nowrap rounded-2xl bg-slate-900 leading-[112.5%] w-[285px] max-md:px-5">
                    <span className="text-center w-full text-white">Save</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-14 pt-7 pb-12 mt-12 text-lg font-semibold leading-7 text-black bg-white rounded-3xl border border-black border-dashed max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="self-center max-w-full bg-zinc-300 h-[175px] w-[496px]" />{" "}
            {/* image*/}
            <div className="flex flex-col self-start mt-24 mb-3.5 text-left whitespace-pre-wrap max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">Title : Iphone 15 Pro</div>
              <div className="mt-10 max-md:max-w-full">
                Description : AAAAAAAAA
              </div>
              <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                Won For : 15£
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
