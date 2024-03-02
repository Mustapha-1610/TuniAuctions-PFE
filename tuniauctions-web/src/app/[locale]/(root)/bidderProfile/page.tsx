"use client";
import React, { useState } from "react";

interface ProfileDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
}

const MyComponent: React.FC = () => {
  const [profileDetails, setidk] = useState<ProfileDetails>({
    firstName: "Nick",
    lastName: "DuBuque",
    email: "Jayden.Gislason78@gmail.com",
    phone: "(445) 653-3771 x985",
    birthDate: "25 Apr, 1996",
  });

  return (
    <div className="container mt-28 mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/4 px-4">
          <div className="bg-white rounded-lg shadow p-5 mb-8">
            <div className="flex items-center mb-4">
              <div className="mr-4 w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6f3e363d2ea222328749308d6f547fc88ea2dd0c5c679f1c32b43942e363e9e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  alt="Profile avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold">
                {profileDetails.firstName} {profileDetails.lastName}
              </h2>
            </div>
            <ul>
              <li className="flex items-center mb-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3bd4b42860c7944fdac394fd46d6889caee25f09d23d28146031a7bbb94241f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  alt="Orders icon"
                  className="w-5 h-5 mr-2"
                />
                <span>Orders</span>
              </li>
              <li className="flex items-center mb-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eb30e6fad0b4ac756f9e773172d652f82f857015385a52bb44455d4edbe39fe?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  alt="Wishlist icon"
                  className="w-5 h-5 mr-2"
                />
                <span>Wishlist</span>
              </li>
              <li className="flex items-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/26e4cd6869bdbd591ad2c2b1827d5b6a4e3044e81dd6b73d5d21350dc73fbd95?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  alt="Support Tickets icon"
                  className="w-5 h-5 mr-2"
                />
                <span>Support Tickets</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <h3 className="text-xl font-semibold mb-4">ACCOUNT SETTINGS</h3>
            <ul>
              <li className="flex items-center mb-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2adc686d31320cf782825af0d2f09b3012388bcc18847e57d5fffe5dde1f1398?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  alt="Profile Info icon"
                  className="w-5 h-5 mr-2"
                />
                <span>Profile Info</span>
              </li>
              <li className="flex items-center mb-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f48b26f7d27c538d974b1dcc6c760ef8b2396c49c3700b680c78f350ac96c9c?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  alt="Addresses icon"
                  className="w-5 h-5 mr-2"
                />
                <span>Addresses</span>
              </li>
              <li className="flex items-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a53141ed72025b448893b8bbc963994f2da7885386bc50bad3c62e4a3201acd8?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  alt="Payment Methods icon"
                  className="w-5 h-5 mr-2"
                />
                <span>Payment Methods</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-3/4 px-4">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-rose-500 text-white p-3 rounded-lg">
                <span className="block text-xl font-semibold">16</span>
                <span className="block text-sm">All Orders</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-rose-500 text-white p-3 rounded-lg">
                <span className="block text-xl font-semibold">02</span>
                <span className="block text-sm">Awaiting Payments</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-rose-500 text-white p-3 rounded-lg">
                <span className="block text-xl font-semibold">00</span>
                <span className="block text-sm">Awaiting Shipment</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2">
              <div className="bg-rose-500 text-white p-3 rounded-lg">
                <span className="block text-xl font-semibold">01</span>
                <span className="block text-sm">Awaiting Delivery</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-5 mt-8">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                <label className="block font-semibold mb-1">First Name</label>
                <p>{profileDetails.firstName}</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                <label className="block font-semibold mb-1">Last Name</label>
                <p>{profileDetails.lastName}</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                <label className="block font-semibold mb-1">Email</label>
                <p>{profileDetails.email}</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                <label className="block font-semibold mb-1">Phone</label>
                <p>{profileDetails.phone}</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <label className="block font-semibold mb-1">Birth Date</label>
                <p>{profileDetails.birthDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
