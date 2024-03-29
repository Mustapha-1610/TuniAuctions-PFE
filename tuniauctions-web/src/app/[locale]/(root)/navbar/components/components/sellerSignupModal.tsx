"use client";
import {
  sellerSignupSchema,
  sellerSignupSchemaType,
} from "@/zodTypes/seller/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosWarning } from "react-icons/io";
import { resDataType } from "@/serverHelpers/types";
import { useSellerSignupModalTranslations } from "@/app/[locale]/nextIntlTranslations/seller/signupModalTranslations";
import handleSellerRegistrationLicenseUpload from "@/app/[locale]/bidder/profile/components/handleUploadImage";
export default function SellerSignupForm() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  //
  const selTrans = useSellerSignupModalTranslations();
  //
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<sellerSignupSchemaType>({
    resolver: zodResolver(sellerSignupSchema),
  });
  //

  const onSubmit: SubmitHandler<sellerSignupSchemaType> = async (formData) => {
    try {
      setErrorMessage("");
      setSuccessMessage("");
      formData.registrationLicense =
        await handleSellerRegistrationLicenseUpload(
          formData.registrationLicense,
          "/seller/RegistrationLicense"
        );
      console.log("running");
      const res = await fetch("/api/seller/signup", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const resData: resDataType = await res.json();
      console.log(resData);
      if (resData.success) {
        setSuccessMessage(selTrans.modalText.success);
      } else {
        setErrorMessage(selTrans.apiErrors[resData.errorMessage]);
      }
    } catch (err) {}
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
          {...register("name")}
          type="text"
          placeholder={selTrans.modalText.name}
          className="mt-4 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        {errors.name && <ErrText errText={selTrans.zodErrors.name} />}
        <input
          {...register("email")}
          type="email"
          placeholder={selTrans.modalText.email}
          className="mt-4 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        {errors.email && <ErrText errText={selTrans.zodErrors.email} />}
        <input
          {...register("password")}
          type="password"
          placeholder={selTrans.modalText.password}
          className="mt-4 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        {errors.password && <ErrText errText={selTrans.zodErrors.password} />}
        <textarea
          {...register("description")}
          placeholder={selTrans.modalText.description}
          className="mt-4 px-4 py-2 w-full h-20 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        {errors.description && (
          <ErrText errText={selTrans.zodErrors.description} />
        )}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="px-4 py-2 w-full  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
            <select {...register("city")}>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            {errors.city && <ErrText errText={selTrans.zodErrors.city} />}
          </div>
          <div className="px-4 py-2 w-full  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
            <select {...register("municipality")}>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
            {errors.municipality && (
              <ErrText errText={selTrans.zodErrors.municipality} />
            )}
          </div>
        </div>
        <textarea
          {...register("street")}
          placeholder={selTrans.modalText.street}
          className="mt-4 px-4 py-2 w-full h-20 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        {errors.street && <ErrText errText={selTrans.zodErrors.street} />}
        <div className="flex justify-center mt-4">
          <label className="flex items-center px-4 py-2 bg-white text-black rounded-lg shadow-lg tracking-wide uppercase border border-black cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="text-base leading-normal">
              {selTrans.modalText.registrationLicense}
            </span>
            <input
              type="file"
              {...register("registrationLicense")}
              className="hidden"
            />
          </label>
          {errors.registrationLicense && (
            <ErrText errText={selTrans.zodErrors.registrationLicense} />
          )}
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
            {selTrans.modalText.terms}
          </label>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 px-16 py-3 w-full bg-gray-800 text-white rounded-lg"
        >
          {isSubmitting ? selTrans.modalText.loading : selTrans.modalText.apply}
        </button>
      </form>
    </>
  );
}

type Props = {
  errText: string;
};
export function ErrText({ errText }: Props) {
  return (
    <>
      <p className="mt-1 text-red-500">{errText}</p>
    </>
  );
}
