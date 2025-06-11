import Image from "next/image";
import React from "react";

const Step4 = () => {
  return (
    <div className="flex pb-[200px] md:pb-[150px] flex-col lg:flex-row min-h-screen">
      {/* Left section - Image */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-screen">
        <Image
          src={"/images/services_page/phones.png"}
          alt="Services illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right section - Content */}
      <div className="relative w-full lg:w-1/2 h-auto lg:h-screen bg-white">
        <div className="flex flex-col justify-start h-full p-6 lg:p-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 lg:mb-8">
            Software Repair Services
          </h1>

          <p className="text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8">
            We specialize in resolving a wide range of software-related issues
            including:
          </p>

          <div className="border-2 border-lime-500 rounded-lg p-6 lg:p-8 bg-gray-50">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 text-sm lg:text-base">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                Google/FRP Locked
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                PIN Locked
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                MDM Locked
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                Demo/Retail Mode
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                Knox Locked
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                Bootloop
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                Samsung Locked
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                UI Error
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                iCloud/FMI Locked
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                No IMEI
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                Triangle Error
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                Stuck in Recovery/Fastboot
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                Unlocked Bootloader
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                Custom OS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
