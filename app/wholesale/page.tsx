import React from "react";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import Step4 from "./components/Step4";

const Page = () => {
  return (
    <div>
      <div className="relative">
        <Step1 />

        <img
          className="w-full z-2 absolute hidden sm:block sm:bottom-[-100px] lg:bottom-[-120px] xl:bottom-[-200px]"
          src="/images/assets/sidespikes.svg"
          alt="Decorative top wave"
        />
      </div>
      <div className="relative">
        <Step2 />
        <img
          className="w-full z-2 absolute hidden sm:block sm:bottom-[-100px] lg:bottom-[-120px] xl:bottom-[-200px]"
          src="/images/assets/nswoop.svg"
          alt="Decorative top wave"
        />
      </div>

      <div className="relative">
        <Step3 />
        <img
          className="w-full z-2 absolute hidden sm:block sm:bottom-[-100px] lg:bottom-[-120px] xl:bottom-[-200px]"
          src="/images/assets/grass.svg"
          alt="Decorative top wave"
        />
      </div>
      <Step4 />

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
