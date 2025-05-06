"use client";
import { motion } from "framer-motion";
interface ChatBubbleProps {
  word: string;
  position?: string;
  offset?: string;
  timeOffset?: number;
}
const ChatBubble = ({
  word,
  position = "left",
  offset = "0px",
  timeOffset = 0,
}: ChatBubbleProps) => (
  <motion.div
    className={`text-white font-semibold px-4 py-2 bg-black/50 min-h-[75px] h-fit text-2xl flex flex-col justify-center items-center rounded-3xl absolute ${position}-0`}
    style={{ top: offset }}
    transition={{ duration: 0.5, delay: timeOffset }}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    {word}
    {/* Chat bubble tail */}
    <svg
      className={`absolute ${
        position === "left"
          ? "left-[-2px]  -bottom-3  rotate-[30deg]"
          : "rotate-[210deg] -bottom-1 right-[-5px]"
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
