import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Ssw = () => {
  return (
    <div className="bg-white mx-auto p-6 space-y-6">
      <MaxWidthWrapper>
        <div className="text-center gap-x-8 flex items-center justify-center">
          <h1 className="text-[49px] font-bold">SSW</h1>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition">
            Click here to Enroll Now
          </button>
        </div>
        <div className="w-full flex flex-col items-center justify-center py-10 bg-white">
          <div className="flex flex-col gap-10 w-full max-w-5xl px-4 sm:px-6">
            {/* Which Job */}
            <div className="flex flex-col md:flex-row items-center justify-between border rounded-xl shadow-md p-6 gap-6">
              <img
                src="/job.png"
                alt="Which Job"
                className="h-36 md:h-40 w-auto object-contain"
              />
              <p className="text-lg text-black leading-relaxed text-center md:text-left">
                • Nursing, Manufacture, Construction, Aviation, Agriculture,
                Food Service, Ship Building and Machinery. Railway Transport,
                Automobile repair and Maintenance
              </p>
            </div>

            {/* Eligibility */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between border rounded-xl shadow-md p-6 gap-6">
              <img
                src="/eligibility.png"
                alt="Eligibility"
                className="h-36 md:h-40 w-auto object-contain"
              />
              <p className="text-lg text-gray-600 leading-relaxed text-center md:text-left">
                18 years old or above and possess a considerable degree of
                knowledge or experience in a specific sector.
              </p>
            </div>

            {/* How */}
            <div className="flex flex-col md:flex-row items-center justify-between border rounded-xl shadow-md p-6 gap-6">
              <img
                src="/how.png"
                alt="How"
                className="h-36 md:h-40 w-auto object-contain"
              />
              <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2 pl-4 text-center md:text-left">
                <li>Pass a Japanese language test and skills test</li>
                <li>Get an E-Visa and documentation completed</li>
                <li>Submit an application to certain company</li>
                <li>Submit a status of residence application to Immigration</li>
                <li>Work</li>
              </ol>
            </div>

            {/* Japanese Language Tests */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between border rounded-xl shadow-md p-6 gap-6">
              <img
                src="/japanese-test.png"
                alt="Japanese Test"
                className="h-36 md:h-40 w-auto object-contain"
              />
              <p className="text-lg text-gray-600 leading-relaxed text-center md:text-left">
                For the ASS-exam etc. the candidates must pass the N4 or above
                level of the Japanese Language Proficiency Test (JLPT) before
                taking the specialized test.
                <br />
                JFT-Basic checks the Japanese proficiency needed to live in
                Japan. Services are offered by the Japan Foundation (JF) and
                Japan Educational Exchanges and Services (JEES).
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default Ssw;
