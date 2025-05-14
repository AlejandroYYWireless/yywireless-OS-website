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
            className="brightness-50 saturate-0 object-cover"
          />
        </div>

        {/* Content container with increased spacing for slideshow */}
        <div
          className="bg-transparent z-10 flex-col pt-24 md:pt-32 lg:pt-36 px-8 md:px-12 lg:px-16
                     text-center flex justify-center items-center"
        >
          {/* Main heading with increased text size */}
          <h1
            className="uppercase text-5xl md:text-8xl lg:text-7xl
                       drop-shadow-[0px_0px_14px_rgba(138,253,106,0.8)]
                       text-[#8aeb6a] font-poppins tracking-wider font-normal"
          >
            Our Impact
          </h1>

          {/* Subheading with increased text size */}
          <p
            className="uppercase text-xl md:text-xl lg:text-3xl mt-6
                       drop-shadow-[0px_0px_14px_rgba(138,253,106,0.8)]
                       text-[#b7eb6a] italic font-poppins tracking-wider font-semibold"
          >
            60,000 Tons of CO&#8322; Saved Each Year
          </p>

          {/* Impact description section with increased spacing */}
          <div
            className="flex flex-col justify-start font-montserrat items-start mt-12 md:mt-16 lg:mt-20
                      max-w-full md:max-w-5xl lg:max-w-6xl"
          >
            {/* Main impact text with increased size */}
            <p
              className="text-stone-100 text-start text-2xl md:text-3xl lg:text-4xl
                        leading-tight md:leading-relaxed font-light"
            >
              By refurbishing over{" "}
              <span className="font-bold text-white">
                1 million devices annually,
              </span>{" "}
              we prevent the release of{" "}
              <span className="font-bold text-white">
                60,000 metric tons of carbon dioxide--
              </span>{" "}
              the equivilent of:
            </p>

            {/* Impact list with increased text size and spacing */}
            <ol className="text-start font-poppins uppercase list-disc px-8 md:px-12 lg:px-16 w-full mt-6 md:mt-8 lg:mt-10">
              <li
                className="text-stone-100 text-2xl md:text-3xl lg:text-4xl
                           leading-tight md:leading-relaxed mt-6 md:mt-8"
              >
                Taking{" "}
                <span className="font-bold text-white">13,000+ cars</span> off
                the road
              </li>
              <li
                className="text-stone-100 text-2xl md:text-3xl lg:text-4xl
                           leading-tight md:leading-relaxed mt-6 md:mt-8"
              >
                Planting{" "}
                <span className="font-bold text-white">
                  1.4 million <span className="text-green-700">trees</span>
                </span>
              </li>
              <li
                className="text-stone-100 text-2xl md:text-3xl lg:text-4xl
                           leading-tight md:leading-relaxed mt-6 md:mt-8"
              >
                Offsetting energy use for{" "}
                <span className="font-bold text-white">7,000+ homes</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
