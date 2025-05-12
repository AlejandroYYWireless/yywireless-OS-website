"use client";

import { motion } from "framer-motion";

interface ChatBubbleProps {
  word: string;
  position?: "left" | "right";
  offset?: string;
  timeOffset?: number;
  horizontalPadding?: string; // New prop for horizontal padding
}

const ChatBubble = ({
  word,
  position = "left",
  offset = "0px",
  timeOffset = 0,
  horizontalPadding = "20px", // Default padding value
}: ChatBubbleProps) => (
  <motion.div
    className={`text-white  font-montserrat font-normal px-4 py-2 bg-black/50 min-h-[75px] h-fit text-xl max-w-1/2 flex flex-col justify-center items-center rounded-3xl absolute`}
    style={{
      top: offset,
      left: position === "left" ? horizontalPadding : "auto",
      right: position === "right" ? horizontalPadding : "auto",
    }}
    transition={{ duration: 0.5, delay: timeOffset }}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    {word}
    {/* Chat bubble tail */}
    <svg
      className={`absolute ${
        position === "left"
          ? "left-[-3px] -bottom-3 rotate-[35deg]"
          : "rotate-[200deg] -bottom-1 right-[-5px]"
      }`}
      width="20"
      height="20"
      viewBox="0 0 10 10"
    >
      <polygon points="0,0 10,0 5,10" fill="rgba(0,0,0,0.5)" />
    </svg>
  </motion.div>
);

export default ChatBubble;
