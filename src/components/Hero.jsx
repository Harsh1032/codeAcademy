import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { goals, services } from "../utils/data";

const Hero = () => {

  return (
    <div className="lg:py-5 min-h-screen">
      <MaxWidthWrapper className="flex flex-col items-center h-full">
        <div className="flex lg:flex-row flex-col items-center justify-between max-lg:gap-y-5 w-full my-5">
          <div className="flex flex-col gap-y-5 lg:w-[47%] w-[90%]">
            <h1 className="lg:text-4xl text-xl text-[#3C4852] uppercase font-bold text-center lg:text-justify">
              Bridging Inidan talent with japenese opportunities
            </h1>
            <div className="flex flex-col gap-y-2 my-4">
              <input
                className="w-full h-12 flex items-center justify-center rounded-lg bg-transparent border border-[#3C4852] px-5"
                placeholder="Enter your mobile number"
              />
              <span className="text-lg font-normal text-[#7A8B94]">
                We'll send an OTP for verification
              </span>
            </div>
            <button className="w-full h-12 flex items-center justify-center rounded-lg bg-[#3C4852]">
              <span className="text-white text-sm lg:text-base font-medium">
                Join for free
              </span>
            </button>
          </div>
          <img
            src="/Website Cover Letter.png"
            className="lg:w-[47%] lg:h-[80%] w-[90%]"
          />
        </div>
        <div className="flex flex-col lg:w-full w-[90%] my-5 gap-y-2">
          <h2 className="text-3xl text-[#3C4852] font-bold text-justify">
            Select your goal / exam
          </h2>
          <span className="text-lg text-[#3C4852] font-bold text-justify">
            4 ways to crack your dream job
          </span>
          <div className="w-full justify-between flex lg:flex-row flex-col max-lg:gap-y-5 my-3">
            {goals?.map((goal, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition lg:w-[266px] lg:h-[280px] w-full h-[250px]"
              >
                {goal.image && (
                  <img
                    src={goal.image}
                    alt={goal.title}
                    className="w-24 h-24 mb-4 object-contain"
                  />
                )}
                <span className="text-center text-[#3C4852] text-2xl font-semibold">
                  {goal.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:w-full w-[90%] my-5 gap-y-2">
          <div className="w-full justify-between flex lg:flex-row flex-col max-lg:gap-y-5 my-3">
            {services?.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-y-5 lg:w-[30%] w-full items-center text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[300px] h-[300px] object-contain mx-auto"
                />
                <h3 className="text-2xl text-[#3C4852] font-semibold">
                  {item.title}
                </h3>
                <span className="text-lg text-[#3C4852] font-normal text-justify px-2">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
