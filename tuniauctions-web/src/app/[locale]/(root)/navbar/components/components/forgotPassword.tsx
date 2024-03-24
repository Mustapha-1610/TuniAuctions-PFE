import { useNavbarState } from "@/helpers/store/general/navbarState";
import { Modal } from "antd";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resDataType } from "@/serverHelpers/types";
import { useTranslations } from "next-intl";
export default function ForgotPassword() {
  const textTranslations = useTranslations("loginModal");
  const errTranslations = useTranslations("errors");
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
    try {
      const res = await fetch("/api/general/login", {
        body: JSON.stringify(formData),
        method: "POST",
      });
      const resData: resDataType = await res.json();
      console.log(resData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal
        title=""
        centered
        open={isForgotPasswordModalOpen}
        width={600}
        footer={null}
        onCancel={setIsForgotPasswordModalState}
      >
        <div className="flex flex-col">
          <div className="text-center font-bold text-lg">Reset Password</div>

          <div className="flex flex-col items-center px-6 py-2 max-w-full bg-white w-full sm:w-[550px] sm:px-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("email")}
                type="email"
                placeholder={textTranslations("email")}
                className="mt-4 px-4 py-2 w-full border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-500"
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
                  : textTranslations("submit")}
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
