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
      <div className="relative">
        <Step7 />
        <img
          className="w-full z-2 absolute hidden sm:block bottom-[40px] sm:bottom-[-59px] lg:bottom-[-50px] xl:bottom-[-90px]"
          src="/images/assets/blswoop.svg"
          alt="Decorative bottom lines"
        />
      </div>
      <Step8 />
      <p className="z-10 bg-[#1c1c1c] text-muted-foreground uppercase text-xs">
        ©2025 YYWireless all rights reserved
      </p>
      <img
        className="w-full z-2"
        src="/images/assets/aboutusfooter.svg"
        alt="Decorative bottom lines"
      />
    </div>
  );
};

export default Page;
