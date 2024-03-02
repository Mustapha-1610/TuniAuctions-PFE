import React from "react";
import { Modal } from "antd";
import { useRouter } from "next/navigation";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  setSignupOpen: (openSignup: boolean) => void;
}
export default function LoginModal({ open, setOpen, setSignupOpen }: Props) {
  const router = useRouter();

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
          {/* Added Sign In text */}
          <div className="flex flex-col items-center px-6 py-2 max-w-full bg-white w-full sm:w-[550px] sm:px-10">
            <input
              type="email"
              placeholder="Email Address"
              className="mt-4 px-4 py-2 w-full border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="mt-4 px-4 py-2 w-full border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-500"
            />

            <button
              onClick={() => {
                router.push("/bidder/profile");
              }}
              className="mt-6 px-16 py-3 w-full text-white bg-neutral-800 rounded-lg hover:bg-neutral-900"
            >
              Sign In
            </button>
            <div className="mt-6 text-sm text-neutral-600">OR</div>
            <button
              onClick={() => {
                router.push("/bidder/profile");
              }}
              className="mt-4 px-16 py-3 w-full text-neutral-800 bg-white rounded-lg border border-neutral-800 hover:bg-neutral-50"
            >
              Login with Google
            </button>
          </div>
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
