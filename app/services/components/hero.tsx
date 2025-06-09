import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative lg:h-[fit] pb-12 sm:pb-14 xl:pb-12 2xl:pb-4 2xl:h-[100svh] w-full overflow-hidden">
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

      <div className="flex flex-col h-full w-full text-center justify-start px-4 sm:px-6 md:px-8 relative z-10">
        {/* Responsive padding top */}
        <div className="flex items-center justify-center h-screen flex-col p-4">
          <div className="flex flex-col p-4 bg-black/50">
            <h1
              className="green-outline uppercase font-poppins 
                      text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                      drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                      sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                      lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                      text-[#8aeb6a] font-bold"
            >
              enterprise services
            </h1>

            <p
              className="text-lime-500 font-poppins font-semibold italic text-center mt-2 sm:mt-3 md:mt-4 
                        text-xs sm:text-base md:text-xl lg:text-2xl font-normal 
                        px-1 sm:px-4 md:px-6 relative z-10"
            >
              Advanced technical capabilities tailored for business clients.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
