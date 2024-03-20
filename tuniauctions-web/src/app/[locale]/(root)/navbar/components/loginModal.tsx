import React, { useState } from "react";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { resDataType } from "@/serverHelpers/types";
import { IoIosWarning } from "react-icons/io";
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  setSignupOpen: (openSignup: boolean) => void;
  translationTest: string;
}

export default function LoginModal({
  open,
  setOpen,
  setSignupOpen,
  translationTest,
}: Props) {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, translationTest),
  });
  type formfields = z.infer<typeof loginSchema>;
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formfields>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();
  const locale = useLocale();
  const [errorMessage, setErrorMessage] = useState<string>("");

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
      } else {
        setErrorMessage(resData.errorMessage);
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
        open={open}
        width={600}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <div className="flex flex-col">
          <div className="text-center font-bold text-lg">Sign In</div>

          <form
            className="flex flex-col items-center px-6 py-2 max-w-full bg-white w-full sm:w-[550px] sm:px-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            {errorMessage && (
              <p className="mb-1 font-bold flex flex-rows text-red-500 text-gl">
                <IoIosWarning size={21} className="mr-2" />
                {errorMessage}
              </p>
            )}
            <input
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className="mt-4 px-4 py-2 w-full border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-500"
            />
            {errors.email && (
              <p className="mt-1 text-red-500">{errors.email.message}</p>
            )}
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
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
              {isSubmitting ? "Loading" : "Submit"}
            </button>
            <div className="mt-6 text-sm text-neutral-600">OR</div>
            <button
              onClick={() => {
                router.push("/" + locale + "/bidder");
              }}
              className="mt-4 px-16 py-3 w-full text-neutral-800 bg-white rounded-lg border border-neutral-800 hover:bg-neutral-50"
            >
              Login with Google
            </button>
          </form>
          <div className="flex justify-between px-6 py-3 bg-neutral-50 w-full">
            <div className="text-sm text-neutral-600 ">
              Dont have an account?{" "}
              <span className="text-blue-500">
                <u
                  className="cursor-pointer"
                  onClick={() => (setOpen(false), setSignupOpen(true))}
                >
                  Sign up
                </u>
              </span>
            </div>
            <div className="text-sm text-neutral-600 cursor-pointer">
              <u>Forgot password?</u>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
