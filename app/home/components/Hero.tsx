import Image from "next/image";
import ChatBubble from "./subcomponents/ChatBubble";

const Hero = () => {
  return (
    <div className="relative lg:h-[fit] pb-12 sm:pb-14 xl:pb-12 2xl:pb-4 2xl:h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 -top-[108px] z-0">
        <Image
          src={"/images/assets/gptglobe.png"}
          alt="background"
          width={1920}
          height={1220}
          className="object-cover w-full h-full brightness-50 saturate-0"
          priority
        />
      </div>

      <div className="flex flex-col h-full w-full text-center justify-start px-4 sm:px-6 md:px-8 relative z-10">
        {/* Responsive padding top */}
        <div className="pt-[60px] sm:pt-[80px] md:pt-[100px] xl:pt-[160px] 2xl:pt-[220px]">
          <h1
            className="green-outline uppercase font-poppins 
                     text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                     drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                     sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                     lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                     text-[#8aeb6a] font-bold"
          >
            repurpose to reconnect
          </h1>

          <p
            className="text-lime-500 font-poppins text-center mt-2 sm:mt-3 md:mt-4 
                      text-xs sm:text-base md:text-xl lg:text-2xl font-normal 
                      px-1 sm:px-4 md:px-6 relative z-10"
          >
            GIVING TECHNOLOGY - AND CONNECTIONS - A SECOND LIFE
          </p>
        </div>

        {/* Chat bubbles container - flex layout instead of absolute positioning */}
        <div
          className="flex flex-col justify-between
                      w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]
                      mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[50px]
                      min-h-[150px] sm:min-h-[200px] md:min-h-[250px] lg:min-h-[300px]
                      py-4 sm:py-6 md:py-8
                      mx-auto
                      bg-stone-300/20 p-4 z-10 relative
                      rounded-lg"
        >
          <ChatBubble
            word="Welcome To YYWireless!"
            position="left"
            timeOffset={0}
          />
          <ChatBubble
            word="Quality, affordability, and sustainability - one device at a time?"
            position="right"
            timeOffset={1}
          />
          <ChatBubble
            word="Yep, 16 years and going."
            position="left"
            timeOffset={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
