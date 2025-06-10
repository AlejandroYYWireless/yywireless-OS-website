"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navigation } from "@/public/data/navigation";

const DesktopNavbar = () => {
  const [navState, setNavState] = useState<"visible" | "hidden">("visible");
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;
    setIsAtTop(window.scrollY === 0);

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Check if at top of page
      setIsAtTop(currentScroll === 0);

      // Scrolling up - show with black background
      if (currentScroll < lastScroll) {
        setNavState("visible");
      }
      // Scrolling down - hide the navbar
      else if (currentScroll > lastScroll) {
        setNavState("hidden");
        // Close any open menus when hiding navbar
        setActiveMenu(null);
        setShowOverlay(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (showOverlay) {
    console.log("for testing");
  }

  // Get navigation items from the first object
  const navItems = navigation[0];

  return (
    <>
      {/* This code looks good and needs to remain untouched */}
      <nav
        className={`fixed top-0 left-0 p-2 w-full transition-all duration-300 z-50 ${
          navState === "visible"
            ? (isAtTop && !activeMenu ? "bg-transparent" : "bg-black") +
              " text-white"
            : "-translate-y-full bg-transparent text-white"
        }`}
      >
        {/* Changed to grid layout for proper centering */}
        <div className="grid grid-cols-3 items-center text-sm">
          {/* Logo - Left */}
          <Link
            href={"/"}
            className="flex items-center gap-2 cursor-pointer justify-self-start"
          >
            <Image
              src={"/images/internal/YYWirelessSmallDark.svg"}
              alt="YYWireless Company Logo, an image of a circle with two Y's in it."
              className="shrink-0 cursor-pointer"
              width={65}
              height={65}
            />
            <p className="text-3xl">YYWireless</p>
          </Link>

          {/* Navigation Links - Center */}
          <div className="justify-self-center flex gap-8">
            {Object.entries(navItems).map(([key, item]) => (
              <Link
                key={key}
                href={item.href}
                className="text-white hover:text-[#8aeb6a] transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Empty space - Right (or remove this div entirely if not needed) */}
          <div className="justify-self-end">{/* Empty for now */}</div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbar;
