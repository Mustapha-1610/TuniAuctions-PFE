import { useTranslations } from "next-intl";
import React from "react";

export default function HowItWorks() {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-screen bg-white mt-20 py-10 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="text-6xl font-bold text-black mb-6"
          style={{ fontFamily: "RevansBold" }}
        >
          How It Works
        </h1>
        <div
          className="w-full relative mb-2 flex justify-center items-center"
          style={{ height: "50vh" }}
        >
          <iframe
            width="80%"
            height="80%"
            src="https://www.youtube.com/embed/xy3AcmW0lrQ"
            style={{
              borderRadius: "15px",
              boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            }}
          ></iframe>
        </div>
        <p className="text-lg text-gray-600 mb-10">
          Follow these simple steps to get started.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:h-full ">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "items-start" : "items-end"
              } mb-16`}
            >
              <div
                className={`w-64 p-6 rounded-lg shadow-lg bg-white ${
                  index % 2 === 0 ? "ml-16" : "mr-16"
                }`}
              >
                <h2
                  className="text-2xl font-semibold mb-3"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Step {index + 1}
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              {index + 1 !== 5 && (
                <div
                  className={`w-3 h-3 bg-black rounded-full self-center ${
                    index % 2 === 0
                      ? "mt-[-1.5rem] ml-[calc(50%+1rem)]"
                      : "mt-[-1.5rem] mr-[calc(50%+1rem)]"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
