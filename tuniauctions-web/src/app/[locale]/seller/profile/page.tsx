import * as React from "react";
import SellerProfile from "./components/profileView";

export default function MyComponent() {
  return (
    <div className="flex ml-2 mt-2 overflow-hidden bg-white">
      <div
        id="main-content"
        className="h-full w-10/12  relative overflow-y-auto lg:ml-64"
      >
        <SellerProfile />
      </div>
    </div>
  );
}
