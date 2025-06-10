"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMobileNavStore } from "./useMobileNavStore";
import { navigation } from "@/public/data/navigation";

const MobileNavCurtain = () => {
  const navOpen = useMobileNavStore((store) => store.navOpen);

  // Get navigation items from the first object
  const navItems = navigation[0];

  return (
    <motion.div
      className="fixed top-[70px] right-0 h-screen bg-[#1C1C1C]"
      initial={{ width: 0 }}
      animate={navOpen ? { width: "100%" } : { width: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      <motion.div
        className="px-4 pb-4 flex flex-col justify-between h-[calc(100vh-70px)]"
        initial={{ opacity: 0 }}
        animate={navOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: [0.22, 0.61, 0.36, 1],
        }}
      >
        <div>
          {Object.entries(navItems).map(([key, item], index) => (
            <Link
              key={key}
              href={item.href}
              className={`border-t group hover:bg-[#1e1a36] transition-colors ${
                index === Object.keys(navItems).length - 1 ? "border-b" : ""
              } border-gray-700 justify-between flex items-center text-white text-3xl p-2`}
            >
              {item.label}
              <ArrowRight className="group-hover:-translate-x-[-10px] transition-all text-white text-3xl mr-2" />
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <button
            aria-label="Log in button"
            className="uppercase cursor-pointer hover:bg-[#1e1a36]  bg-[#1C1C1C] border-2 border-stone-700 text-white text-sm rounded-none h-16"
          >
            Log in
          </button>
          <button
            aria-label="Contact us button"
            className="uppercase cursor-pointer hover:bg-slate-50 bg-white text-black text-sm border-2 border-white rounded-none h-16"
          >
            Contact Us
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileNavCurtain;
