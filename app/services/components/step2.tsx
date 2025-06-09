import Image from "next/image";
import React from "react";

const Step2 = () => {
  return (
    <div className="flex">
      {/* Left section - Background with text overlay */}
      <div className="relative w-full h-screen lg:h-auto">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={"/images/services_page/bgx.png"}
            alt="background"
            width={1920}
            height={1220}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Text overlay */}
        <div className="relative z-10 flex items-center justify-center h-full w-full">
          <div className="text-center px-4 sm:px-6 md:px-8">
            <div className="bg-black/50 p-4 sm:p-6 md:p-8 rounded-lg">
              <h1
                className="green-outline capitalize font-poppins 
                         text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl
                         drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                         sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                         lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                         text-[#8aeb6a]"
              >
                our services
              </h1>

              <p
                className="font-montserrat text-white text-center mt-2 sm:mt-3 md:mt-4 
                          text-xs sm:text-base md:text-lg lg:text-base xl:text-lg
                          px-1 sm:px-4 md:px-6"
              >
                We offer specialized repair and software services designed to
                support retailers, carriers, refurbishers, insurance providers,
                and corporate resellers. Our in-house team delivers scale,
                speed, and certified quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right section - Image */}
      <div className="relative w-full h-screen lg:h-auto">
        <Image
          src={"/images/services_page/guy2.jpg"} // Replace with your image path
          alt="Services illustration"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>
  );
};

export default Step2;
