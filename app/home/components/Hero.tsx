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
            className="object-cover w-full h-full brightness-50 saturate-0"
            priority
          />
        </div>
        <div className="flex-col h-screen w-full  text-center flex justify-start pt-[200px]">
          <h1
            className="green-outline uppercase font-poppins text-8xl
                       drop-shadow-[0px_0px_8px_rgba(138,253,106,0.8)] sm:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                       text-[#8aeb6a] font-bold"
          >
            {" "}
            repurpose to reconnect
          </h1>
          <p className="text-lime-500 font-poppins text-center mt-6 z-2 text-2xl font-normal">
            GIVING TECHNOLOGY - AND CONNECTIONS - A SECOND LIFE
          </p>
          <div className="relative bg-stone-300/20  min-h-[400px] w-[600px] md:w-[1100px] mt-[150px] mx-auto">
            <ChatBubble
              word="Welcome To YYWireless!"
              position="left"
              offset="50px"
            />
            <ChatBubble
              word="Quality, affordability, and sustainability - one device at a time?"
              position="right"
              offset="150px"
              timeOffset={1}
            />
            <ChatBubble
              word="Yep, 16 years and going."
              position="left"
              offset="280px"
              timeOffset={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
