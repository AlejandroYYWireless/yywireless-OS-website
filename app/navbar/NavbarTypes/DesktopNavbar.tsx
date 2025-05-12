"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { UserCircle } from "lucide-react";

const DesktopNavbar = () => {
  return (
    <>
      {/* Static navbar with margin on top */}
      <nav className="fixed top-6 left-0 p-0 w-full bg-stone-500/40 text-white z-50">
        <div className="flex justify-between items-center px-8">
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
            <Link href="/" className="uppercase text-shadow-lg">
              Our Story
            </Link>
            <Link href="/" className="uppercase text-shadow-lg">
              Our Service
            </Link>
            <Link href="/" className="uppercase text-shadow-lg">
              Wholesale
            </Link>
            <Link href="/" className="uppercase text-shadow-lg">
              Retail
            </Link>
            <Link href="/" className="uppercase text-shadow-lg">
              Contact Us
            </Link>
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
