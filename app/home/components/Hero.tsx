import Image from "next/image";
import ChatBubble from "./subcomponents/ChatBubble";
const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="">
        <div className="absolute inset-0 -top-[108px]">
          <Image
            src={"/images/assets/gptglobe.png"}
            alt="background"
            width={1920}
            height={1220}
            className="hue-rotate-30 object-cover w-full h-full brightness-75 saturate-75"
            priority
          />
        </div>
        <div className="bg-transparent flex-col h-screen w-full  text-center flex justify-center items-center">
          <h1 className="uppercase text-6xl md:text-7xl drop-shadow-[0px_0px_14px_rgba(255,255,255,1)] text-white font-bold">
            repurpose to reconnect.
          </h1>
          <div className="relative w-full container min-h-[400px] max-w-[60vw] mt-4 mx-auto">
            <ChatBubble
              word="Welcome To YYWireless"
              position="left"
              offset="50px"
            />
            <ChatBubble
              word="Quality, affordability, and sustainability - one device at a time?"
              position="right"
              offset="150px"
              timeOffset={1.2}
            />
            <ChatBubble
              word="Yep, 16 years and going."
              position="left"
              offset="280px"
              timeOffset={2.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
