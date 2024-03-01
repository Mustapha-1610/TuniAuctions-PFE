"use client";
import { useState } from "react";
import ProfileInformations from "./profileInfo";
interface ProfileDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
}
export default function DetailsContainer() {
  const [profileDetails, setidk] = useState<ProfileDetails>({
    firstName: "Nick",
    lastName: "DuBuque",
    email: "Jayden.Gislason78@gmail.com",
    phone: "(445) 653-3771 x985",
    birthDate: "25 Apr, 1996",
  });
  return (
    <>
      <div className="container mt-28 mx-auto px-9 py-14">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full lg:w-1/4 px-6">
            <div className="bg-white rounded-lg shadow p-5 mb-2">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold">
                  {profileDetails.firstName} {profileDetails.lastName}
                </h2>
              </div>{" "}
              <ul>
                <li className="flex items-center mb-1">
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
            <ProfileInformations {...profileDetails} />
          </div>
        </div>
      </div>
    </>
  );
}
