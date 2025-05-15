"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import Link from "next/link";
import { UserCircle } from "lucide-react";

const DesktopNavbar = () => {
  // Smooth scroll handler function with type safety
  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Calculate offset to account for fixed navbar
        const navbarHeight = 96; // Approximate height of your navbar (24px + padding)
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    },
    []
  );

  return (
    <>
      {/* Static navbar with margin on top */}
      <nav className="fixed top-6 left-0 p-0 w-full bg-stone-500/40 text-white z-50">
        <div className="flex justify-center items-center px-8">
          <Link
            href={"/"}
            className="flex items-center gap-2 cursor-pointer pr-2"
          >
            <Image
              src={"/images/internal/YYWirelessSmallLight.svg"}
              alt="YYWireless Company Logo, an image of a circle with two Y's in it."
              className="shrink-0 cursor-pointer"
              width={60}
              height={60}
            />
            <p className="text-4xl font-semibold">YYWireless</p>
          </Link>

          {/* standard links */}
          <div className="flex items-center pt-4 text-2xl font-semibold justify-around h-24 w-[70vw]">
            <Link
              href="/"
              className="uppercase text-shadow-lg"
              onClick={(e) => handleSmoothScroll(e, "our-story")}
            >
              Our Story
            </Link>
            <Link
              href="/"
              className="uppercase text-shadow-lg"
              onClick={(e) => handleSmoothScroll(e, "our-service")}
            >
              Our Service
            </Link>
            <Link
              href="/"
              className="uppercase text-shadow-lg"
              onClick={(e) => handleSmoothScroll(e, "wholesale")}
            >
              Wholesale
            </Link>
            <Link
              href="#"
              className="uppercase text-shadow-lg"
              onClick={(e) => handleSmoothScroll(e, "retail")}
            >
              Retail
            </Link>
            <a
              href="#contact-us"
              className="uppercase text-shadow-lg"
              onClick={(e) => handleSmoothScroll(e, "contact-us")}
            >
              Contact Us
            </a>
            <Link
              href="/"
              className="uppercase flex gap-4 items-center text-shadow-lg"
            >
              <UserCircle className="text-lime-600 h-8 w-8" />
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbar;
