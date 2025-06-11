import React from "react";
import Hero from "./hero";
import Step7 from "./components/Step7";
import Step8 from "./components/Step8";

const Page = () => {
  return (
    <div>
      <div className="relative">
        <Hero />
        <img
          className="w-full z-2 absolute hidden sm:block bottom-[40px] sm:bottom-[-59px] lg:bottom-[-50px] xl:bottom-[-50px]"
          src="/images/assets/upswoop.svg"
          alt="Decorative bottom lines"
        />
      </div>
      <Step7 />
      <Step8 />
    </div>
  );
};

export default Page;
