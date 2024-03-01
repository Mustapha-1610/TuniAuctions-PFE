import React from "react";

function MyComponent() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="max-w-4xl ">
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src="https://i.imgur.com/WbQnbas.png"
              alt="Company Logo"
              className="w-full max-w-sm"
            />
          </div>
          <div>
            <div className="text-center sm:text-left">
              <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
                About us
              </span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl text-indigo-600">
                About <span className="text-gray-800">Our Company</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, commodi doloremque, fugiat illum magni minus nisi nulla
                numquam obcaecati placeat quia, repellat tempore voluptatum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
