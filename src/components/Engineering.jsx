import Card from "./Card";
import MaxWidthWrapper from "./MaxWidthWrapper";
const Engineering = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full py-5 bg-gray-900 flex flex-col items-center justify-center px-4 gap-y-4">
        <span className="text-white text-lg lg:text-4xl font-semibold">
          Engineering & Technical Careers in Japan
        </span>
        <button className="bg-blue-600 px-4 py-2 rounded-lg flex items-center justify-center">
          <span className="text-white text-base lg:text-xl font-base">
            Apply for jobs in Japan
          </span>
        </button>
      </div>
      <MaxWidthWrapper className="py-5">
        <div className="flex flex-col gap-y-5 md:w-full w-[90%] mx-auto">
          <Card icon="🎓" title="Qualifications & Eligibility">
            <p>
              <strong className="text-blue-500">Educational Background:</strong>{" "}
              A bachelor's degree in engineering or related field (preferably
              Washington Accord accredited) is typically required.
              Alternatively, over 10 years of relevant experience or
              certifications like ITEE can qualify candidates.
            </p>
          </Card>
          <Card icon="🛂" title="Visa & Work Authorization">
            <ul className="list-disc ml-6">
              <li>
                <strong>
                  Engineer/Specialist in Humanities/International Services (ESI)
                  Visa:
                </strong>{" "}
                Requires a job offer and Certificate of Eligibility (COE).
              </li>
              <li>
                <strong>Highly Skilled Professional Visa:</strong> Points-based
                system with faster PR and other benefits.
              </li>
            </ul>
          </Card>

          <Card icon="💼" title="In-Demand Engineering Fields">
            <ul className="list-disc ml-6">
              <li>
                <strong>Information Technology:</strong> AI, cybersecurity,
                software development, data science
              </li>
              <li>
                <strong>Mechanical & Electrical:</strong> Product design,
                maintenance, manufacturing
              </li>
              <li>
                <strong>Civil Engineering:</strong> Infrastructure and urban
                development
              </li>
              <li>
                <strong>Renewable Energy:</strong> Wind, solar, and green tech
                innovation
              </li>
            </ul>
          </Card>

          <Card icon="🌐" title="Language Proficiency">
            <p>
              <strong className="text-blue-500">Japanese:</strong> JLPT N2 or higher preferred. More roles
              available with language skills.
            </p>
            <p className="mt-2">
              <strong className="text-blue-500">English-friendly roles:</strong> Especially in IT and
              multinational companies.
            </p>
          </Card>

          <Card icon="💰" title="Salary Expectations">
            <ul className="list-disc ml-6">
              <li>
                <strong>Entry-Level:</strong> ¥3.5M – ¥5M / year
              </li>
              <li>
                <strong>Mid-Level:</strong> ¥5M – ¥8M / year
              </li>
              <li>
                <strong>Senior-Level:</strong> ¥8M – ¥12M+ / year
              </li>
            </ul>
            <p className="mt-2 text-base">
              Note: Salary depends on experience, location, and job type.
            </p>
          </Card>

          <Card icon="📝" title="Application Process">
            <ol className="list-decimal ml-6">
              <li>Create a Japanese-style resume (rirekisho)</li>
              <li>Use platforms like Japan Dev, Daijob, LinkedIn</li>
              <li>Prepare for multi-stage interviews & tech assessments</li>
              <li>Get visa support from employer after job offer</li>
            </ol>
          </Card>

          <Card icon="📚" title="Additional Resources">
            <ul className="list-disc ml-6">
              <li>Take Japanese language classes (online or local)</li>
              <li>Join tech/engineering networking communities</li>
              <li>Learn Japanese business culture & etiquette</li>
            </ul>
          </Card>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Engineering;
