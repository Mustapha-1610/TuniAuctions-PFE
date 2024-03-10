import * as React from "react";

export default function MyComponent() {
  return (
    <>
      <div className="flex mt-20 flex-col justify-center py-0.5 bg-white">
        <div className="flex flex-col justify-end items-center px-16 pt-4 pb-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col pt-px pr-1.5 pb-5 w-full bg-white rounded-lg shadow-sm max-w-[1552px] max-md:max-w-full">
            <div className="flex flex-col justify-center py-px bg-zinc-300 max-md:max-w-full">
              <div className="overflow-hidden z-10 px-8 pt-20 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/afc0cf2f5baf53d026c5ad8c09712bc7423f720e593202f243de60ea06ae7190?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/afc0cf2f5baf53d026c5ad8c09712bc7423f720e593202f243de60ea06ae7190?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afc0cf2f5baf53d026c5ad8c09712bc7423f720e593202f243de60ea06ae7190?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/afc0cf2f5baf53d026c5ad8c09712bc7423f720e593202f243de60ea06ae7190?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/afc0cf2f5baf53d026c5ad8c09712bc7423f720e593202f243de60ea06ae7190?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afc0cf2f5baf53d026c5ad8c09712bc7423f720e593202f243de60ea06ae7190?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/afc0cf2f5baf53d026c5ad8c09712bc7423f720e593202f243de60ea06ae7190?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/afc0cf2f5baf53d026c5ad8c09712bc7423f720e593202f243de60ea06ae7190?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                      className="shrink-0 mt-20 max-w-full aspect-square w-[137px] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                    <div className="justify-center px-8 py-3.5 mt-24 w-full text-xl leading-8 whitespace-nowrap rounded bg-blue-950 text-slate-50 max-md:pr-5 max-md:mt-10">
                      Scarlett Beauty
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-3 ml-44 max-w-full text-sm leading-5 text-slate-500 w-[375px] max-md:ml-2.5">
              <div className="flex gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/beccce9ddf1f84405586be21af1df07315e1934e827018c2f4b0c675cf4960c4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  className="shrink-0 aspect-[0.9] w-[18px]"
                />
                <div className="flex-auto">
                  845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark
                </div>
              </div>
              <div className="flex gap-2 self-start mt-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/19c26ce3c7c5a8c1b84d7d5b7797e28016be4858276f6c9714ae39c846bed267?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  className="shrink-0 aspect-[0.85] w-[18px]"
                />
                <div>(613) 343-9004</div>
              </div>
            </div>
            <div className="mt-3.5 text-sm leading-5 text-slate-500 max-md:max-w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              Content here,
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center bg-white">
        {/* Repeat this div for each item you want to display */}
        <div className="w-[370px] h-[488px] m-4 bg-white rounded-lg shadow border border-black flex flex-col">
          <img
            className="w-full h-[370px] rounded-t-lg border-b border-black"
            src="https://via.placeholder.com/370x370"
            alt="Placeholder"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-gray-700 text-sm font-bold font-['Roboto'] leading-[21px]">
                Name example
              </div>
              <div className="text-gray-700 text-[13px] font-normal font-['Roboto'] leading-[21px]">
                Starting Date : 13/05/2054
              </div>
            </div>
            <div className="text-rose-500 text-sm font-normal font-['Roboto']">
              Opening Bid : $200.00
            </div>
          </div>
        </div>
        <div className="w-[370px] h-[488px] m-4 bg-white rounded-lg shadow border border-black flex flex-col">
          <img
            className="w-full h-[370px] rounded-t-lg border-b border-black"
            src="https://via.placeholder.com/370x370"
            alt="Placeholder"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-gray-700 text-sm font-bold font-['Roboto'] leading-[21px]">
                Name example
              </div>
              <div className="text-gray-700 text-[13px] font-normal font-['Roboto'] leading-[21px]">
                Starting Date : 13/05/2054
              </div>
            </div>
            <div className="text-rose-500 text-sm font-normal font-['Roboto']">
              Opening Bid : $200.00
            </div>
          </div>
        </div>
        <div className="w-[370px] h-[488px] m-4 bg-white rounded-lg shadow border border-black flex flex-col">
          <img
            className="w-full h-[370px] rounded-t-lg border-b border-black"
            src="https://via.placeholder.com/370x370"
            alt="Placeholder"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-gray-700 text-sm font-bold font-['Roboto'] leading-[21px]">
                Name example
              </div>
              <div className="text-gray-700 text-[13px] font-normal font-['Roboto'] leading-[21px]">
                Starting Date : 13/05/2054
              </div>
            </div>
            <div className="text-rose-500 text-sm font-normal font-['Roboto']">
              Opening Bid : $200.00
            </div>
          </div>
        </div>
        <div className="w-[370px] h-[488px] m-4 bg-white rounded-lg shadow border border-black flex flex-col">
          <img
            className="w-full h-[370px] rounded-t-lg border-b border-black"
            src="https://via.placeholder.com/370x370"
            alt="Placeholder"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-gray-700 text-sm font-bold font-['Roboto'] leading-[21px]">
                Name example
              </div>
              <div className="text-gray-700 text-[13px] font-normal font-['Roboto'] leading-[21px]">
                Starting Date : 13/05/2054
              </div>
            </div>
            <div className="text-rose-500 text-sm font-normal font-['Roboto']">
              Opening Bid : $200.00
            </div>
          </div>
        </div>
        <div className="w-[370px] h-[488px] m-4 bg-white rounded-lg shadow border border-black flex flex-col">
          <img
            className="w-full h-[370px] rounded-t-lg border-b border-black"
            src="https://via.placeholder.com/370x370"
            alt="Placeholder"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-gray-700 text-sm font-bold font-['Roboto'] leading-[21px]">
                Name example
              </div>
              <div className="text-gray-700 text-[13px] font-normal font-['Roboto'] leading-[21px]">
                Starting Date : 13/05/2054
              </div>
            </div>
            <div className="text-rose-500 text-sm font-normal font-['Roboto']">
              Opening Bid : $200.00
            </div>
          </div>
        </div>
        <div className="w-[370px] h-[488px] m-4 bg-white rounded-lg shadow border border-black flex flex-col">
          <img
            className="w-full h-[370px] rounded-t-lg border-b border-black"
            src="https://via.placeholder.com/370x370"
            alt="Placeholder"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-gray-700 text-sm font-bold font-['Roboto'] leading-[21px]">
                Name example
              </div>
              <div className="text-gray-700 text-[13px] font-normal font-['Roboto'] leading-[21px]">
                Starting Date : 13/05/2054
              </div>
            </div>
            <div className="text-rose-500 text-sm font-normal font-['Roboto']">
              Opening Bid : $200.00
            </div>
          </div>
        </div>
        <div className="w-[370px] h-[488px] m-4 bg-white rounded-lg shadow border border-black flex flex-col">
          <img
            className="w-full h-[370px] rounded-t-lg border-b border-black"
            src="https://via.placeholder.com/370x370"
            alt="Placeholder"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-gray-700 text-sm font-bold font-['Roboto'] leading-[21px]">
                Name example
              </div>
              <div className="text-gray-700 text-[13px] font-normal font-['Roboto'] leading-[21px]">
                Starting Date : 13/05/2054
              </div>
            </div>
            <div className="text-rose-500 text-sm font-normal font-['Roboto']">
              Opening Bid : $200.00
            </div>
          </div>
        </div>
        <div className="w-[370px] h-[488px] m-4 bg-white rounded-lg shadow border border-black flex flex-col">
          <img
            className="w-full h-[370px] rounded-t-lg border-b border-black"
            src="https://via.placeholder.com/370x370"
            alt="Placeholder"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-gray-700 text-sm font-bold font-['Roboto'] leading-[21px]">
                Name example
              </div>
              <div className="text-gray-700 text-[13px] font-normal font-['Roboto'] leading-[21px]">
                Starting Date : 13/05/2054
              </div>
            </div>
            <div className="text-rose-500 text-sm font-normal font-['Roboto']">
              Opening Bid : $200.00
            </div>
          </div>
        </div>
        {/* ... more items */}
      </div>
    </>
  );
}
