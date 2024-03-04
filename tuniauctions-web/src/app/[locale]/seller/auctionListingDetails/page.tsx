import React from "react";

const MyComponent: React.FC = () => {
  interface IProductProps {
    id: string;
    placedOn: string;
    status: string;
    items: {
      name: string;
      price: number;
      properties: string;
      imageUrl: string;
    }[];
  }
  return (
    <div className="flex ml-2 overflow-hidden bg-white pt-16">
      <div
        id="main-content"
        className="h-full w-10/12  relative overflow-y-auto lg:ml-64"
      >
        <div className="flex flex-col px-6 max-md:px-5">
          <div className="flex gap-5 justify-between py-5 w-full whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <div className="text-lg font-semibold leading-7 text-zinc-800">
              Analytics
            </div>
            <div className="flex gap-0 justify-between px-2 py-1 text-sm leading-5">
              <div className="flex gap-2 self-start py-px pr-2 text-violet-500">
                <div className="grow">Dashboards</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf25842ddb855d19b6b0157ebb23e3a58c59c28eda7e80fe4f82b5048166e03f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  className="my-auto aspect-[0.93] w-[13px]"
                />
              </div>
              <div className="grow font-semibold text-zinc-800">Analytics</div>
            </div>
          </div>
          <div className="justify-center max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch pb-6 max-md:mt-6 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-center self-stretch p-5 mx-auto w-full font-semibold bg-white rounded-lg shadow-sm leading-[150%] text-zinc-800 max-md:mt-6">
                          <div className="flex flex-wrap gap-5 justify-between content-center">
                            <div className="flex flex-col flex-1">
                              <div className="text-base whitespace-nowrap">
                                Total Users
                              </div>
                              <div className="mt-3 text-2xl">9,789</div>
                              <div className="flex gap-2.5 justify-between py-1 pr-7 mt-3 text-xs text-emerald-400 max-md:pr-5">
                                <div>+0.892 </div>
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/60c30a5a0697f1fecddbef09b435cecb336db7401fc73d3d80f96fdca97d3457?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                  className="w-3 aspect-[0.93]"
                                />
                              </div>
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/645fe85deda909ad2a57047238a6ef55ef441bac8dd29d386ac96e22ab81d97f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                              className="my-auto max-w-full aspect-[3.03] w-[120px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-center self-stretch p-5 mx-auto w-full bg-white rounded-lg shadow-sm max-md:mt-6">
                          <div className="flex gap-5 justify-between">
                            <div className="flex flex-col font-semibold whitespace-nowrap leading-[150%] text-zinc-800">
                              <div className="text-base">Live Visitors</div>
                              <div className="mt-3 text-2xl">12,240</div>
                              <div className="flex gap-1 justify-between py-px pr-12 mt-3 text-xs text-red-500 max-md:pr-5">
                                <div className="grow">+0.59</div>
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7e8e6a414f7ed134d1fb5ebec49fb253ccf4eeb203731309b06bfe41b990eef?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                  className="my-auto w-3 aspect-square"
                                />
                              </div>
                            </div>
                            <div className="flex justify-center items-center px-3.5 my-auto w-10 h-10 bg-sky-500 rounded-lg aspect-square">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d1f7b8b834c12a77c78009b73a836dfff5c6adcf1a09f31f60a750d72ae95a9?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="w-full aspect-[0.3]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col items-start self-stretch pt-5 mx-auto w-full whitespace-nowrap bg-white rounded-lg shadow-sm leading-[150%] max-md:mt-6">
                          <div className="ml-5 text-base font-semibold text-violet-500 max-md:ml-2.5">
                            Bounce Rate
                          </div>
                          <div className="flex gap-3 justify-end py-2.5 mt-4 ml-5 max-md:ml-2.5">
                            <div className="text-2xl text-zinc-800">77.3%</div>
                            <div className="justify-center self-start py-px text-xs text-amber-300 aspect-[1.16]">
                              +0.59
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/556164fe307bdaadb5ad93e4f49b1f75e97e563a840b6cac9dd6f45ecbb102ed?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                            className="z-10 self-center mt-0 aspect-[6.67] w-[298px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pb-9 mt-3 bg-white rounded-lg shadow-sm max-md:max-w-full">
                    <div className="flex flex-wrap gap-0 justify-between content-center px-5 py-5 whitespace-nowrap rounded border-b border-solid border-b-zinc-100 leading-[150%] max-md:max-w-full">
                      <div className="grow justify-center items-start py-px pr-16 my-auto text-base font-bold text-zinc-800 max-md:max-w-full">
                        Audience Report
                      </div>
                      <div className="flex gap-3 justify-between px-3.5 py-2.5 text-sm font-medium text-center text-violet-500 rounded bg-violet-500 bg-opacity-10">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c49b627fa818b35a647c5b431ffc7184addbbb7e3c9dc6313c413df7cb2fdd78?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                          className="w-3.5 aspect-[0.67]"
                        />
                        <div>Export</div>
                      </div>
                    </div>
                    <div className="flex flex-col px-4 pt-10 pb-2.5 mx-5 mt-5 max-md:mr-2.5 max-md:max-w-full">
                      <div className="flex gap-3 justify-between items-start max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col text-xs text-right whitespace-nowrap basis-0 text-neutral-400 max-md:hidden">
                          <div>80</div>
                          <div className="mt-8">60</div>
                          <div className="mt-8">40</div>
                          <div className="mt-8">20</div>
                          <div className="mt-8">0</div>
                        </div>
                        <div className="flex overflow-hidden relative flex-col flex-1 justify-center min-h-[173px] max-md:max-w-full">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4b304cc00ee3ad44ca26f450a153c7a4fa4b086cd304eb8a4ec83c35825cf9c?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4b304cc00ee3ad44ca26f450a153c7a4fa4b086cd304eb8a4ec83c35825cf9c?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4b304cc00ee3ad44ca26f450a153c7a4fa4b086cd304eb8a4ec83c35825cf9c?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4b304cc00ee3ad44ca26f450a153c7a4fa4b086cd304eb8a4ec83c35825cf9c?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4b304cc00ee3ad44ca26f450a153c7a4fa4b086cd304eb8a4ec83c35825cf9c?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4b304cc00ee3ad44ca26f450a153c7a4fa4b086cd304eb8a4ec83c35825cf9c?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4b304cc00ee3ad44ca26f450a153c7a4fa4b086cd304eb8a4ec83c35825cf9c?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4b304cc00ee3ad44ca26f450a153c7a4fa4b086cd304eb8a4ec83c35825cf9c?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                            className="object-cover absolute inset-0 size-full"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5886daf856902825c2f65eb18d3655c9da9610c71fad78bac2c289913405f612?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                            className="w-full aspect-[5] max-md:max-w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between self-end mt-3 max-w-full text-xs text-center whitespace-nowrap text-neutral-400 w-[830px] max-md:flex-wrap">
                        <div className="grow">Jan</div>
                        <div>Feb</div>
                        <div>Mar</div>
                        <div>Apr</div>
                        <div>May</div>
                        <div>Jun</div>
                        <div>Jul</div>
                        <div>Aug</div>
                        <div>Sep</div>
                        <div>Oct</div>
                        <div>Nov</div>
                        <div className="grow">Dec</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch pb-9 w-full whitespace-nowrap bg-white rounded-lg shadow-sm leading-[150%] max-md:mt-6 max-md:max-w-full">
                          <div className="flex flex-wrap gap-0 justify-between content-center px-5 py-4 rounded border-b border-solid border-b-zinc-100 max-md:max-w-full">
                            <div className="grow justify-center pr-12 text-base font-bold text-zinc-800">
                              Top Countries Sessions vs Bounce Rate
                            </div>
                            <div className="flex gap-1.5 justify-center px-2 py-px my-auto text-xs text-neutral-400">
                              <div className="grow">View All</div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/67eabc6a8456ef2535ba48eb139cbd558560a5cc9cc5969d8221bbd09cbee5ea?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="w-3 aspect-[0.67]"
                              />
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d70caff4126f20a1ac4a5585452462cf15ca947ef0fd6d47c1bf52d97e532991?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d70caff4126f20a1ac4a5585452462cf15ca947ef0fd6d47c1bf52d97e532991?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d70caff4126f20a1ac4a5585452462cf15ca947ef0fd6d47c1bf52d97e532991?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d70caff4126f20a1ac4a5585452462cf15ca947ef0fd6d47c1bf52d97e532991?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d70caff4126f20a1ac4a5585452462cf15ca947ef0fd6d47c1bf52d97e532991?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d70caff4126f20a1ac4a5585452462cf15ca947ef0fd6d47c1bf52d97e532991?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d70caff4126f20a1ac4a5585452462cf15ca947ef0fd6d47c1bf52d97e532991?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d70caff4126f20a1ac4a5585452462cf15ca947ef0fd6d47c1bf52d97e532991?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                            className="self-center mt-5 max-w-full aspect-[1.27] w-[419px]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch w-full bg-white rounded-lg shadow-sm max-md:mt-6 max-md:max-w-full">
                          <div className="flex flex-wrap gap-0 justify-between content-center px-5 py-4 whitespace-nowrap rounded border-b border-solid border-b-zinc-100 leading-[150%] max-md:max-w-full">
                            <div className="grow justify-center items-start pr-16 text-base font-bold text-zinc-800">
                              Traffic Sources
                            </div>
                            <div className="flex gap-1.5 justify-center px-2 py-px my-auto text-xs text-neutral-400">
                              <div className="grow">View All</div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/67eabc6a8456ef2535ba48eb139cbd558560a5cc9cc5969d8221bbd09cbee5ea?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="w-3 aspect-[0.67]"
                              />
                            </div>
                          </div>
                          <div className="flex gap-5 justify-between px-3 py-3.5 text-sm font-semibold leading-5 whitespace-nowrap text-zinc-800 max-md:flex-wrap max-md:max-w-full">
                            <div>Browser</div>
                            <div>Sessions</div>
                            <div>Traffic</div>
                          </div>
                          <div className="flex gap-3 items-center px-3 border-t border-solid border-t-gray-100 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-2 self-stretch py-0.5 my-auto">
                              <div className="flex justify-center items-center px-1.5 w-7 h-7 rounded-full aspect-square bg-slate-100">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/13ed687ec0b32016fe51df9f4743de0b80244c442a04ce3c66a6e54f8652e426?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                  className="w-full aspect-[0.64]"
                                />
                              </div>
                              <div className="flex-auto text-sm font-semibold leading-5 text-zinc-800">
                                Google
                              </div>
                            </div>
                            <div className="flex gap-1 justify-between self-stretch px-3 py-4 text-sm font-medium leading-5 whitespace-nowrap text-zinc-800">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/da9de364b248ec09f621feccd0bff6baf3b8b316714d9c77e316d1fdb1afdf4a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="aspect-[0.67] w-[18px]"
                              />
                              <div className="flex-auto my-auto">23,379</div>
                            </div>
                            <div className="flex flex-col flex-1 justify-center self-stretch pr-5 my-auto rounded bg-slate-100">
                              <div className="shrink-0 bg-violet-500 h-[5px] rounded-[9999px_0px_0px_9999px]" />
                            </div>
                          </div>
                          <div className="flex gap-3 items-center px-3 border-t border-solid border-t-gray-100 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-2 self-stretch py-0.5 my-auto">
                              <div className="flex justify-center items-center px-1.5 w-7 h-7 rounded-full aspect-square bg-slate-100">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e986f98c2bf318dffa6e5e20d2308d56abe9ad8c993424d86d03b0cee2c9fa29?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                  className="w-full aspect-[0.64]"
                                />
                              </div>
                              <div className="flex-auto text-sm font-semibold leading-5 text-zinc-800">
                                Safari
                              </div>
                            </div>
                            <div className="flex gap-1 justify-between self-stretch px-3 py-4 text-sm font-medium leading-5 whitespace-nowrap text-zinc-800">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e8ef25fb5b5c938219cd179f93704b5ae893d136894199293a87f4080b33b29?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="aspect-[0.67] w-[18px]"
                              />
                              <div className="flex-auto my-auto">78,973</div>
                            </div>
                            <div className="flex flex-col flex-1 justify-center self-stretch pr-16 my-auto rounded bg-slate-100">
                              <div className="bg-violet-500 h-[5px] rounded-[9999px_0px_0px_9999px] w-[29px] max-md:mr-1" />
                            </div>
                          </div>
                          <div className="flex gap-3 items-center px-3 border-t border-solid border-t-gray-100 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-2 self-stretch py-0.5 my-auto">
                              <div className="flex justify-center items-center px-1.5 w-7 h-7 rounded-full aspect-square bg-slate-100">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/61fe89a6e00654afc96ec038bd1515522d73caa0df00c4442a476645fc4a4ae1?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                  className="w-full aspect-[0.64]"
                                />
                              </div>
                              <div className="flex-auto text-sm font-semibold leading-5 text-zinc-800">
                                Opera
                              </div>
                            </div>
                            <div className="flex gap-1 justify-between self-stretch px-3 py-4 text-sm font-medium leading-5 whitespace-nowrap text-zinc-800">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab1c645eea9260cfc053ed7b052a1c007b6782d3d88ffc2af7cb79598c9b9abe?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="aspect-[0.67] w-[18px]"
                              />
                              <div className="flex-auto my-auto">12,457</div>
                            </div>
                            <div className="flex flex-col flex-1 justify-center self-stretch my-auto rounded bg-slate-100">
                              <div className="shrink-0 bg-violet-500 h-[5px] rounded-[9999px_0px_0px_9999px]" />
                            </div>
                          </div>
                          <div className="flex gap-3 items-center px-3 border-t border-solid border-t-gray-100 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-2 self-stretch py-0.5 my-auto">
                              <div className="flex justify-center items-center px-1.5 w-7 h-7 rounded-full aspect-square bg-slate-100">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e97521a0791d35f7bd7be3f75524dd2ed970c28b24fa7295b45fd7b0b952c33f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                  className="w-full aspect-[0.64]"
                                />
                              </div>
                              <div className="flex-auto text-sm font-semibold leading-5 text-zinc-800">
                                Edge
                              </div>
                            </div>
                            <div className="flex gap-1 justify-between self-stretch px-3 py-4 text-sm font-medium leading-5 whitespace-nowrap text-zinc-800">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b1a3759ace8d7d929391ac74f3608cca88487d7463da3c0eb701a2ba8121c93?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="aspect-[0.67] w-[18px]"
                              />
                              <div className="flex-auto my-auto">8,570</div>
                            </div>
                            <div className="flex flex-col flex-1 justify-center self-stretch my-auto rounded bg-slate-100">
                              <div className="shrink-0 bg-violet-500 h-[5px] rounded-[9999px_0px_0px_9999px]" />
                            </div>
                          </div>
                          <div className="flex gap-3 items-center px-3 border-t border-solid border-t-gray-100 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-2 self-stretch py-0.5 my-auto">
                              <div className="flex justify-center items-center px-1.5 w-7 h-7 rounded-full aspect-square bg-slate-100">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e8f1270db94f5f8e93eb1bf50d7ebb9abce2fc3e520e5ba241bcdb6bbef3281?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                  className="w-full aspect-[0.64]"
                                />
                              </div>
                              <div className="flex-auto text-sm font-semibold leading-5 text-zinc-800">
                                Firefox
                              </div>
                            </div>
                            <div className="flex gap-1 justify-between self-stretch px-3 py-4 text-sm font-medium leading-5 whitespace-nowrap text-zinc-800">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/db5290c707e1af4c7688f4d2fb6903dd58b657e6d26ff32db9365c12c605b228?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="aspect-[0.67] w-[18px]"
                              />
                              <div className="flex-auto my-auto">6,135</div>
                            </div>
                            <div className="flex flex-col flex-1 justify-center self-stretch pr-16 my-auto rounded bg-slate-100">
                              <div className="w-8 bg-violet-500 h-[5px] rounded-[9999px_0px_0px_9999px]" />
                            </div>
                          </div>
                          <div className="flex gap-3 items-center px-3 border-t border-solid border-t-gray-100 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-2 self-stretch py-0.5 my-auto">
                              <div className="flex justify-center items-center px-1.5 w-7 h-7 rounded-full aspect-square bg-slate-100">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/430cc9473f26e044c9d5e1bf4ccd8cc67f5f0b2a557b2fb60a8b9ec3482ca766?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                  className="w-full aspect-[0.64]"
                                />
                              </div>
                              <div className="flex-auto text-sm font-semibold leading-5 text-zinc-800">
                                Ubuntu
                              </div>
                            </div>
                            <div className="flex gap-1 justify-between self-stretch px-3 py-4 text-sm font-medium leading-5 whitespace-nowrap text-zinc-800">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dffdc76849f550b21ed48d89f7db318dd961a73592be5d58aa656a3ef21bff2?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="aspect-[0.67] w-[18px]"
                              />
                              <div className="flex-auto my-auto">4,789</div>
                            </div>
                            <div className="flex flex-col flex-1 justify-center self-stretch my-auto rounded bg-slate-100">
                              <div className="shrink-0 bg-violet-500 h-[5px] rounded-[9999px_0px_0px_9999px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch pb-6 max-md:mt-6 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                      <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow pb-7 max-md:mt-6">
                          <div className="flex flex-col justify-center text-white bg-violet-500 rounded-lg shadow-sm leading-[150%]">
                            <div className="flex overflow-hidden relative flex-col px-5 pb-5 w-full aspect-[1.42]">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/118c9a8e0175ccd3af25955ef92fef7e960f78c3cdaf1bd380c816c35327612b?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/118c9a8e0175ccd3af25955ef92fef7e960f78c3cdaf1bd380c816c35327612b?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/118c9a8e0175ccd3af25955ef92fef7e960f78c3cdaf1bd380c816c35327612b?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/118c9a8e0175ccd3af25955ef92fef7e960f78c3cdaf1bd380c816c35327612b?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/118c9a8e0175ccd3af25955ef92fef7e960f78c3cdaf1bd380c816c35327612b?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/118c9a8e0175ccd3af25955ef92fef7e960f78c3cdaf1bd380c816c35327612b?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/118c9a8e0175ccd3af25955ef92fef7e960f78c3cdaf1bd380c816c35327612b?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/118c9a8e0175ccd3af25955ef92fef7e960f78c3cdaf1bd380c816c35327612b?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="object-cover absolute inset-0 size-full"
                              />
                              <div className="flex relative gap-5 justify-between text-sm leading-5">
                                <div className="self-end mt-14 max-md:mt-10">
                                  Plan is expiring !
                                </div>
                                <img
                                  loading="lazy"
                                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7ecb3d2a7c297222b442ccc7b509857313c1c3cb7e2c0f4d4f6d8909d0c2442f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ecb3d2a7c297222b442ccc7b509857313c1c3cb7e2c0f4d4f6d8909d0c2442f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ecb3d2a7c297222b442ccc7b509857313c1c3cb7e2c0f4d4f6d8909d0c2442f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ecb3d2a7c297222b442ccc7b509857313c1c3cb7e2c0f4d4f6d8909d0c2442f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ecb3d2a7c297222b442ccc7b509857313c1c3cb7e2c0f4d4f6d8909d0c2442f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ecb3d2a7c297222b442ccc7b509857313c1c3cb7e2c0f4d4f6d8909d0c2442f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ecb3d2a7c297222b442ccc7b509857313c1c3cb7e2c0f4d4f6d8909d0c2442f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ecb3d2a7c297222b442ccc7b509857313c1c3cb7e2c0f4d4f6d8909d0c2442f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                  className="w-20 aspect-[1.16]"
                                />
                              </div>
                              <div className="relative text-base font-semibold">
                                Upgrade to premium
                              </div>
                              <div className="relative justify-center px-2.5 py-1.5 mt-12 text-xs font-medium text-center rounded bg-slate-100 text-zinc-800 max-md:mt-10">
                                Upgrade Now
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center p-1 mt-6 w-full whitespace-nowrap bg-white rounded-lg shadow-sm">
                            <div className="flex flex-wrap gap-0 justify-between content-center">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad3fe87b43e98447d22a5517da93de4cb860f6f83906ca754ad56170dfcedb9d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="max-w-full aspect-[1.01] w-[100px]"
                              />
                              <div className="flex flex-col flex-1 justify-end pl-2 my-auto">
                                <div className="text-sm leading-5 text-neutral-400">
                                  Impressions
                                </div>
                                <div className="mt-1.5 text-xl font-semibold leading-8 text-zinc-800">
                                  9,903
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center p-1 mt-6 w-full whitespace-nowrap bg-white rounded-lg shadow-sm">
                            <div className="flex flex-wrap gap-0 justify-between content-center">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/70eb6784e81727c94b956865066149cb4370b2e4f5de90b49a2854d0d21ea1e5?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="max-w-full aspect-[1.01] w-[100px]"
                              />
                              <div className="flex flex-col flex-1 justify-end pl-2.5 my-auto">
                                <div className="text-sm leading-5 text-neutral-400">
                                  Clicks
                                </div>
                                <div className="mt-1.5 text-xl font-semibold leading-8 text-zinc-800">
                                  16,789
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch mx-auto w-full bg-white rounded-lg shadow-sm leading-[150%] max-md:mt-6">
                          <div className="flex flex-wrap gap-0 justify-between content-center px-5 py-4 rounded border-b border-solid border-b-zinc-100">
                            <div className="grow justify-center my-auto text-base font-bold text-zinc-800">
                              Sessions By Device
                            </div>
                            <div className="justify-center px-3.5 py-2.5 text-sm font-medium text-center text-violet-500 whitespace-nowrap rounded bg-violet-500 bg-opacity-10">
                              View All
                            </div>
                          </div>
                          <div className="flex justify-center items-center px-16 pt-2 pb-3.5 mt-8 text-center whitespace-nowrap text-zinc-800 max-md:px-5">
                            <div className="flex overflow-hidden relative flex-col items-center px-20 py-12 max-w-full aspect-square w-[220px] max-md:px-5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aec274b400e429888501b7f5bc25bf20b5f449d9ce15af7dd5b8a613c48e1088?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="object-cover absolute inset-0 size-full"
                              />
                              <div className="relative mt-10 text-2xl font-bold">
                                Total
                              </div>
                              <div className="relative mt-4 mb-9 text-lg">
                                4136
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center py-px mt-8 text-center whitespace-nowrap rounded-none border-t border-solid border-t-gray-100">
                            <div className="flex gap-0 justify-center">
                              <div className="flex flex-col flex-1 px-6 py-4 max-md:px-5">
                                <div className="text-xs text-neutral-400">
                                  Mobile
                                </div>
                                <div className="text-base font-semibold text-zinc-800">
                                  68.3%
                                </div>
                              </div>
                              <div className="flex flex-col flex-1 px-5 py-4">
                                <div className="text-xs text-neutral-400">
                                  Tablet
                                </div>
                                <div className="text-base font-semibold text-zinc-800">
                                  17.68%
                                </div>
                              </div>
                              <div className="flex flex-col flex-1 px-6 py-4 max-md:px-5">
                                <div className="text-xs text-neutral-400">
                                  Desktop
                                </div>
                                <div className="text-base font-semibold text-zinc-800">
                                  10.5%
                                </div>
                              </div>
                              <div className="flex flex-col flex-1 px-6 py-4 max-md:px-5">
                                <div className="text-xs text-neutral-400">
                                  Others
                                </div>
                                <div className="text-base font-semibold text-zinc-800">
                                  5.16%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pb-9 whitespace-nowrap bg-white rounded-lg shadow-sm leading-[150%] max-md:max-w-full">
                    <div className="flex flex-wrap gap-0 justify-between content-center px-5 py-4 rounded border-b border-solid border-b-zinc-100 max-md:max-w-full">
                      <div className="grow justify-center items-start py-px pr-16 text-base font-bold text-zinc-800 max-md:max-w-full">
                        Sessions Duration By New Users
                      </div>
                      <div className="flex gap-1.5 justify-center px-2 py-px my-auto text-xs text-neutral-400">
                        <div className="grow my-auto">View All</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b898fbb2ba8f70e9d5f3d3e9e8261c4fe00c5c47aaa1ba2ceb6a8f059cc5a3e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                          className="w-3 aspect-[0.67]"
                        />
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f006db6f21fdbdd1e34a84e7d33d26e03050b8da98c6442bd133beba163a3d7a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f006db6f21fdbdd1e34a84e7d33d26e03050b8da98c6442bd133beba163a3d7a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f006db6f21fdbdd1e34a84e7d33d26e03050b8da98c6442bd133beba163a3d7a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f006db6f21fdbdd1e34a84e7d33d26e03050b8da98c6442bd133beba163a3d7a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f006db6f21fdbdd1e34a84e7d33d26e03050b8da98c6442bd133beba163a3d7a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f006db6f21fdbdd1e34a84e7d33d26e03050b8da98c6442bd133beba163a3d7a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f006db6f21fdbdd1e34a84e7d33d26e03050b8da98c6442bd133beba163a3d7a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f006db6f21fdbdd1e34a84e7d33d26e03050b8da98c6442bd133beba163a3d7a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                      className="mx-5 mt-5 max-w-full aspect-[1.49] w-[626px] max-md:mr-2.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center pb-6 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch w-full bg-white rounded-lg shadow-sm max-md:mt-6 max-md:max-w-full">
                  <div className="flex flex-wrap gap-0 justify-between content-center px-5 py-4 whitespace-nowrap rounded border-b border-solid border-b-zinc-100 max-md:max-w-full">
                    <div className="grow justify-center items-start pr-16 my-auto text-base font-bold leading-6 text-zinc-800 max-md:max-w-full">
                      Visitors By Channel Report
                    </div>
                    <div className="flex flex-wrap gap-3 justify-between content-start py-1">
                      <div className="grow justify-center items-start py-2 pr-16 pl-3.5 text-sm bg-white rounded-md border border-violet-100 border-solid text-zinc-800 max-md:pr-5">
                        Search Here
                      </div>
                      <div className="flex gap-1 justify-between px-2.5 py-1.5 text-xs font-medium leading-5 text-white bg-violet-500 rounded">
                        <div className="grow">Sort By</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/51ae43eb98a2ba2f837751386d133eebe339d23dfb86973ffe415577b33e488e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                          className="w-3 aspect-[0.67]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center py-px mx-5 mt-5 rounded-lg border border-gray-100 border-solid max-md:mr-2.5 max-md:max-w-full">
                    <div className="flex gap-0 justify-between pl-3 text-sm font-semibold leading-5 whitespace-nowrap text-zinc-800 max-md:flex-wrap max-md:max-w-full">
                      <div className="grow my-auto">S.No</div>
                      <div className="grow justify-center items-start py-3.5 pr-16 pl-3 border-l border-solid border-l-gray-100 max-md:pr-5">
                        Channel
                      </div>
                      <div className="grow justify-center py-3.5 pr-11 pl-3.5 border-l border-solid border-l-gray-100 max-md:pr-5">
                        Sessions
                      </div>
                      <div className="grow justify-center py-3.5 pr-14 pl-3 border-l border-solid border-l-gray-100 max-md:pr-5">
                        Bounce Rate
                      </div>
                      <div className="grow justify-center items-start py-3.5 pr-16 pl-3.5 border-l border-solid border-l-gray-100 max-md:pr-5">
                        Avg Session Duration
                      </div>
                      <div className="grow justify-center py-3.5 pr-16 pl-3.5 border-l border-solid border-l-gray-100 max-md:pr-5">
                        Goal Completed
                      </div>
                      <div className="grow justify-center items-start py-3.5 pr-16 pl-3 border-l border-solid border-l-gray-100 max-md:pr-5">
                        Pages Per Session
                      </div>
                    </div>
                    <div className="flex gap-0 justify-between items-start pl-3 border-t border-solid border-t-gray-100 max-md:flex-wrap max-md:max-w-full">
                      <div className="grow self-stretch my-auto text-sm font-medium leading-5 text-zinc-800">
                        1
                      </div>
                      <div className="flex flex-col flex-1 justify-center self-stretch p-3.5 border-l border-solid border-l-gray-100">
                        <div className="flex gap-2 justify-between">
                          <div className="flex justify-center items-center px-1.5 w-7 h-7 rounded-full aspect-square bg-violet-500 bg-opacity-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/926b07c6103d77c7c4bdf67e5b8fc994a13c93a746172211c8cdeea6366e4b43?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                              className="w-full aspect-[0.53]"
                            />
                          </div>
                          <div className="flex-auto self-start mt-2 text-sm font-medium leading-5 text-zinc-800">
                            Organic Search
                          </div>
                        </div>
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3.5 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        782
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        32.09%
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3.5 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        0 hrs : 0 mins : 32 secs
                      </div>
                      <div className="flex flex-col flex-1 justify-center items-start self-stretch py-5 pr-16 pl-3.5 text-xs font-semibold leading-3 text-center text-violet-500 whitespace-nowrap border-l border-solid border-l-gray-100 max-md:pr-5">
                        <div className="justify-center px-2 py-1 rounded aspect-[1.83] bg-violet-500 bg-opacity-10">
                          278
                        </div>
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        2.9
                      </div>
                    </div>
                    <div className="flex gap-0 justify-between items-start pl-3 border-t border-solid border-t-gray-100 max-md:flex-wrap max-md:max-w-full">
                      <div className="grow self-stretch my-auto text-sm font-medium leading-5 text-zinc-800">
                        2
                      </div>
                      <div className="flex flex-col flex-1 justify-center self-stretch p-3.5 border-l border-solid border-l-gray-100">
                        <div className="flex gap-2 justify-between">
                          <div className="flex justify-center items-center px-1.5 w-7 h-7 rounded-full aspect-square bg-sky-500 bg-opacity-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1a9444dc8e5b97fda35fe19bd7f27309d6cb4a6ac565a9b60d98820f47c0e4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                              className="w-full aspect-[0.53]"
                            />
                          </div>
                          <div className="flex-auto self-start mt-2 text-sm font-medium leading-5 text-zinc-800">
                            Direct
                          </div>
                        </div>
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3.5 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        882
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        39.38%
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3.5 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        0 hrs : 2 mins : 45 secs
                      </div>
                      <div className="flex flex-col flex-1 justify-center items-start self-stretch py-5 pr-16 pl-3.5 text-xs font-semibold leading-3 text-center text-sky-500 whitespace-nowrap border-l border-solid border-l-gray-100 max-md:pr-5">
                        <div className="justify-center px-2 py-1 rounded aspect-[1.83] bg-sky-500 bg-opacity-10">
                          782
                        </div>
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        1.5
                      </div>
                    </div>
                    <div className="flex gap-0 justify-between items-start pl-3 border-t border-solid border-t-gray-100 max-md:flex-wrap max-md:max-w-full">
                      <div className="grow self-stretch my-auto text-sm font-medium leading-5 text-zinc-800">
                        3
                      </div>
                      <div className="flex flex-col flex-1 justify-center self-stretch p-3.5 border-l border-solid border-l-gray-100">
                        <div className="flex gap-2 justify-between">
                          <div className="flex justify-center items-center px-1.5 w-7 h-7 rounded-full aspect-square bg-emerald-400 bg-opacity-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3ae3f09f52a60b33369e779f5dc867c39d346c8085eaf26da7eec9c8f751c7b?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                              className="w-full aspect-[0.53]"
                            />
                          </div>
                          <div className="flex-auto self-start mt-2 text-sm font-medium leading-5 text-zinc-800">
                            Referral
                          </div>
                        </div>
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3.5 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        322
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        22.67%
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3.5 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        0 hrs : 38 mins : 28 secs
                      </div>
                      <div className="flex flex-col flex-1 justify-center items-start self-stretch py-5 pr-16 pl-3.5 text-xs font-semibold leading-3 text-center text-emerald-400 whitespace-nowrap border-l border-solid border-l-gray-100 max-md:pr-5">
                        <div className="justify-center px-2 py-1 rounded aspect-[1.83] bg-emerald-400 bg-opacity-10">
                          622
                        </div>
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        3.2
                      </div>
                    </div>
                    <div className="flex gap-0 justify-between items-start pl-3 border-t border-solid border-t-gray-100 max-md:flex-wrap max-md:max-w-full">
                      <div className="grow self-stretch my-auto text-sm font-medium leading-5 text-zinc-800">
                        4
                      </div>
                      <div className="flex flex-col flex-1 justify-center self-stretch p-3.5 border-l border-solid border-l-gray-100">
                        <div className="flex gap-2 justify-between">
                          <div className="flex justify-center items-center px-1.5 w-7 h-7 rounded-full aspect-square bg-sky-400 bg-opacity-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9d1d19f9c7212181cb8eb0bed31151271449b1cb3687c7c88caaae78dcea186?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                              className="w-full aspect-[0.53]"
                            />
                          </div>
                          <div className="flex-auto self-start mt-2 text-sm font-medium leading-5 text-zinc-800">
                            Social
                          </div>
                        </div>
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3.5 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        389
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        25.11%
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3.5 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        0 hrs : 12 mins : 89 secs
                      </div>
                      <div className="flex flex-col flex-1 justify-center items-start self-stretch py-5 pr-16 pl-3.5 text-xs font-semibold leading-3 text-center text-sky-400 whitespace-nowrap border-l border-solid border-l-gray-100 max-md:pr-5">
                        <div className="justify-center px-2 py-1 rounded aspect-[1.78] bg-sky-400 bg-opacity-10">
                          142
                        </div>
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        1.4
                      </div>
                    </div>
                    <div className="flex gap-0 justify-between items-start pl-3 border-t border-solid border-t-gray-100 max-md:flex-wrap max-md:max-w-full">
                      <div className="grow self-stretch my-auto text-sm font-medium leading-5 text-zinc-800">
                        5
                      </div>
                      <div className="flex flex-col flex-1 justify-center self-stretch p-3.5 border-l border-solid border-l-gray-100">
                        <div className="flex gap-2 justify-between">
                          <div className="flex justify-center items-center px-1.5 w-7 h-7 rounded-full aspect-square bg-amber-300 bg-opacity-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e33b079c58af27720ed66637b0e0cb27a9302410252edad6c701ea8cf34cf9c?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                              className="w-full aspect-[0.53]"
                            />
                          </div>
                          <div className="flex-auto self-start mt-2 text-sm font-medium leading-5 text-zinc-800">
                            Email
                          </div>
                        </div>
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3.5 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        378
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        23.79%
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3.5 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        0 hrs : 14 mins : 27 secs
                      </div>
                      <div className="flex flex-col flex-1 justify-center items-start self-stretch py-5 pr-16 pl-3.5 text-xs font-semibold leading-3 text-center text-amber-300 whitespace-nowrap border-l border-solid border-l-gray-100 max-md:pr-5">
                        <div className="justify-center px-2 py-1 rounded aspect-[1.72] bg-amber-300 bg-opacity-10">
                          178
                        </div>
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        1.6
                      </div>
                    </div>
                    <div className="flex gap-0 justify-between items-start pl-3 border-t border-solid border-t-gray-100 max-md:flex-wrap max-md:max-w-full">
                      <div className="grow self-stretch my-auto text-sm font-medium leading-5 text-zinc-800">
                        6
                      </div>
                      <div className="flex flex-col flex-1 justify-center self-stretch p-3.5 border-l border-solid border-l-gray-100">
                        <div className="flex gap-2 justify-between">
                          <div className="flex justify-center items-center px-1.5 w-7 h-7 rounded-full aspect-square bg-red-500 bg-opacity-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/35b09bc348efe2a5add75c4ab210dee6649fc34f9a26bec311c49db2b523684f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                              className="w-full aspect-[0.53]"
                            />
                          </div>
                          <div className="flex-auto self-start mt-2 text-sm font-medium leading-5 text-zinc-800">
                            Paid Search
                          </div>
                        </div>
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3.5 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        488
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        28.77%
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3.5 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        0 hrs : 16 mins : 28 secs
                      </div>
                      <div className="flex flex-col flex-1 justify-center items-start self-stretch py-5 pr-16 pl-3.5 text-xs font-semibold leading-3 text-center text-red-500 whitespace-nowrap border-l border-solid border-l-gray-100 max-md:pr-5">
                        <div className="justify-center px-2 py-1 rounded aspect-[1.83] bg-red-500 bg-opacity-10">
                          578
                        </div>
                      </div>
                      <div className="grow justify-center items-start py-4 pr-16 pl-3 text-sm font-medium leading-5 whitespace-nowrap border-l border-solid border-l-gray-100 text-zinc-800 max-md:pr-5">
                        2.5
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center px-5 py-4 mt-5 whitespace-nowrap rounded-none border-t border-solid border-t-gray-100 text-zinc-800 max-md:max-w-full">
                    <div className="flex gap-0 justify-between max-md:flex-wrap max-md:max-w-full">
                      <div className="flex gap-2 py-px my-auto text-sm leading-5">
                        <div className="grow">Showing 5 Entries </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c12fcc071d39683af5219047cc8834956ed774a9a6b12138fb525f81623c45b?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                          className="my-auto aspect-[0.93] w-[13px]"
                        />
                      </div>
                      <div className="flex flex-col flex-1 justify-center items-end pl-16 text-base leading-4 max-md:max-w-full">
                        <div className="flex gap-0 px-3 py-px">
                          <div className="justify-center px-3 py-2 bg-white rounded-lg aspect-[1.93]">
                            Prev
                          </div>
                          <div className="justify-center px-3 py-2 text-white bg-violet-500 rounded-lg aspect-[1.07]">
                            1
                          </div>
                          <div className="justify-center px-3 py-2 bg-white rounded-lg aspect-[1.13]">
                            2
                          </div>
                          <div className="justify-center px-3 py-2 text-violet-500 bg-white rounded-lg aspect-[1.9]">
                            next
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-start self-stretch pb-5 mx-auto w-full bg-white rounded-lg shadow-sm max-md:mt-6">
                  <div className="flex flex-wrap gap-0 justify-between content-center self-stretch px-5 py-4 rounded border-b border-solid border-b-zinc-100 leading-[150%]">
                    <div className="grow justify-center text-base font-bold text-zinc-800">
                      Visitors By Countries
                    </div>
                    <div className="flex gap-1.5 justify-center px-2 my-auto text-xs whitespace-nowrap text-neutral-400">
                      <div className="grow my-auto">View All</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/47db543be1673e307183624a4567463553b1f38c81c9f0b4219b00cc52b82d35?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                        className="w-3 aspect-[0.67]"
                      />
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between py-px mt-5 ml-5 w-full text-zinc-800 max-md:ml-2.5">
                    <div className="flex gap-4 justify-between text-xs leading-3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/419cde080bc6590a59029a6c88d8ffe51134fc3d867ab20ca5487e0c7f532f36?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/419cde080bc6590a59029a6c88d8ffe51134fc3d867ab20ca5487e0c7f532f36?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/419cde080bc6590a59029a6c88d8ffe51134fc3d867ab20ca5487e0c7f532f36?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/419cde080bc6590a59029a6c88d8ffe51134fc3d867ab20ca5487e0c7f532f36?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/419cde080bc6590a59029a6c88d8ffe51134fc3d867ab20ca5487e0c7f532f36?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/419cde080bc6590a59029a6c88d8ffe51134fc3d867ab20ca5487e0c7f532f36?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/419cde080bc6590a59029a6c88d8ffe51134fc3d867ab20ca5487e0c7f532f36?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/419cde080bc6590a59029a6c88d8ffe51134fc3d867ab20ca5487e0c7f532f36?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                        className="w-7 aspect-square"
                      />
                      <div className="self-start mt-3">United States</div>
                    </div>
                    <div className="justify-center self-start py-1 pl-2 mt-2.5 text-xs font-semibold leading-3 text-center whitespace-nowrap rounded aspect-[1.5] bg-slate-100">
                      32,190
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between py-px mt-6 ml-5 w-full whitespace-nowrap text-zinc-800 max-md:ml-2.5">
                    <div className="flex gap-4 justify-between text-xs leading-3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/805f7fc72c5e57e1b2d63e73b2176db02692421f7dd4bec9f3b130abd26f7083?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/805f7fc72c5e57e1b2d63e73b2176db02692421f7dd4bec9f3b130abd26f7083?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/805f7fc72c5e57e1b2d63e73b2176db02692421f7dd4bec9f3b130abd26f7083?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/805f7fc72c5e57e1b2d63e73b2176db02692421f7dd4bec9f3b130abd26f7083?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/805f7fc72c5e57e1b2d63e73b2176db02692421f7dd4bec9f3b130abd26f7083?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/805f7fc72c5e57e1b2d63e73b2176db02692421f7dd4bec9f3b130abd26f7083?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/805f7fc72c5e57e1b2d63e73b2176db02692421f7dd4bec9f3b130abd26f7083?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/805f7fc72c5e57e1b2d63e73b2176db02692421f7dd4bec9f3b130abd26f7083?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                        className="w-7 aspect-square"
                      />
                      <div className="self-start mt-3">Germany</div>
                    </div>
                    <div className="justify-center self-start py-1 pl-2 mt-2.5 text-xs font-semibold leading-3 text-center rounded aspect-[1.22] bg-slate-100">
                      8,798
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between py-px mt-6 ml-5 w-full whitespace-nowrap text-zinc-800 max-md:ml-2.5">
                    <div className="flex gap-4 justify-between text-xs leading-3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/740704c89134057d7df94b57613e7db77bef4b9bf955523c60b89b5cd470b5b7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/740704c89134057d7df94b57613e7db77bef4b9bf955523c60b89b5cd470b5b7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/740704c89134057d7df94b57613e7db77bef4b9bf955523c60b89b5cd470b5b7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/740704c89134057d7df94b57613e7db77bef4b9bf955523c60b89b5cd470b5b7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/740704c89134057d7df94b57613e7db77bef4b9bf955523c60b89b5cd470b5b7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/740704c89134057d7df94b57613e7db77bef4b9bf955523c60b89b5cd470b5b7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/740704c89134057d7df94b57613e7db77bef4b9bf955523c60b89b5cd470b5b7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/740704c89134057d7df94b57613e7db77bef4b9bf955523c60b89b5cd470b5b7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                        className="w-7 aspect-square"
                      />
                      <div className="self-start mt-3">Mexico</div>
                    </div>
                    <div className="justify-center self-start py-1 pl-2 mt-2.5 text-xs font-semibold leading-3 text-center rounded aspect-[1.5] bg-slate-100">
                      16,885
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between py-px mt-6 ml-5 w-full whitespace-nowrap text-zinc-800 max-md:ml-2.5">
                    <div className="flex gap-4 justify-between text-xs leading-3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/73769f38621c4fb46cb9f7d849ef13ea58cab17485dc7cf9f5f642123dcd72da?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/73769f38621c4fb46cb9f7d849ef13ea58cab17485dc7cf9f5f642123dcd72da?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73769f38621c4fb46cb9f7d849ef13ea58cab17485dc7cf9f5f642123dcd72da?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/73769f38621c4fb46cb9f7d849ef13ea58cab17485dc7cf9f5f642123dcd72da?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/73769f38621c4fb46cb9f7d849ef13ea58cab17485dc7cf9f5f642123dcd72da?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73769f38621c4fb46cb9f7d849ef13ea58cab17485dc7cf9f5f642123dcd72da?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/73769f38621c4fb46cb9f7d849ef13ea58cab17485dc7cf9f5f642123dcd72da?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/73769f38621c4fb46cb9f7d849ef13ea58cab17485dc7cf9f5f642123dcd72da?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                        className="w-7 aspect-square"
                      />
                      <div className="self-start mt-3">Uae</div>
                    </div>
                    <div className="justify-center self-start py-1 pl-2 mt-2.5 text-xs font-semibold leading-3 text-center rounded aspect-[1.5] bg-slate-100">
                      14,885
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between py-px mt-6 ml-5 w-full whitespace-nowrap text-zinc-800 max-md:ml-2.5">
                    <div className="flex gap-4 justify-between text-xs leading-3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a814be84242022c5abb9bf749a5394a3adbb7cef00efef96d03282ebe8e300f8?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a814be84242022c5abb9bf749a5394a3adbb7cef00efef96d03282ebe8e300f8?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a814be84242022c5abb9bf749a5394a3adbb7cef00efef96d03282ebe8e300f8?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a814be84242022c5abb9bf749a5394a3adbb7cef00efef96d03282ebe8e300f8?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a814be84242022c5abb9bf749a5394a3adbb7cef00efef96d03282ebe8e300f8?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a814be84242022c5abb9bf749a5394a3adbb7cef00efef96d03282ebe8e300f8?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a814be84242022c5abb9bf749a5394a3adbb7cef00efef96d03282ebe8e300f8?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a814be84242022c5abb9bf749a5394a3adbb7cef00efef96d03282ebe8e300f8?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                        className="w-7 aspect-square"
                      />
                      <div className="self-start mt-3">Argentina</div>
                    </div>
                    <div className="justify-center self-start py-1 pl-2 mt-2.5 text-xs font-semibold leading-3 text-center rounded aspect-[1.39] bg-slate-100">
                      17,578
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between py-px mt-6 ml-5 w-full whitespace-nowrap text-zinc-800 max-md:ml-2.5">
                    <div className="flex gap-4 justify-between text-xs leading-3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/da025aaf800561a6639881fb8e77111243ddcd96b562668184dd0729d15b6c31?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/da025aaf800561a6639881fb8e77111243ddcd96b562668184dd0729d15b6c31?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da025aaf800561a6639881fb8e77111243ddcd96b562668184dd0729d15b6c31?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/da025aaf800561a6639881fb8e77111243ddcd96b562668184dd0729d15b6c31?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/da025aaf800561a6639881fb8e77111243ddcd96b562668184dd0729d15b6c31?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da025aaf800561a6639881fb8e77111243ddcd96b562668184dd0729d15b6c31?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/da025aaf800561a6639881fb8e77111243ddcd96b562668184dd0729d15b6c31?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/da025aaf800561a6639881fb8e77111243ddcd96b562668184dd0729d15b6c31?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                        className="w-7 aspect-square"
                      />
                      <div className="self-start mt-3">Russia</div>
                    </div>
                    <div className="justify-center self-start py-1 pl-2 mt-2.5 text-xs font-semibold leading-3 text-center rounded aspect-[1.28] bg-slate-100">
                      10,118
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between py-px mt-6 ml-5 w-full whitespace-nowrap text-zinc-800 max-md:ml-2.5">
                    <div className="flex gap-4 justify-between text-xs leading-3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4442c4c9f7e101082413a9105c86ca9cd76127bd246bb6eab15233fa165d9cb7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4442c4c9f7e101082413a9105c86ca9cd76127bd246bb6eab15233fa165d9cb7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4442c4c9f7e101082413a9105c86ca9cd76127bd246bb6eab15233fa165d9cb7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4442c4c9f7e101082413a9105c86ca9cd76127bd246bb6eab15233fa165d9cb7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4442c4c9f7e101082413a9105c86ca9cd76127bd246bb6eab15233fa165d9cb7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4442c4c9f7e101082413a9105c86ca9cd76127bd246bb6eab15233fa165d9cb7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4442c4c9f7e101082413a9105c86ca9cd76127bd246bb6eab15233fa165d9cb7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4442c4c9f7e101082413a9105c86ca9cd76127bd246bb6eab15233fa165d9cb7?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                        className="w-7 aspect-square"
                      />
                      <div className="self-start mt-3">China</div>
                    </div>
                    <div className="justify-center self-start py-1 pl-2 mt-2.5 text-xs font-semibold leading-3 text-center rounded aspect-[1.17] bg-slate-100">
                      6,578
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between py-px mt-6 ml-5 w-full whitespace-nowrap text-zinc-800 max-md:ml-2.5">
                    <div className="flex gap-4 justify-between text-xs leading-3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/36cf508df9fc0d6d41dc0a4fce25293e61de42517e82573d5eff217a49ebdaf0?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/36cf508df9fc0d6d41dc0a4fce25293e61de42517e82573d5eff217a49ebdaf0?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36cf508df9fc0d6d41dc0a4fce25293e61de42517e82573d5eff217a49ebdaf0?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/36cf508df9fc0d6d41dc0a4fce25293e61de42517e82573d5eff217a49ebdaf0?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/36cf508df9fc0d6d41dc0a4fce25293e61de42517e82573d5eff217a49ebdaf0?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36cf508df9fc0d6d41dc0a4fce25293e61de42517e82573d5eff217a49ebdaf0?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/36cf508df9fc0d6d41dc0a4fce25293e61de42517e82573d5eff217a49ebdaf0?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/36cf508df9fc0d6d41dc0a4fce25293e61de42517e82573d5eff217a49ebdaf0?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                        className="w-7 aspect-square"
                      />
                      <div className="self-start mt-3">France</div>
                    </div>
                    <div className="justify-center self-start py-1 pl-2 mt-2.5 text-xs font-semibold leading-3 text-center rounded aspect-[1.22] bg-slate-100">
                      2,345
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between py-px mt-6 ml-5 w-full whitespace-nowrap text-zinc-800 max-md:ml-2.5">
                    <div className="flex gap-4 justify-between text-xs leading-3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9ecc7baeb6047faf882ff02e766fef687a041db272c20b40ccb1c05be272320a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ecc7baeb6047faf882ff02e766fef687a041db272c20b40ccb1c05be272320a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ecc7baeb6047faf882ff02e766fef687a041db272c20b40ccb1c05be272320a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ecc7baeb6047faf882ff02e766fef687a041db272c20b40ccb1c05be272320a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ecc7baeb6047faf882ff02e766fef687a041db272c20b40ccb1c05be272320a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ecc7baeb6047faf882ff02e766fef687a041db272c20b40ccb1c05be272320a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ecc7baeb6047faf882ff02e766fef687a041db272c20b40ccb1c05be272320a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ecc7baeb6047faf882ff02e766fef687a041db272c20b40ccb1c05be272320a?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                        className="w-7 aspect-square"
                      />
                      <div className="self-start mt-3">Canada</div>
                    </div>
                    <div className="justify-center self-start py-1 pl-2 mt-2.5 text-xs font-semibold leading-3 text-center rounded aspect-[1.11] bg-slate-100">
                      1,678
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
