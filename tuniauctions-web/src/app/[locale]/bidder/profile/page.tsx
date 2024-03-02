"use client";
import Image from "next/image";
import React, { useState } from "react";
import DetailsContainer from "./components/detailsContainer";

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
    <>
      <div className="p-16 bg-gray-900 cover min-h-screen">
        <div className="p-8 bg-white shadow mt-20 rounded-xl ">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {" "}
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"></div>
            <div className="relative">
              {" "}
              <div>
                <Image
                  className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
                  alt="test"
                  src="https://firebasestorage.googleapis.com/v0/b/dar-seranity.appspot.com/o/false1705812777141FzQFNXyWIAsKuau.jpg?alt=media&token=f3a95180-cecb-4dbe-abb5-057cf2cba88f"
                  height={300}
                  width={300}
                />
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <DetailsContainer />
        </div>
      </div>
    </>
  );
};

export default MyComponent;
