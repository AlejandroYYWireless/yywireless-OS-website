import Image from "next/image";

const Step3 = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/wholesale_page/mesh.png"}
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
            {/* Left section - Title and Description */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-white lg:pr-8 order-1 lg:order-1">
              <h1
                className="green-outline uppercase font-poppins font-bold
                          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                          drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                          sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                          lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                          text-[#8aeb6a] mb-6 lg:mb-8 text-center lg:text-left
                          leading-tight"
              >
                The inventory
              </h1>

              <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold uppercase mb-3 lg:mb-4 leading-tight">
                    See what&apos;s in stock
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-4 lg:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Browse our real-time inventory of devices, tested and
                    ready-to-ship.
                  </p>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1x-UOW2Es8fVqAjhkNsDt7xpdIF-ewpEp8VfNaJnWWis/edit?gid=0#gid=0"
                    target="_blank"
                    className="inline-block bg-[#8aeb6a] text-black px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded font-bold uppercase hover:bg-green-400  text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    View live inventory sheet
                  </a>
                </div>
              </div>
            </div>

            {/* Right section - Product Info */}
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:pl-8 order-2 lg:order-2">
              <div className="text-white space-y-4 sm:space-y-6 lg:space-y-8 max-w-lg text-center lg:text-left">
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 border border-white/10">
                  <div className="mb-4 sm:mb-6">
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-2 leading-relaxed">
                      <span className="text-[#8aeb6a] font-bold uppercase text-base sm:text-lg lg:text-xl">
                        Wide selection
                      </span>{" "}
                      of smartphones, tablets, laptops, and smartwatches
                    </p>
                  </div>

                  <div>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                      <span className="text-[#8aeb6a] font-bold uppercase text-base sm:text-lg lg:text-xl block sm:inline mb-1 sm:mb-0">
                        Top brands:{" "}
                      </span>
                      <span className="block sm:inline">
                        Apple, Samsung, Google, Motorola, OnePlus, Nokia, LG,
                        Lenovo, TCL, Alcatel, Asus, Acer, HP, Dell & More
                      </span>
                    </p>
                  </div>
                </div>

                {/* Additional mobile-friendly stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden mt-6">
                  <div className="bg-[#8aeb6a]/10 backdrop-blur-sm rounded-lg p-3 text-center border border-[#8aeb6a]/20">
                    <div className="text-[#8aeb6a] font-bold text-lg sm:text-xl">
                      100k+
                    </div>
                    <div className="text-xs sm:text-sm text-white/80">
                      Devices
                    </div>
                  </div>
                  <div className="bg-[#8aeb6a]/10 backdrop-blur-sm rounded-lg p-3 text-center border border-[#8aeb6a]/20">
                    <div className="text-[#8aeb6a] font-bold text-lg sm:text-xl">
                      Live
                    </div>
                    <div className="text-xs sm:text-sm text-white/80">
                      Inventory
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
