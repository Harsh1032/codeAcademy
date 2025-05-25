import React from "react";
import Navabr from "./Navabr";
import Hero from "./Hero";
import MaxWidthWrapper from './MaxWidthWrapper'
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screens">
      <Navabr />
      <MaxWidthWrapper className="py-10">
        <Hero />
      </MaxWidthWrapper>
      <Footer/>
    </div>
  );
};

export default Home;
