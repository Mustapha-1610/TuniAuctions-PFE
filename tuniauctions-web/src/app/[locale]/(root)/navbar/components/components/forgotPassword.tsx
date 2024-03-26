import { useNavbarState } from "@/helpers/store/general/navbarState";
import { Modal } from "antd";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resDataType } from "@/serverHelpers/types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
export default function ForgotPassword() {
  const textTranslations = useTranslations("resetPasswordModal");
  const errTranslations = useTranslations("errors.passwordResetErrors");
  const [errMessage, setErrMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [displayedComponent, setDisplayedComponent] =
    useState<string>("emailForm");
  const {
    isForgotPasswordModalOpen,
    setIsForgotPasswordModalState,
    setLoginModalState,
  } = useNavbarState();
  const resetPasswordSchema = z.object({
    email: z.string().email(textTranslations("zodErrors.email")),
  });
  type resetPasswordForm = z.infer<typeof resetPasswordSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<resetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
  });
  const onSubmit: SubmitHandler<resetPasswordForm> = async (formData) => {
    setErrMessage("");
    const res = await fetch("/api/general/password/sendResetCode", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const resData: resDataType = await res.json();
    console.log(resData);
    if (resData.success) {
      setSuccessMessage(errTranslations("success"));
      setEmail(formData.email);
      setDisplayedComponent("codeForm");
    } else {
      setErrMessage(errTranslations(resData.errorMessage));
    }
  };
  function EmailForm() {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email")}
          type="email"
          placeholder={textTranslations("email")}
          className="mt-4 px-4 py-2 w-full border border-neutral-600 rounded-lg focus:ring-2 focus:ring-neutral-500"
        />
        {errors.email && (
          <p className="mt-1 text-red-500">{errors.email.message}</p>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="mt-6 px-16 py-3 w-full text-white bg-neutral-800 rounded-lg hover:bg-neutral-900"
        >
          {isSubmitting
            ? textTranslations("loading")
            : textTranslations("confirm")}
        </button>
      </form>
    );
  }
  function CodeForm() {
    const [secretCode, setResetCode] = useState<string>("");
    const [isLoading, setIsloading] = useState<boolean>(false);
    const [time, setTime] = useState<boolean>(false); // 10 minutes in seconds
    useEffect(() => {
      if (!time) {
        const timerId = setTimeout(() => setTime(true), 10000);
        return () => clearTimeout(timerId);
      }
    }, [time]);
    async function verifyResetCode(e: any) {
      setIsloading(true);
      e.preventDefault();
      const res = await fetch("/api/general/password/verifyResetCode", {
        method: "POST",
        body: JSON.stringify({
          email,
          secretCode,
        }),
      });
      const resData: resDataType = await res.json();
      setIsloading(false);
      if (resData.success) {
        setSuccessMessage("");
        setErrMessage("");
        setDisplayedComponent("resetPasswordForm");
      } else {
        setSuccessMessage("");
        setErrMessage(errTranslations(resData.errorMessage));
      }
    }
    async function handleResendPasswordCode(e: any) {
      e.preventDefault();
      console.log(email);
      const res = await fetch("/api/general/password/sendResetCode", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      const resData: resDataType = await res.json();
      console.log(resData);
      if (resData.success) {
        setSuccessMessage(errTranslations("success"));
      } else {
        setErrMessage(errTranslations(resData.errorMessage));
      }
    }
    return (
      <form onSubmit={verifyResetCode}>
        <div>
          {!time ? (
            <div> {textTranslations("resendCode")} </div>
          ) : (
            <>
              <u
                onClick={(e) => {
                  handleResendPasswordCode(e), setTime(false);
                }}
                className="text-blue-500 cursor-pointer"
              >
                {textTranslations("resend")}
              </u>
            </>
          )}
        </div>
        <input
          type="text"
          onChange={(e) => {
            setResetCode(e.target.value);
          }}
          placeholder={textTranslations("codePlaceholder")}
          className="mt-4 px-2 py-2 w-full border border-neutral-600 rounded-lg focus:ring-2 focus:ring-neutral-500"
        />
        <button
          type="submit"
          className="mt-6 px-16 py-3 w-full text-white bg-neutral-800 rounded-lg hover:bg-neutral-900"
        >
          {isLoading
            ? textTranslations("loading")
            : textTranslations("confirm")}
        </button>
      </form>
    );
  }
  function ResetPasswordForm() {
    const [resetPasswordForm, setResetPasswordForm] = useState({
      newPassword: "",
      confirmNewPassword: "",
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    function handleFormChange(e: any) {
      setResetPasswordForm({
        ...resetPasswordForm,
        [e.target.name]: e.target.value,
      });
    }
    async function handlePasswordChange(e: any) {
      setIsLoading(true);
      e.preventDefault();
      const res = await fetch("/api/general/password/resetPassword", {
        method: "POST",
        body: JSON.stringify({
          email,
          newPassword: resetPasswordForm.newPassword,
          confirmNewPassword: resetPasswordForm.confirmNewPassword,
        }),
      });
      const resData: resDataType = await res.json();
      setIsLoading(false);
      if (resData.success) {
        setDisplayedComponent("confirmPasswordChange");
      } else {
        setErrMessage(errTranslations(resData.errorMessage));
      }
    }
    return (
      <form onSubmit={handlePasswordChange}>
        <input
          type="password"
          name="newPassword"
          onChange={handleFormChange}
          placeholder={textTranslations("newPassword")}
          className="mt-4 px-2 py-2 w-full border border-neutral-600 rounded-lg focus:ring-2 focus:ring-neutral-500"
        />
        <input
          type="password"
          name="confirmNewPassword"
          onChange={handleFormChange}
          placeholder={textTranslations("confirmNewPassword")}
          className="mt-4 px-2 py-2 w-full border border-neutral-600 rounded-lg focus:ring-2 focus:ring-neutral-500"
        />
        <button
          type="submit"
          className="mt-6 px-16 py-3 w-full text-white bg-neutral-800 rounded-lg hover:bg-neutral-900"
        >
          {isLoading ? textTranslations("loading") : textTranslations("reset")}
        </button>
      </form>
    );
  }
  function ConfirmResetPassword() {
    return (
      <>
        <div>
          <p>
            {textTranslations("success")}
            <u
              className="text-blue-300"
              onClick={() => {
                setIsForgotPasswordModalState();
                setLoginModalState();
              }}
            >
              {textTranslations("login")}
            </u>
          </p>
        </div>
      </>
    );
  }
  return (
    <>
      <Modal
        title=""
        centered
        open={isForgotPasswordModalOpen}
        width={600}
        footer={null}
        onCancel={setIsForgotPasswordModalState}
        maskClosable={false}
      >
        <div className="flex flex-col">
          <div className="text-center font-bold text-lg">
            {" "}
            {textTranslations("resetPassword")}
          </div>
          <p className="text-green-500 font-bold">{successMessage}</p>
          <p className="text-red-500 font-bold">{errMessage}</p>

          {displayedComponent == "emailForm" ? (
            <EmailForm />
          ) : displayedComponent === "codeForm" ? (
            <CodeForm />
          ) : displayedComponent === "resetPasswordForm" ? (
            <ResetPasswordForm />
          ) : (
            <ConfirmResetPassword />
          )}
          <div className="flex flex-col items-center px-6 py-2 max-w-full bg-white w-full sm:w-[550px] sm:px-10"></div>
        </div>
      </Modal>
    </>
  );
}
