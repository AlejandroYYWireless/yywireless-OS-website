import Image from "next/image";
import React from "react";

const Impact = () => {
  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col justify-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={"/images/assets/gptchartsup2.png"}
            alt="background"
            fill
            className="hue-rotate-30 brightness-75 saturate-75 object-cover"
          />
        </div>

        {/* Content container with responsive spacing */}
        <div
          className="bg-transparent z-10 flex-col pt-16 sm:pt-20 md:pt-24 lg:pt-[150px] px-4 sm:px-6 lg:px-8 
                       text-center flex justify-center items-center"
        >
          {/* Main heading with responsive text size */}
          <h1
            className="green-outline text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                       drop-shadow-[0px_0px_8px_rgba(115,153,87,0.8)] sm:drop-shadow-[0px_0px_14px_rgba(115,153,87,1)] 
                       text-[#d1f89a] font-bold"
          >
            Our Impact
          </h1>

          {/* Subheading with responsive text size */}
          <p
            className="text-stone-400 text-xl sm:text-2xl lg:text-3xl mt-6 sm:mt-8 md:mt-10 lg:mt-12 
                      italic font-semibold text-shadow-lg px-2"
          >
            60,000 Tons of CO&#8322; Saved Each Year
          </p>

          {/* Impact description section */}
          <div
            className="flex flex-col justify-start items-start mt-6 sm:mt-8 md:mt-10 lg:mt-12 
                        max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[1200px]"
          >
            {/* Main impact text with responsive sizing */}
            <p
              className="text-stone-100 text-start text-lg sm:text-xl md:text-2xl lg:text-3xl 
                        leading-tight sm:leading-normal md:leading-relaxed"
            >
              By refurbishing over{" "}
              <span className="font-semibold">1 million devices annually,</span>{" "}
              we prevent the release of{" "}
              <span className="font-semibold">
                60,000 metric tons of carbon dioxide--
              </span>{" "}
              the equivilent of:{" "}
            </p>

            {/* Impact list with responsive text and spacing */}
            <ol className="text-start list-disc px-4 sm:px-8 md:px-10 lg:px-12 w-full">
              <li
                className="text-stone-100 text-lg sm:text-xl md:text-2xl lg:text-3xl 
                           leading-tight sm:leading-normal mt-2 sm:mt-3 md:mt-4"
              >
                Taking <span className="font-semibold">13,000+ cars</span> off
                the road
              </li>
              <li
                className="text-stone-100 text-lg sm:text-xl md:text-2xl lg:text-3xl 
                           leading-tight sm:leading-normal mt-2 sm:mt-3 md:mt-4"
              >
                Planting{" "}
                <span className="font-semibold">
                  1.4 million <span className="text-green-700">trees</span>
                </span>
              </li>
              <li
                className="text-stone-100 text-lg sm:text-xl md:text-2xl lg:text-3xl 
                           leading-tight sm:leading-normal mt-2 sm:mt-3 md:mt-4"
              >
                Offsetting energy use for{" "}
                <span className="font-semibold">7,000+ homes</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
