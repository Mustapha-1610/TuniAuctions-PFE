"use client";
import React, { useState } from "react";

interface IBid {
  name: string;
  timeAgo: string;
  amount: string;
}

const MyComponent: React.FC = () => {
  const [bids, setBids] = useState<IBid[]>([
    { name: "Robart FOX", timeAgo: "23 minutes ago", amount: "24.5$" },
    { name: "Leslie Alexander", timeAgo: "23 minutes ago", amount: "24.5$" },
    { name: "Jane Cooper", timeAgo: "23 minutes ago", amount: "24.5$" },
  ]);

  return (
    <div className="flex mt-12 mb-8  flex-col items-center bg-white px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="pt-12 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="bg-slate-900 text-white p-6 rounded-md">
              <p className="font-semibold">Current Bid</p>
              <p className="text-xl font-bold mt-1.5">$20,0379.00</p>
              <p className="mt-4">00D : 00H : 00M : 00S</p>
            </div>
            <div className="mt-6 relative">
              <img
                alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/15ca61b1481e8a15033992a2caeb914ce1705d9521673d3f143c8870f7028d92?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {/* Repeat for each small image under the big one */}
              <img
                alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a4ae5ca45f36bbf998f9cb4b476d3b3317842172483f8633d8eab532abbc26f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                className="w-full h-auto"
              />
              <img
                alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb8e310620acbb6e7cd46594befec711471b57815bb10264269b35c65038e278?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                className="w-full h-auto"
              />
              <img
                alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f0ca7936f2ab559b2c1c025474af0e7861bad788329fc5a61fa1a6556708439?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                className="w-full h-auto"
              />
            </div>
            <p className="text-zinc-600 mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.
            </p>
            {/* START Share Now Section */}
            <div className="w-full bg-white p-8 mt-8 rounded-md shadow-xl">
              <p className="font-bold text-center text-lg">Share Now</p>
              <div className="flex mt-4 justify-center">
                {/* Repeat for each social media button */}
                <button className="mx-2 bg-blue-500 text-white p-2 rounded">
                  Facebook
                </button>
                <button className="mx-2 bg-blue-400 text-white p-2 rounded">
                  Twitter
                </button>
                <button className="mx-2 bg-red-600 text-white p-2 rounded">
                  Pinterest
                </button>
              </div>
            </div>
            {/* END Share Now Section */}
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">
              Lamborghini Huracán Red Mercedes AMG
            </p>
            <p className="text-neutral-800 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in pulvinar neque.
            </p>

            <iframe
              className="mt-2 mb-2"
              width="100%"
              height="25%"
              src="https://www.youtube.com/embed/xy3AcmW0lrQ"
              style={{
                borderRadius: "15px",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
              }}
            ></iframe>
            <div className="bg-white p-8 rounded-md shadow-xl">
              <p className="text-slate-900 font-extrabold uppercase">Bid Now</p>
              <form className="mt-4">
                <label
                  htmlFor="bidAmount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your bid
                </label>
                <input
                  type="text"
                  id="bidAmount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Minimum Bid 20.00$"
                  required
                />
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-slate-900 text-white font-bold uppercase rounded-lg"
                >
                  Place Bid
                </button>
              </form>
            </div>
            <div className="mt-6 bg-white p-8 rounded-md shadow-xl">
              <p className="text-slate-900 font-extrabold uppercase">
                Bidding History
              </p>
              <ul className="mt-4">
                {bids.map((bid, index) => (
                  <li key={index} className="flex items-center gap-4 mt-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-bold text-slate-900">{bid.name}</p>
                      <p className="text-zinc-600">
                        {bid.timeAgo} for {bid.amount}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
