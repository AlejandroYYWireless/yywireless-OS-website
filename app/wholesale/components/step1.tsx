import Image from "next/image";
import React from "react";

const Step1 = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left section - Image */}
      <div className="relative flex-shrink-0 w-full lg:w-auto h-64 lg:h-screen">
        <Image
          src={"/images/wholesale_page/booth.png"}
          alt="Services illustration"
          width={600}
          height={800}
          className="object-contain h-full w-auto"
          priority
        />
      </div>

      {/* Right section - Content */}
      <div className="relative flex-1 h-auto lg:h-screen bg-white">
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

        <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 lg:p-12 text-center">
          <div className="mb-8">
            <Image
              src={"/images/internal/YYWirelessSmallLight.svg"}
              alt="YYWireless Company Logo, an image of a circle with two Y's in it."
              className="shrink-0 cursor-pointer"
              width={80}
              height={80}
            />
          </div>

          <h1
            className="green-outline uppercase font-poppins 
                      text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                      drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                      sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                      lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                      text-[#8aeb6a] font-bold mb-8"
          >
            Wholesale,
            <br />
            reimagined
          </h1>

          <p className="text-white text-lg lg:text-xl leading-relaxed max-w-2xl">
            At YYWireless, we do wholesale differently. With one of the
            industry's largest inventories - 100,000+ devices always in stock -
            we offer a full range of New, Certified Pre-Owned, Refurbished, and
            Used smartphones from top brands like Apple and Samsung, from the
            originals to the latest models.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1;
