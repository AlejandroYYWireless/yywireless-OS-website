import Image from "next/image";
import React from "react";

const Step2 = () => {
  return (
    <>
      {/* Mobile & Tablet Layout (hidden on lg+) */}
      <div className="lg:hidden relative min-h-screen">
        {/* Background image for mobile */}
        <div className="absolute inset-0 z-0">
          <Image
            src={"/images/services_page/guy2.jpg"}
            alt="background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile content overlay */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Content Card */}
            <div className="bg-black/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-[#8aeb6a]/30 shadow-2xl mb-8">
              <h1
                className="green-outline capitalize font-poppins font-bold
                          text-3xl sm:text-4xl md:text-5xl
                          drop-shadow-[0px_0px_8px_rgba(138,253,106,0.9)] 
                          text-[#8aeb6a] leading-tight mb-6"
              >
                our services
              </h1>

              <p
                className="font-montserrat text-white text-center
                          text-base sm:text-lg md:text-xl
                          leading-relaxed max-w-3xl mx-auto px-2 mb-8"
              >
                We offer specialized repair and software services designed to
                support retailers, carriers, refurbishers, insurance providers,
                and corporate resellers. Our in-house team delivers scale,
                speed, and certified quality.
              </p>

              {/* Service Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-black/50 rounded-xl p-4 border border-white/20">
                  <div className="text-[#8aeb6a] font-bold text-lg mb-1">
                    Repair Services
                  </div>
                  <div className="text-white text-sm">
                    Hardware & Software Solutions
                  </div>
                </div>
                <div className="bg-black/50 rounded-xl p-4 border border-white/20">
                  <div className="text-[#8aeb6a] font-bold text-lg mb-1">
                    Enterprise Support
                  </div>
                  <div className="text-white text-sm">
                    Scalable Business Solutions
                  </div>
                </div>
                <div className="bg-black/50 rounded-xl p-4 border border-white/20">
                  <div className="text-[#8aeb6a] font-bold text-lg mb-1">
                    Quality Certified
                  </div>
                  <div className="text-white text-sm">
                    Industry Standard Testing
                  </div>
                </div>
                <div className="bg-black/50 rounded-xl p-4 border border-white/20">
                  <div className="text-[#8aeb6a] font-bold text-lg mb-1">
                    Fast Turnaround
                  </div>
                  <div className="text-white text-sm">Speed & Efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (lg+) - Your Original Code */}
      <div className="hidden lg:flex">
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
                           lg:text-4xl xl:text-5xl
                           drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                           sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                           lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                           text-[#8aeb6a]"
                >
                  our services
                </h1>

                <p
                  className="font-montserrat text-white text-center mt-2 sm:mt-3 md:mt-4 
                            lg:text-base xl:text-lg
                            px-1 sm:px-4 md:px-6"
                >
                  We offer specialized repair and software services designed to
                  support retailers, carriers, refurbishers, insurance
                  providers, and corporate resellers. Our in-house team delivers
                  scale, speed, and certified quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right section - Image */}
        <div className="relative w-full h-screen lg:h-auto">
          <Image
            src={"/images/services_page/guy2.jpg"}
            alt="Services illustration"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Step2;
