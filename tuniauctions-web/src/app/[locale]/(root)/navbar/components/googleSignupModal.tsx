"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { resDataType } from "@/serverHelpers/types";
import { useBidderNavbarState } from "@/helpers/store/bidder/bidderNavbarState";
import { z } from "zod";
import { useLocale } from "next-intl";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { useRouter } from "next/navigation";
type Props = {
  credentialsToken: string;
};
export default function GoogleGenderSignupModal({ credentialsToken }: Props) {
  //
  const locale = useLocale();
  //
  const router = useRouter();
  //
  const { isGenderSignupFormModalOpen, setGenderSignupFormModalState } =
    useBidderNavbarState();
  //
  const { setBidderLocalStorageData } = useBidderProfileStore();
  //
  const bidderGoogleSignupSchema = z.object({
    gender: z.enum(["Male", "Female"]),
  });
  //
  type bidderGoogleSignupSchemaType = z.infer<typeof bidderGoogleSignupSchema>;
  //
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<bidderGoogleSignupSchemaType>({
    resolver: zodResolver(bidderGoogleSignupSchema),
  });
  //
  const onSubmit: SubmitHandler<bidderGoogleSignupSchemaType> = async (
    formData
  ) => {
    try {
      const res = await fetch("/api/bidder/googleSignup", {
        method: "POST",
        body: JSON.stringify({
          credentialsGoogleToken: credentialsToken,
          gender: formData.gender,
        }),
      });

      const resData = await res.json();
      if (resData.success) {
        setBidderLocalStorageData(resData.bidderFrontData);
        setGenderSignupFormModalState();
        router.push("/" + locale + "/bidder");
      }
    } catch (err) {
      console.log(err);
    }
  };
  //
  return (
    <>
      <Modal
        title=""
        centered
        open={isGenderSignupFormModalOpen}
        width={600}
        footer={null}
        onCancel={setGenderSignupFormModalState}
      >
        <form
          className={`px-10 py-8 w-full max-w-xl bg-white rounded-lg sm:w-[600px]`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-center px-6 py-2 max-w-full bg-white w-full sm:w-[550px] sm:px-10 text-gl font-bold">
            <p>Provide your gender to finish signup process</p>
          </div>

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
          <button
            type="submit"
            className="mt-6 px-16 py-3 w-full bg-gray-800 text-white rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading" : "Confirm"}
          </button>
        </form>
      </Modal>
    </>
  );
}
