import React from "react";
import Step1 from "./components/Step1";

const Page = () => {
  return (
    <div className="relative">
      <Step1 />
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
  );
};

export default Page;
