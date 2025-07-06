import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const JLPTNAT = () => {
  const sections = [
    {
      title: "🇯🇵 Why Learn Japanese?",
      content: (
        <p>
          Japan is one of the most innovative countries in the world, known for
          its excellence in technology, robotics, engineering, and culture.
          Learning Japanese not only enhances your global resume but also offers
          opportunities in fields like hospitality, animation, automotive, and
          IT. It also helps in understanding Japan’s rich traditions,
          literature, anime, and unique societal values. Proficiency in Japanese
          can open doors to higher education and work opportunities under
          programs like SSW, TITP, and ESI visas.
        </p>
      ),
      img: "/1.png",
      alt: "Japan Illustration",
    },
    {
      title: "📚 Our Course Levels",
      content: (
        <>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>N5-N4:</strong> Learn Hiragana, Katakana, 300–600 kanji,
              and basic sentence structures. Focus on greetings, shopping, time,
              directions, and simple dialogues.
            </li>
            <li>
              <strong>N3:</strong> Master intermediate vocabulary, 650–1000
              kanji, and grammar suitable for reading newspapers, understanding
              TV news, and working in a Japanese environment.
            </li>
            <li>
              <strong>N2-N1:</strong> Achieve professional-level fluency,
              understand complex materials, business etiquette, and professional
              writing skills. These levels qualify you for university admissions
              and high-paying jobs in Japan.
            </li>
          </ul>
          <p className="mt-4">
            Each level includes access to study materials, group activities,
            progress reviews, and practice tests aligned with JLPT standards.
          </p>
        </>
      ),
      img: "/3.png",
      alt: "Course Levels",
    },
    {
      title: "👨‍🏫 Experienced Instructors",
      content: (
        <p>
          We have a team of bilingual educators with JLPT N1/N2 certifications
          and years of teaching experience. Our instructors use activity-based
          learning, live role-play, cultural immersion, and storytelling to
          enhance your retention. They are patient, supportive, and trained to
          guide international students preparing for jobs, scholarships, or
          internships in Japan.
        </p>
      ),
      img: "/5.png",
      alt: "Instructor Illustration",
    },
    {
      title: "🕐 Flexible Schedules",
      content: (
        <>
          <p>
            Whether you're a student or a working professional, our courses are
            designed to fit your routine. We offer:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Morning, evening, and weekend batches</li>
            <li>Live online classes with recordings for later review</li>
            <li>Offline sessions in selected cities</li>
            <li>Special crash courses and JLPT revision bootcamps</li>
          </ul>
          <p className="mt-4">
            Course duration ranges from 3 months (N5 crash) to 12 months (N2/N1
            full prep). Access your course from anywhere using phone, tablet, or
            PC.
          </p>
        </>
      ),
      img: "/6.png",
      alt: "Schedule Illustration",
    },
    {
      title: "🎓 Certification & Career Support",
      content: (
        <>
          <p>
            We are committed to helping students succeed beyond the classroom.
            Our support includes:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Guidance for JLPT, NAT-TEST, and JFT-Basic</li>
            <li>Resume & SOP preparation for Japanese employers</li>
            <li>1:1 interview practice with Japanese professionals</li>
            <li>
              Job and internship assistance through our partner firms in Japan
            </li>
          </ul>
        </>
      ),
      img: "/10.png",
      alt: "Certification",
    },
    {
      title: "💬 Student Testimonials",
      content: (
        <>
          <p>
            <em>
              "I passed JLPT N4 in just 6 months. Their method is fun and
              effective. I especially loved the roleplay classes!"
            </em>{" "}
            – Aditi Sharma
          </p>
          <p>
            <em>
              "The interview training gave me confidence and clarity. I’m now
              interning in Osaka!"
            </em>{" "}
            – Ravi Kapoor
          </p>
          <p>
            <em>
              "Their classes gave me more than language skills – they gave me
              confidence and new friends."
            </em>{" "}
            – Sneha Mishra
          </p>
        </>
      ),
      img: "/12.png",
      alt: "Testimonials",
    },
    {
      title: "📞 Contact Us",
      content: (
        <>
          <p>
            Interested in becoming fluent in Japanese? Have questions about our
            next batch or scholarship support?
          </p>
          <p>
            <strong>Phone:</strong> +91 9211477548
          </p>
          <p>
            <strong>Email:</strong> support@ytbridge.in
          </p>
          <p>
            <strong>Instagram: </strong> 
            <a href="https://www.instagram.com/yt_bridge/" target="_blank" rel="noopener noreferrer" className="text-blue-500">@yt_birdge</a>
            {/* <strong>YouTube:</strong> YourInstitute Japan */}
          </p>
          <p>
            Follow us for student spotlights, exam tips, cultural facts, and
            live updates from our Japan connections.
          </p>
        </>
      ),
      img: "/16.png",
      alt: "Contact",
    },
  ];

  return (
    <div className="bg-[#f4f9fc] font-['Roboto']">
      <header className="bg-[#d81b60] text-white py-6 text-center">
        <h1 className="text-2xl font-bold">
          Join Our Japanese Language Program
        </h1>
        <a
          href="#"
          className="inline-block mt-4 bg-[#880e4f] text-white font-bold px-6 py-2 rounded hover:bg-pink-900 transition"
        >
          Enroll Today
        </a>
      </header>

      <MaxWidthWrapper>
        <section className="w-full mx-auto px-4 py-10">
          {sections.map((section, i) => (
            <div
              key={i}
              className="bg-white p-6 mb-10 border-l-4 border-[#c2185b] rounded-lg shadow-sm"
            >
              <h2 className="text-[#c2185b] text-xl font-semibold border-b-2 border-pink-200 pb-2 mb-4">
                {section.title}
              </h2>
              <div className="text-black text-lg">{section.content}</div>
              <img
                src={section.img}
                alt={section.alt}
                className="mt-5 w-[96px] h-[96px] rounded"
              />
            </div>
          ))}
        </section>
      </MaxWidthWrapper>
    </div>
  );
};
export default JLPTNAT;
