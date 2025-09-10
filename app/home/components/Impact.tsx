import Image from "next/image";

const Impact = () => {
  return (
    <div className="relative min-h-fit pb-24 lg:min-h-screen">
      <div className="flex flex-col justify-center h-full w-full">
        {/* Background image with priority loading */}
        <div className="absolute inset-0">
          <Image
            src={"/images/assets/gptchartsup2.png"}
            alt="background"
            fill
            priority
            sizes="100vw"
            className="brightness-50 saturate-0 object-cover"
          />
        </div>

        {/* Content container with improved responsive spacing */}
        <div
          className="bg-transparent z-10 flex-col pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-36 
                     px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
                     text-center flex justify-center items-center"
        >
          {/* Main heading with responsive text size */}
          <h1
            className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                       drop-shadow-[0px_0px_8px_rgba(138,253,106,0.7)] sm:drop-shadow-[0px_0px_14px_rgba(138,253,106,0.8)]
                       text-[#8aeb6a] font-poppins tracking-wider font-normal"
          >
            Our Impact
          </h1>

          {/* Subheading with responsive text size */}
          <p
            className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6
                       drop-shadow-[0px_0px_8px_rgba(138,253,106,0.7)] sm:drop-shadow-[0px_0px_14px_rgba(138,253,106,0.8)]
                       text-[#b7eb6a] italic font-poppins tracking-wider font-semibold"
          >
            60,000 Tons of CO&#8322; Saved Each Year
          </p>

          {/* Impact description section with improved responsive spacing */}
          <div
            className="flex flex-col justify-start font-montserrat items-start 
                      mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20
                      max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
          >
            {/* Main impact text with responsive size */}
            <p
              className="text-stone-100 text-start text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl
                        leading-snug sm:leading-tight md:leading-tight lg:leading-relaxed font-light"
            >
              By refurbishing over{" "}
              <span className="font-bold text-white">
                1 million devices annually,
              </span>{" "}
              we prevent the release of{" "}
              <span className="font-bold text-white">
                60,000 metric tons of carbon dioxide--
              </span>{" "}
              the equivalent of:
            </p>

            {/* Impact list with responsive text size and spacing */}
            <ol
              className="text-start font-poppins uppercase list-disc 
                          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
                          w-full mt-4 sm:mt-6 md:mt-6 lg:mt-8 xl:mt-10"
            >
              <li
                className="text-stone-100 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                           leading-snug sm:leading-tight md:leading-tight lg:leading-relaxed 
                           mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8"
              >
                Taking{" "}
                <span className="font-bold text-white">13,000+ cars</span> off
                the road
              </li>
              <li
                className="text-stone-100 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                           leading-snug sm:leading-tight md:leading-tight lg:leading-relaxed 
                           mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8"
              >
                Planting{" "}
                <span className="font-bold text-white">
                  1.4 million <span className="text-green-700">trees</span>
                </span>
              </li>
              <li
                className="text-stone-100 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                           leading-snug sm:leading-tight md:leading-tight lg:leading-relaxed 
                           mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8"
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
