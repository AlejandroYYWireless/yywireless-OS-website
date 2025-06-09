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
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Left section - Title and Description */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-white lg:pr-8">
              <h1
                className="green-outline uppercase font-poppins 
                          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                          drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                          sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                          lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                          text-[#8aeb6a] mb-6 lg:mb-8 text-center lg:text-left"
              >
                The inventory
              </h1>

              <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase mb-3 lg:mb-4">
                    See what's in stock
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-4 lg:mb-6 leading-relaxed">
                    Browse our real-time inventory of devices, tested and
                    ready-to-ship.
                  </p>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1x-UOW2Es8fVqAjhkNsDt7xpdIF-ewpEp8VfNaJnWWis/edit?gid=0#gid=0"
                    target="_blank"
                    className="inline-block bg-[#8aeb6a] text-black px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded font-bold uppercase hover:bg-green-400 transition-colors text-sm sm:text-base lg:text-lg"
                  >
                    View live inventory sheet
                  </a>
                </div>
              </div>
            </div>

            {/* Right section - Product Info */}
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:pl-8">
              <div className="text-white space-y-6 lg:space-y-8 max-w-lg text-center lg:text-left">
                <div>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-2 leading-relaxed">
                    <span className="text-[#8aeb6a] font-bold uppercase">
                      Wide selection
                    </span>{" "}
                    of smartphones, tablets, laptops, and smartwatches
                  </p>
                </div>

                <div>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                    <span className="text-[#8aeb6a] font-bold uppercase">
                      Top brands:
                    </span>{" "}
                    Apple, Samsung, Google, Motorola, OnePlus, Nokia, LG,
                    Lenovo, TCL, Alcatel, Asus, Acer, HP, Dell & More
                  </p>
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
