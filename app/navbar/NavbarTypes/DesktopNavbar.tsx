"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import Link from "next/link";

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
      <nav className="fixed top-6 left-0 right-0 mx-auto max-w-7xl bg-stone-500/40 text-white z-50 rounded-lg">
        <div className="flex justify-between items-center px-6 lg:px-8 h-20">
          {/* Logo Section */}
          <Link
            href={"/"}
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <Image
              src={"/images/internal/YYWirelessSmallLight.svg"}
              alt="YYWireless Company Logo, an image of a circle with two Y's in it."
              className="shrink-0 cursor-pointer"
              width={50}
              height={50}
            />
            <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold whitespace-nowrap">
              YYWireless
            </p>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 2xl:space-x-10 text-base xl:text-lg 2xl:text-xl font-semibold">
            <Link
              href="/about-us"
              className="uppercase text-shadow-lg hover:text-[#8aeb6a] transition-colors whitespace-nowrap"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="uppercase text-shadow-lg hover:text-[#8aeb6a] transition-colors whitespace-nowrap"
            >
              Our Services
            </Link>
            <Link
              href="/wholesale"
              className="uppercase text-shadow-lg hover:text-[#8aeb6a] transition-colors whitespace-nowrap"
            >
              Wholesale
            </Link>
            <Link
              href="/retail"
              className="uppercase text-shadow-lg hover:text-[#8aeb6a] transition-colors whitespace-nowrap"
            >
              Retail
            </Link>
            <a
              href="#contact-us"
              className="uppercase text-shadow-lg hover:text-[#8aeb6a] transition-colors whitespace-nowrap"
              onClick={(e) => handleSmoothScroll(e, "contact-us")}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button (for future mobile implementation) */}
          <div className="lg:hidden">
            <button className="text-white p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbar;
