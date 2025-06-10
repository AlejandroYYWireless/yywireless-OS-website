import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative lg:h-[fit] pb-12 sm:pb-14 xl:pb-12 2xl:pb-4 2xl:h-[100svh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -top-[108px] z-0">
        <Image
          src={"/images/services_page/tallguy.png"}
          alt="background"
          width={1920}
          height={1220}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Mobile & Tablet Layout (hidden on lg+) */}
      <div className="lg:hidden relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Mobile/Tablet Content Box */}
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-[#8aeb6a]/20 shadow-2xl">
            <h1
              className="green-outline uppercase font-poppins font-bold
                        text-3xl sm:text-4xl md:text-5xl
                        drop-shadow-[0px_0px_6px_rgba(138,253,106,0.9)] 
                        text-[#8aeb6a] leading-tight mb-6"
            >
              enterprise
              <br className="sm:hidden" />
              <span className="sm:ml-3">services</span>
            </h1>

            <p
              className="text-lime-400 font-poppins font-medium text-center
                        text-base sm:text-lg md:text-xl
                        leading-relaxed max-w-2xl mx-auto px-2"
            >
              Advanced technical capabilities tailored for business clients.
            </p>

            {/* Mobile Stats/Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 sm:mt-10">
              <div className="bg-gradient-to-r from-[#8aeb6a]/10 to-[#8aeb6a]/5 rounded-lg p-4 border border-[#8aeb6a]/20">
                <div className="text-[#8aeb6a] font-bold text-lg sm:text-xl">
                  Enterprise
                </div>
                <div className="text-white/80 text-sm">Grade Solutions</div>
              </div>
              <div className="bg-gradient-to-r from-[#8aeb6a]/10 to-[#8aeb6a]/5 rounded-lg p-4 border border-[#8aeb6a]/20">
                <div className="text-[#8aeb6a] font-bold text-lg sm:text-xl">
                  24/7
                </div>
                <div className="text-white/80 text-sm">Technical Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (lg+) - Your Original Code */}
      <div className="hidden lg:flex flex-col h-full w-full text-center justify-start px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex items-center justify-center h-screen flex-col p-4">
          <div className="flex flex-col p-4 bg-black/50">
            <h1
              className="green-outline uppercase font-poppins 
                        lg:text-6xl xl:text-7xl
                        drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                        sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                        lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                        text-[#8aeb6a] font-bold"
            >
              enterprise services
            </h1>

            <p
              className="text-lime-500 font-poppins font-semibold italic text-center mt-2 sm:mt-3 md:mt-4 
                        lg:text-2xl font-normal 
                        px-1 sm:px-4 md:px-6 relative z-10"
            >
              Advanced technical capabilities tailored for business clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
