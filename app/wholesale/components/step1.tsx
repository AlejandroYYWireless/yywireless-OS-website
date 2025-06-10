import Image from "next/image";
import React from "react";

const Step1 = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left section - Image */}
      <div className="relative w-full lg:w-auto lg:flex-shrink-0">
        {/* Mobile: Fixed height container */}
        <div className="lg:hidden relative w-full h-[300px] sm:h-[400px]">
          <Image
            src={"/images/wholesale_page/booth.png"}
            alt="Services illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop: Original layout */}
        <div className="hidden lg:block relative h-screen w-[600px]">
          <Image
            src={"/images/wholesale_page/booth.png"}
            alt="Services illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right section - Content */}
      <div className="relative flex-1 min-h-[60vh] lg:h-screen bg-white">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={"/images/wholesale_page/hexnodes.png"}
            alt="background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 sm:p-8 lg:p-12 text-center">
          <div className="mb-6 lg:mb-8">
            <Image
              src={"/images/internal/YYWirelessSmallLight.svg"}
              alt="YYWireless Company Logo, an image of a circle with two Y's in it."
              className="shrink-0 cursor-pointer"
              width={60}
              height={60}
              sizes="(max-width: 768px) 60px, 80px"
            />
          </div>

          <h1
            className="green-outline uppercase font-poppins 
                      text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                      drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                      sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                      lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                      text-[#8aeb6a] font-bold mb-6 lg:mb-8 leading-tight"
          >
            Wholesale,
            <br />
            reimagined
          </h1>

          <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl px-2 sm:px-0">
            At YYWireless, we do wholesale differently. With one of the
            industry&apos;s largest inventories - 100,000+ devices always in
            stock - we offer a full range of New, Certified Pre-Owned,
            Refurbished, and Used smartphones from top brands like Apple and
            Samsung, from the originals to the latest models.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1;
