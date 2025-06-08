import Hero from "./Hero";
import MaxWidthWrapper from './MaxWidthWrapper';

const Home = () => {
  return (
    <div className="w-full min-h-screens">
      <MaxWidthWrapper className="py-10">
        <Hero />
      </MaxWidthWrapper>
    </div>
  );
};

export default Home;
