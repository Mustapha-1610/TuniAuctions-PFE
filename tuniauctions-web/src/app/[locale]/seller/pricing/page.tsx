import { useLocale } from "next-intl";
import Link from "next/link";

export default function Pricing() {
  const locale = useLocale();

  return (
    <>
      <div className="flex ml-2 overflow-hidden bg-white pt-16">
        <div
          id="main-content"
          className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
        >
          <div className="flex flex-col items-start px-11  pb-4 bg-white max-md:px-5">
            <div className="text-4xl leading-10 text-slate-900 tracking-[2.4px] max-md:max-w-full">
              Pricing
            </div>

            <div className="self-center mt-10 w-full max-w-[1340px] max-md:max-w-full">
              <Link
                href={"/" + locale + "/seller/checkout"}
                className="flex gap-5 max-lg:flex-col max-md:gap-0 max-lg:"
              >
                <div className="flex flex-col w-[33%] max-lg:ml-0 max-lg:w-full">
                  <div className="flex flex-col items-start px-4 py-10 mx-auto w-full text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid shadow-2xl max-md:mt-10">
                    <div className="flex gap-5 justify-between items-start self-center max-w-full w-[269px]">
                      <div className="flex flex-col self-end mt-5">
                        <div className="text-2xl tracking-widest leading-8">
                          Value
                        </div>
                        <div className="mt-3.5 text-xs leading-5">
                          10 lines min
                        </div>
                      </div>
                      <div className="flex flex-col self-start">
                        <div className="flex gap-2 justify-between">
                          <div className="text-lg leading-7">$</div>
                          <div className="text-3xl leading-7">29</div>
                          <div className="grow my-auto text-xs leading-5">
                            99
                          </div>
                        </div>
                        <div className="mt-4 text-xs leading-5">
                          /mo per user
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 self-stretch mt-6 h-0.5 bg-black" />
                    <div className="mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
                      5 Auto-Attendants
                    </div>

                    <div className="shrink-0 self-stretch mt-6 h-0.5 bg-black" />
                    <div className="mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
                      Voice
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[33%] max-lg:ml-0 max-lg:w-full">
                  <div className="flex flex-col items-start px-4 py-10 mx-auto w-full text-white whitespace-nowrap rounded-xl shadow-2xl bg-slate-900 max-md:mt-10">
                    <div className="flex gap-5 justify-between items-start self-center max-w-full w-[271px]">
                      <div className="flex flex-col self-end mt-6">
                        <div className="text-2xl tracking-widest leading-8">
                          Basic
                        </div>
                        <div className="mt-3.5 text-xs leading-5">
                          10 lines min
                        </div>
                      </div>
                      <div className="flex flex-col self-start">
                        <div className="flex gap-2 justify-between">
                          <div className="text-lg leading-7">$</div>
                          <div className="text-3xl leading-7">31</div>
                          <div className="grow my-auto text-xs leading-5">
                            99
                          </div>
                        </div>
                        <div className="mt-4 text-xs leading-5">
                          /mo per user
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 self-stretch mt-6 h-0.5 bg-white" />
                    <div className="mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
                      5 Auto-Attendants
                    </div>

                    <div className="shrink-0 self-stretch mt-6 h-0.5 bg-white" />
                    <div className="mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
                      Voice
                    </div>
                    <div className="mt-9 ml-5 text-base leading-7 max-md:ml-2.5">
                      Voicemail
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[33%] max-lg:ml-0 max-lg:w-full">
                  <div className="flex flex-col items-start px-4 py-10 mx-auto w-full text-black whitespace-nowrap bg-yellow-300 rounded-xl border border-black border-solid shadow-2xl max-md:mt-10">
                    <div className="flex gap-5 justify-between items-start self-center max-w-full w-[269px]">
                      <div className="flex flex-col self-end mt-5">
                        <div className="text-2xl tracking-widest leading-8">
                          Premium
                        </div>
                        <div className="mt-3.5 text-xs leading-5">
                          10 lines min
                        </div>
                      </div>
                      <div className="flex flex-col self-start">
                        <div className="flex gap-2 justify-between">
                          <div className="text-lg leading-7">$</div>
                          <div className="text-3xl leading-7">29</div>
                          <div className="grow my-auto text-xs leading-5">
                            99
                          </div>
                        </div>
                        <div className="mt-4 text-xs leading-5">
                          /mo per user
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 self-stretch mt-6 h-0.5 bg-black" />
                    <div className="mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
                      5 Auto-Attendants
                    </div>

                    <div className="shrink-0 self-stretch mt-6 h-0.5 bg-black" />
                    <div className="mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
                      Voice
                    </div>
                    <div className="mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
                      Voice
                    </div>
                    <div className="mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
                      Voice
                    </div>
                    <div className="mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
                      Voice
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
