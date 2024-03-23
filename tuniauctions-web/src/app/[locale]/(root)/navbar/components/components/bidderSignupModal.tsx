"use client";
import { resDataType } from "@/serverHelpers/types";
import {
  bidderSignupSchema,
  bidderSignupSchemaType,
} from "@/zodTypes/bidder/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosWarning } from "react-icons/io";
import { useBidderSignupModalTranslations } from "@/app/[locale]/nextIntlTranslations/bidder/signupModalTranslations";
import { ErrText } from "./sellerSignupModal";

export default function BidderSignupForm() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const bidTranslations = useBidderSignupModalTranslations();
  const {
    register,
    handleSubmit,
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
        setSuccessMessage(bidTranslations.modalText.success);
      } else if (resData.errorMessage) {
        setErrorMessage(bidTranslations.apiErrors[resData.errorMessage]);
      }
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
        {successMessage && (
          <p className="mb-1 font-bold flex flex-rows text-green-500 text-gl">
            <IoIosWarning size={21} className="mr-2" />
            {successMessage}
          </p>
        )}
        <input
          {...register("fullName")}
          type="text"
          placeholder={bidTranslations.modalText.fullName}
          className="mt-4 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        {errors.fullName && (
          <ErrText errText={bidTranslations.zodErrors.fullName} />
        )}
        <input
          {...register("email")}
          type="email"
          placeholder={bidTranslations.modalText.email}
          className="mt-4 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        {errors.email && <ErrText errText={bidTranslations.zodErrors.email} />}
        <input
          {...register("password")}
          type="password"
          placeholder={bidTranslations.modalText.password}
          className="mt-4 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        {errors.password && (
          <ErrText errText={bidTranslations.zodErrors.password} />
        )}
        <select
          {...register("gender")}
          defaultValue={bidTranslations.modalText.gender}
          className="mt-4 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="Gender" disabled>
            {bidTranslations.modalText.gender}
          </option>
          <option value="Female">{bidTranslations.modalText.female}</option>
          <option value="Male">{bidTranslations.modalText.male}</option>
        </select>
        {errors.gender && (
          <ErrText errText={bidTranslations.zodErrors.gender} />
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
            {bidTranslations.modalText.terms}
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 px-16 py-3 w-full bg-gray-800 text-white rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? bidTranslations.modalText.loading
            : bidTranslations.modalText.submit}
        </button>
      </form>
    </>
  );
}
