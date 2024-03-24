"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { resDataType } from "@/serverHelpers/types";
import { IoIosWarning } from "react-icons/io";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import GoogleGenderSignupModal from "./googleSignupModal";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
import { useNavbarState } from "@/helpers/store/general/navbarState";
import ForgotPassword from "./components/forgotPassword";

export default function LoginModal() {
  //
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [googleCredentialsToken, setGoogleCredentialsToken] =
    useState<string>("");
  //
  const errTranslations = useTranslations("errors");
  const textTranslations = useTranslations("loginModal");
  const router = useRouter();
  const locale = useLocale();
  const { setSellerLocalStorageData } = useSellerProfileStore();
  const { setBidderLocalStorageData } = useBidderProfileStore();
  const {
    setSignupModalState,
    setGenderSignupFormModalState,
    setLoginModalState,
    isLoginModalOpen,
    setIsForgotPasswordModalState,
  } = useNavbarState();
  const loginSchema = z.object({
    email: z.string().email(textTranslations("zodErrors.email")),
    password: z.string().min(6, textTranslations("zodErrors.password")),
  });
  type formfields = z.infer<typeof loginSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formfields>({
    resolver: zodResolver(loginSchema),
  });
  //
  const onSubmit: SubmitHandler<formfields> = async (formData) => {
    try {
      setErrorMessage("");

      const res = await fetch("/api/general/login", {
        body: JSON.stringify(formData),
        method: "POST",
      });
      const resData: resDataType = await res.json();
      console.log(resData);
      if (resData.success) {
        if (resData.bidderFrontData) {
          setBidderLocalStorageData(resData.bidderFrontData);
          setLoginModalState();
          router.push("/" + locale + "/bidder");
        } else if (resData.sellerFrontData) {
          setSellerLocalStorageData(resData.sellerFrontData);
          setLoginModalState();
          router.push("/" + locale + "/seller");
        }
      } else {
        setErrorMessage(errTranslations(`authErros.${resData.errorMessage}`));
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleGoogleSignin = async (credentialToken: string) => {
    try {
      const res = await fetch("/api/bidder/googleLogin", {
        method: "POST",
        body: JSON.stringify({
          credentialsGoogleToken: credentialToken,
        }),
      });
      const resData: resDataType = await res.json();
      console.log(resData);
      if (resData.success) {
        setBidderLocalStorageData(resData.bidderFrontData!);
        setLoginModalState();
        router.push("/" + locale + "/bidder");
      }
      if (resData.errorMessage === "redirectSignup") {
        setLoginModalState();
        setGoogleCredentialsToken(credentialToken);
        setGenderSignupFormModalState();
      } else {
        setErrorMessage(errTranslations(`authErros.${resData.errorMessage}`));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Modal
        title=""
        centered
        open={isLoginModalOpen}
        width={600}
        footer={null}
        onCancel={setLoginModalState}
      >
        <div className="flex flex-col">
          <div className="text-center font-bold text-lg">
            {textTranslations("signin")}
          </div>

          <div className="flex flex-col items-center px-6 py-2 max-w-full bg-white w-full sm:w-[550px] sm:px-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              {errorMessage && (
                <p className="mb-1 font-bold flex flex-rows text-red-500 text-gl">
                  <IoIosWarning size={21} className="mr-2" />
                  {errorMessage}
                </p>
              )}
              <input
                {...register("email")}
                type="email"
                placeholder={textTranslations("email")}
                className="mt-4 px-4 py-2 w-full border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-500"
              />
              {errors.email && (
                <p className="mt-1 text-red-500">{errors.email.message}</p>
              )}
              <input
                {...register("password")}
                type="password"
                placeholder={textTranslations("password")}
                className="mt-4 px-4 py-2 w-full border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-500"
              />
              {errors.password && (
                <p className="mt-1 text-red-500">{errors.password.message}</p>
              )}
              <button
                disabled={isSubmitting}
                type="submit"
                className="mt-6 px-16 py-3 w-full text-white bg-neutral-800 rounded-lg hover:bg-neutral-900"
              >
                {isSubmitting
                  ? textTranslations("loading")
                  : textTranslations("submit")}
              </button>
            </form>
            <div className="mt-6 mb-4 text-sm text-neutral-600">
              {textTranslations("or")}
            </div>
            <GoogleOAuthProvider clientId="1069698146160-nfmga77vbe59hhf2ignmj443tjkvrpfr.apps.googleusercontent.com">
              <GoogleLogin
                theme="filled_black"
                size="large"
                shape="rectangular"
                width="500"
                ux_mode="popup"
                text="continue_with"
                locale={locale}
                onSuccess={async (credentialResponse) =>
                  await handleGoogleSignin(credentialResponse.credential!)
                }
                onError={() => {
                  console.log("Login Failed");
                }}
                useOneTap
              />
            </GoogleOAuthProvider>
          </div>
          <div className="flex justify-between px-6 py-3 bg-neutral-50 w-full">
            <div className="text-sm text-neutral-600 ">
              {textTranslations("dontHaveAnAccount")}
              <span className="text-blue-500">
                <u
                  className="cursor-pointer ml-1"
                  onClick={() => (setLoginModalState(), setSignupModalState())}
                >
                  {textTranslations("signup")}
                </u>
              </span>
            </div>
            <div className="text-sm  text-neutral-600 cursor-pointer">
              <u
                onClick={() => {
                  setLoginModalState();
                  setIsForgotPasswordModalState();
                }}
              >
                {textTranslations("forgotPassword")}
              </u>
            </div>
          </div>
        </div>
      </Modal>
      <GoogleGenderSignupModal credentialsToken={googleCredentialsToken} />
      <ForgotPassword />
    </>
  );
}
