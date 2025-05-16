"use client";

import { motion } from "framer-motion";

interface ChatBubbleProps {
  word: string;
  position?: "left" | "right";
  timeOffset?: number;
}

const ChatBubble = ({
  word,
  position = "left",
  timeOffset = 0,
}: ChatBubbleProps) => {
  return (
    <motion.div
      className={`flex ${position === "left" ? "self-start" : "self-end"} 
                w-full max-w-[70%] sm:max-w-[65%] md:max-w-[60%] lg:max-w-[50%]
                my-3 sm:my-4 md:my-5`}
      initial={{ opacity: 0, x: position === "left" ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: timeOffset }}
    >
      <div
        className={`relative
                text-white font-montserrat font-normal 
                px-2 sm:px-3 md:px-4
                py-1 sm:py-2 md:py-2.5
                bg-black/50 
                text-xs sm:text-sm md:text-lg lg:text-xl
                flex flex-col justify-center items-center 
                rounded-xl md:rounded-3xl`}
      >
        {word}
        {/* Chat bubble tail */}
        <svg
          viewBox="0 0 10 10"
          preserveAspectRatio="xMidYMid meet"
          className={`w-3 h-3 md:w-4 md:h-4 absolute ${
            position === "left"
              ? "left-[-2px] -bottom-2 rotate-[35deg]"
              : "rotate-[200deg] -bottom-1 right-[-3px]"
          }`}
        >
          <polygon points="0,0 10,0 5,10" fill="rgba(0,0,0,0.5)" />
        </svg>
      </div>
    </motion.div>
  );
};

export default ChatBubble;
