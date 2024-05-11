import * as React from "react";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center px-16 py-20 w-full text-center bg-indigo-50 max-md:px-5 max-md:py-10">
        <div className="flex flex-col px-4 py-px max-md:px-5 max-md:max-w-full">
          <div className="self-center text-5xl font-bold tracking-normal leading-[57.6px] text-slate-700 max-md:text-4xl mt-20">
            About Us
          </div>
          <div className="mt-3.5 text-lg font-medium leading-7 text-gray-500">
            A company turning ideas into beautiful things.
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-20 pb-20 w-full bg-white max-md:px-5 mt-8">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/acf8f78b8182fd4ad0ce4ee657389f2660613c1dd4985fda35d817b4d85eca63?apiKey=db99173e039840438568dfd5fef6299e&"
          className="max-w-full w-full sm:w-[800px] object-cover object-center aspect-video"
          alt="About Us"
        />
        <div className="flex-wrap justify-center content-center pt-7 mt-16 max-w-full w-[1320px] max-md:mt-10">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col w-full md:w-6/12">
              <div className="flex flex-col grow self-stretch pr-9 pb-5 pl-4 max-w-[1360px] max-md:pr-5 max-md:mt-10">
                <div className="text-3xl font-bold tracking-normal leading-10 text-slate-700">
                  The full service we are offering is <br /> specifically
                  designed to meet your <br /> business needs and projects.
                </div>
                <div className="mt-6 text-base font-medium leading-7 text-gray-500">
                  Integer posuere erat a ante venenatis dapibus posuere velit
                  aliquet. Morbi leo <br /> risus, porta ac consectetur ac,
                  vestibulum at eros. Praesent commodo cursus <br /> magna, vel
                  scelerisque nisl consectetur duis mollis commodo.
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-6/12 md:ml-5">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                <div className="text-base font-medium leading-7 text-gray-500">
                  Marketing
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center items-center self-center mt-1.5 border-solid border-[15px] border-neutral-800 border-opacity-10 min-h-[6px] stroke-[14.819px] stroke-neutral-800 stroke-opacity-10 w-full max-w-[610px]">
                  <div className="bg-blue-500 h-full w-full"></div>
                </div>
                <div className="mt-5 text-base font-medium leading-7 text-gray-500">
                  Strategy
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center items-center self-center mt-1.5 border-solid border-[15px] border-neutral-800 border-opacity-10 min-h-[6px] stroke-[14.819px] stroke-neutral-800 stroke-opacity-10 w-full max-w-[610px]">
                  <div className="bg-orange-500 h-full w-full"></div>
                </div>
                <div className="mt-5 text-base font-medium leading-7 text-gray-500">
                  Development
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center items-center self-center mt-1.5 border-solid border-[15px] border-neutral-800 border-opacity-10 min-h-[6px] stroke-[14.819px] stroke-neutral-800 stroke-opacity-10 w-full max-w-[610px]">
                  <div className="bg-red-500 h-full w-full"></div>
                </div>
                <div className="mt-5 text-base font-medium leading-7 text-gray-500">
                  Data Analysis
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center items-center self-center mt-1.5 border-solid border-[15px] border-neutral-800 border-opacity-10 min-h-[6px] stroke-[14.819px] stroke-neutral-800 stroke-opacity-10 w-full max-w-[610px]">
                  <div className="bg-green-500 h-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-wrap justify-center mt-12 mb-4 w-full max-w-[1320px] max-md:mt-10">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col w-full md:w-3/12">
              <div className="flex flex-col grow items-center self-stretch px-7 pb-2.5 text-center max-w-[1360px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9140551618de417a114a479e9978de30195f16fa05f391af916afe770d541e2?apiKey=db99173e039840438568dfd5fef6299e&"
                  className="aspect-square w-[52px]"
                  alt="Marketing Icon"
                />
                <div className="mt-3.5 text-xl font-bold tracking-normal leading-7 text-slate-700">
                  Marketing
                </div>
                <div className="self-stretch mt-2.5 text-base font-medium leading-7 text-gray-500">
                  Nulla vitae elit libero, a pharetra <br /> augue. Donec id
                  elit non mi porta <br /> gravida at eget metus. Cras justo{" "}
                  <br /> cum sociis natoque magnis.
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-3/12 md:ml-5">
              <div className="flex flex-col grow items-center self-stretch px-12 pb-2.5 text-center max-w-[1360px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e054672e70b79808b8303499a6ab04f2683656aad4097114dfec6c5143ded25f?apiKey=db99173e039840438568dfd5fef6299e&"
                  className="aspect-square w-[52px]"
                  alt="Strategy Icon"
                />
                <div className="mt-3.5 text-xl font-bold tracking-normal leading-7 text-slate-700">
                  Strategy
                </div>
                <div className="self-stretch mt-2.5 text-base font-medium leading-7 text-gray-500">
                  Nulla vitae elit libero, a pharetra <br /> augue. Donec id
                  elit non mi porta <br /> gravida at eget metus. Cras justo{" "}
                  <br /> cum sociis natoque magnis.
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-3/12 md:ml-5">
              <div className="flex flex-col grow items-center self-stretch px-12 pb-2.5 text-center max-w-[1360px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e998f2269e20e835eacdf6a39083811023ddade95770bc24219155cdcb0b8f14?apiKey=db99173e039840438568dfd5fef6299e&"
                  className="aspect-square w-[52px]"
                  alt="Development Icon"
                />
                <div className="mt-3.5 text-xl font-bold tracking-normal leading-7 text-slate-700">
                  Development
                </div>
                <div className="self-stretch mt-2.5 text-base font-medium leading-7 text-gray-500">
                  Nulla vitae elit libero, a pharetra <br /> augue. Donec id
                  elit non mi porta <br /> gravida at eget metus. Cras justo{" "}
                  <br /> cum sociis natoque magnis.
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-3/12 md:ml-5">
              <div className="flex flex-col grow items-center self-stretch px-12 pb-2.5 text-center max-w-[1360px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6ec4f24e1c909579995681ff0f2d95d3739b974ffe4597974216b7fd5a05259?apiKey=db99173e039840438568dfd5fef6299e&"
                  className="aspect-square w-[52px]"
                  alt="Data Analysis Icon"
                />
                <div className="mt-3.5 text-xl font-bold tracking-normal leading-7 text-slate-700">
                  Data Analysis
                </div>
                <div className="self-stretch mt-2.5 text-base font-medium leading-7 text-gray-500">
                  Nulla vitae elit libero, a pharetra <br /> augue. Donec id
                  elit non mi porta <br /> gravida at eget metus. Cras justo{" "}
                  <br /> cum sociis natoque magnis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-20 w-full bg-neutral-100 max-md:px-5">
        <div className="flex-wrap justify-center content-center pt-16 pl-4 mt-2.5 w-full max-w-[1320px]">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col w-full md:w-[41%]">
              <div className="flex flex-col self-stretch pb-5 my-auto font-medium text-center text-gray-500 max-md:mt-10">
                <div className="flex flex-col items-center px-3.5 pt-20">
                  <div className="self-stretch text-xl leading-9">
                    Vivamus sagittis lacus vel augue laoreet rutrum <br />{" "}
                    faucibus dolor auctor. Vestibulum ligula porta felis <br />{" "}
                    euismod semper. Cras justo odio consectetur.
                  </div>
                  <div className="mt-5 text-xl font-bold tracking-normal leading-7 text-slate-700">
                    Coriss Ambady
                  </div>
                  <div className="mt-1.5 text-base leading-7">
                    Financial Analyst
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-[59%] md:ml-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3b16a48b0c41f3d44a9b6ac76826d6115ace828e7a94e06630961dbd09a7e28?apiKey=db99173e039840438568dfd5fef6299e&"
                className="grow w-full aspect-video object-cover object-center max-w-[723px] max-md:mt-10"
                alt="Testimonial"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-center content-center items-start pt-10 pl-14 mt-16 mb-4 w-full max-w-[1320px] max-md:px-5 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9625a08e05b4f0d6c0305b9e8ab334004c9cac10f262f22483ae262237faee49?apiKey=db99173e039840438568dfd5fef6299e&"
            className="shrink-0 max-w-full aspect-[3.45] w-[110px]"
            alt="Client Logo 1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dbcf1df08e9a6f1cbac294e339e6fb528c0145f0aeddfa444c4022f6173116d?apiKey=db99173e039840438568dfd5fef6299e&"
            className="shrink-0 max-w-full aspect-[2.86] w-[110px]"
            alt="Client Logo 2"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe67385027a639fcf04df3d52b0b9add6c0f134b17c58bbea5621c6ad5adfa1d?apiKey=db99173e039840438568dfd5fef6299e&"
            className="shrink-0 mt-1 max-w-full aspect-[3.7] w-[110px]"
            alt="Client Logo 3"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11227d28bfb1846fa06a15469344f9d7298231de9fa59c472a57ea5c486a25e8?apiKey=db99173e039840438568dfd5fef6299e&"
            className="shrink-0 mt-1.5 max-w-full aspect-[3.85] w-[110px]"
            alt="Client Logo 4"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7b89701966f902bbf3f112072f632fece7ec8e0d29edd6427bfd6f4dd3ff47e?apiKey=db99173e039840438568dfd5fef6299e&"
            className="shrink-0 max-w-full aspect-[3.13] w-[110px]"
            alt="Client Logo 5"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/332d098a0516d25af34b57e2fc1c6c05d4486245fa1a10af7230907dae092b81?apiKey=db99173e039840438568dfd5fef6299e&"
            className="shrink-0 mt-2 max-w-full aspect-[4.35] w-[110px]"
            alt="Client Logo 6"
          />
        </div>
      </div>
    </div>
  );
}
