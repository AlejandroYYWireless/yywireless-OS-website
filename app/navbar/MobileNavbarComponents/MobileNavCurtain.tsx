"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMobileNavStore } from "./useMobileNavStore";
import { navigation } from "@/public/data/navigation";

const MobileNavCurtain = () => {
  const navOpen = useMobileNavStore((store) => store.navOpen);
  const setNavOpen = useMobileNavStore((store) => store.setNavOpen);

  // Get navigation items from the first object
  const navItems = navigation[0];

  const handleLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <motion.div
      className="fixed top-[68px] right-0 h-screen bg-[#1C1C1C]"
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
              onClick={handleLinkClick}
              className={`border-t group hover:bg-[#1e1a36] transition-colors ${
                index === Object.keys(navItems).length - 1 ? "border-b" : ""
              } border-lime-700/50 justify-between flex items-center text-white text-3xl p-2`}
            >
              {item.label}
              <ArrowRight className="group-hover:-translate-x-[-10px] transition-all text-white text-3xl mr-2" />
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileNavCurtain;
