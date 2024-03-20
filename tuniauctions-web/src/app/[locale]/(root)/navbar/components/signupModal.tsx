"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { IoIosWarning } from "react-icons/io";

import { resDataType } from "@/serverHelpers/types";
import {
  bidderSignupSchema,
  bidderSignupSchemaType,
} from "@/zodTypes/bidder/signup";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  setLoginOpen: (openLogin: boolean) => void;
}
export default function SignupModal({ open, setOpen, setLoginOpen }: Props) {
  const [formType, setFormType] = useState("bidder");

  return (
    <>
      <Modal
        title=""
        centered
        open={open}
        width={600}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <div className="flex flex-col bg-white">
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="flex flex-col pb-2 bg-white items-center mt-8 mx-4">
              <div className="text-center  mb-4 font-bold text-lg ">
                Sign Up
              </div>

              <div className="flex space-x-2">
                <button
                  className={`px-6 text-lg font-medium rounded-md transition-all duration-150 ease-in-out ${
                    formType === "bidder"
                      ? "bg-gray-800 text-white shadow-md"
                      : "bg-white text-black border border-black"
                  }`}
                  onClick={() => setFormType("bidder")}
                >
                  Bidder
                </button>
                <button
                  className={`px-6 py-2 text-lg font-medium rounded-md transition-all duration-150 ease-in-out ${
                    formType === "seller"
                      ? "bg-gray-800 text-white shadow-md"
                      : "bg-white text-black border border-black"
                  }`}
                  onClick={() => setFormType("seller")}
                >
                  Seller
                </button>
              </div>

              {formType === "seller" ? (
                <SellerSignupForm />
              ) : (
                <BidderSignupForm />
              )}
              <div className=" text-sm text-gray-500">
                Have an account?
                <span className="text-blue-500 cursor-pointer">
                  <u onClick={() => (setOpen(false), setLoginOpen(true))}>
                    Sign in
                  </u>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

function BidderSignupForm() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<bidderSignupSchemaType>({
    resolver: zodResolver(bidderSignupSchema),
  });
  const onSubmit: SubmitHandler<bidderSignupSchemaType> = async (formData) => {
    try {
      setErrorMessage("");
      const res = await fetch("/api/bidder/signup", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const resData: resDataType = await res.json();
      if (resData.success) {
      } else if (resData.errorMessage) {
        setErrorMessage(resData.errorMessage);
      }

      console.log(resData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form
        className={`px-10 py-8 w-full max-w-xl bg-white rounded-lg sm:w-[600px]`}
        onSubmit={handleSubmit(onSubmit)}
      >
        {errorMessage && (
          <p className="mb-1 font-bold flex flex-rows text-red-500 text-gl">
            <IoIosWarning size={21} className="mr-2" />
            {errorMessage}
          </p>
        )}
        <input
          {...register("fullName")}
          type="text"
          placeholder="First Name"
          className="mt-4 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        {errors.fullName && (
          <p className="mt-1 text-red-500">{errors.fullName.message}</p>
        )}
        <input
          {...register("email")}
          type="email"
          placeholder="Email Address"
          className="mt-4 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        {errors.email && (
          <p className="mt-1 text-red-500">{errors.email.message}</p>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="mt-4 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        {errors.password && (
          <p className="mt-1 text-red-500">{errors.password.message}</p>
        )}
        <select
          {...register("gender")}
          defaultValue="Gender"
          className="mt-4 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="Gender" disabled>
            Gender
          </option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
        {errors.gender && (
          <p className="mt-1 text-red-500">{errors.gender.message}</p>
        )}
        <div className="flex items-center mt-4">
          <input
            id="terms"
            type="checkbox"
            className="w-4 h-4 text-neutral-800 border-gray-300 rounded focus:ring-neutral-500"
          />
          <label
            htmlFor="terms"
            className="ml-2 block text-xs text-neutral-600"
          >
            I agree to the Terms of Service and Privacy Policy.
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 px-16 py-3 w-full bg-gray-800 text-white rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading" : "Signup"}
        </button>
      </form>
    </>
  );
}

function SellerSignupForm() {
  return (
    <>
      <form
        className={`px-10 py-8 w-full max-w-xl bg-white rounded-lg sm:w-[600px]`}
      >
        <input
          type="tel"
          placeholder="Phone Number"
          className="mt-4 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <textarea
          placeholder="Description"
          className="mt-4 px-4 py-2 w-full h-20 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <div className="mt-4 grid grid-cols-2 gap-4">
          <select className="px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <select className="px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </div>
        <div className="flex justify-center mt-4">
          <label className="flex items-center px-4 py-2 bg-white text-black rounded-lg shadow-lg tracking-wide uppercase border border-black cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="text-base leading-normal">Upload Images</span>
            <input type="file" className="hidden" multiple />
          </label>
        </div>
        <div className="flex items-center mt-4">
          <input
            id="terms"
            type="checkbox"
            className="w-4 h-4 text-neutral-800 border-gray-300 rounded focus:ring-neutral-500"
          />
          <label
            htmlFor="terms"
            className="ml-2 block text-xs text-neutral-600"
          >
            I agree to the Terms of Service and Privacy Policy.
          </label>
        </div>
        <button className="mt-6 px-16 py-3 w-full bg-gray-800 text-white rounded-lg">
          Apply Seller Account
        </button>
      </form>
    </>
  );
}
