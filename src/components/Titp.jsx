import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Titp = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <div className="relative">
        <img
          src="/titp2.png"
          alt="Interns"
          className="w-full max-h-full h-auto object-cover"
        />
        <span className="absolute top-5 left-2 lg:left-10 text-white text-3xl">
          Technical Intern
          <br />
          Training Program
        </span>

        <button className="absolute top-5 right-2 lg:right-5 bg-gray-800 text-white text-base px-4 py-2 rounded-md">
          Apply Now
        </button>
      </div>

      {/* What is TITP */}
      <div className="bg-gray-100 p-5 flex lg:flex-row flex-col justify-between">
        <MaxWidthWrapper className="flex lg:flex-row flex-col max-lg:gap-y-4 max-lg:items-center justify-between">
          <div className="flex flex-col gap-y-2 lg:w-[60%] w-full">
            <h3 className="text-3xl font-semibold">What is TITP?</h3>
            <p className="text-xl text-black mt-1">
              Technical Intern promotes international Japan through skills
              transfer to young workers, thereby helping developing countries
              improve industry.
            </p>
          </div>
          <img src="/titp3.png" className="lg:w-[30%] w-full" />
        </MaxWidthWrapper>
      </div>

      {/* Main Info Grid */}
      <div className="p-4 text-black w-full">
        <MaxWidthWrapper className="flex flex-col gap-y-4 text-lg text-black w-full">
          {/* Benefits */}
          <div className="flex lg:flex-row flex-col gap-y-4 justify-between w-full">
            <div className="lg:w-[48%] w-full bg-white rounded-md border-l-4 border-l-blue-500 p-5 shadow-sm border-y border-r">
              <h4 className="font-semibold mb-2">Benefits</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Opportunity to acquire industrial and vocational skills</li>
                <li>Enhance career opportunities in Japan & India</li>
                <li>On-the-job training in Japanese companies</li>
              </ul>
            </div>

            {/* Eligibility */}
            <div className="lg:w-[48%] w-full bg-white rounded-md border-l-4 border-l-blue-500 p-5 shadow-sm border-y border-r">
              <h4 className="font-semibold mb-2">Eligibility</h4>
              <p>18 years and above</p>
            </div>
          </div>

          {/* Steps to Apply */}
          <div className="flex lg:flex-row flex-col gap-y-4 justify-between w-full">
            <div className="lg:w-[48%] w-full bg-white rounded-md border-l-4 border-l-blue-500 p-5 shadow-sm border-y border-r">
              <h4 className="font-semibold mb-2">Steps to Apply</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Select a Sending Organization</li>
                <li>Register for Skill Training</li>
                <li>Receive Pre-Departure Training</li>
                <li>Immigration Procedures & Departure</li>
              </ol>
            </div>

            {/* Japanese Language Requirement */}
            <div className="lg:w-[48%] w-full bg-white rounded-md border-l-4 border-l-blue-500 p-5 shadow-sm border-y border-r">
              <h4 className="font-semibold mb-2">
                Japanese Language Requirement
              </h4>
              <p>Basic proficiency in the Japanese language</p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Titp;
