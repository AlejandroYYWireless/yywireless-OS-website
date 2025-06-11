import React from "react";
import Hero from "./components/hero";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import Step4 from "./components/step4";
import Step5 from "./components/step5";
import Step6 from "./components/step6";

const Page = () => {
  return (
    <div>
      <Hero />
      <div className="relative">
        <Step2 />
      </div>
      <div className="relative">
        <img
          className="w-full z-2 absolute "
          src="/images/assets/spikedown.svg"
          alt="Decorative top wave"
        />
        <Step3 />
        <img
          className="w-full z-2 absolute bottom-0"
          src="/images/assets/swoop.svg"
          alt="Decorative top wave"
        />
      </div>
      <div className="relative">
        <img
          className="w-full z-2 absolute bottom-0"
          src="/images/assets/bswoop.svg"
          alt="Decorative top wave"
        />
        <Step4 />
      </div>

      <Step5 />

      <div className="relative">
        <img
          className="w-full z-1 absolute top-[-15px]"
          src="/images/assets/tswoop.svg"
          alt="Decorative top wave"
        />

        <Step6 />
        <div className="w-full z-1 absolute bottom-0">
          <p className="z-10 text-muted-foreground uppercase text-xs">
            ©2025 YYWireless all rights reserved
          </p>
          <img
            className="w-full"
            src="/images/assets/barfoot.svg"
            alt="Decorative top wave"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
