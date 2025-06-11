import Image from "next/image";
import React from "react";

const Step2 = () => {
  const OfferBlock = ({ image, text }: { image: string; text: string }) => {
    return (
      <div className="flex flex-col w-full max-w-[200px] mx-auto">
        <div className="bg-black w-full aspect-square relative rounded-lg overflow-hidden shadow-lg">
          <img src={image} className="w-full h-full object-cover" alt={text} />
        </div>
        <div className="bg-gradient-to-br from-[#379C2A] to-[#8BC53E] p-3 sm:p-4 text-white font-bold text-center min-h-[80px] sm:min-h-[88px] text-sm sm:text-base leading-tight mt-2 rounded-lg shadow-lg flex items-center justify-center">
          {text}
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen w-full mt-[200px] md:pb-[140px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/wholesale_page/offerbg.png"}
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-12 py-8 sm:py-12">
        <div className="text-center max-w-6xl w-full">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 sm:mb-8 text-center sm:text-right leading-tight">
            WHAT WE OFFER
          </h1>

          {/* Description Paragraphs */}
          <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-5xl mx-auto">
              We process 5,000 devices daily - over 1 million annually - through
              rigorous testing and certified data wiping, ensuring every product
              meets our exacting standards. We never flip inventory, so you
              always get reliable, high-quality stock.
            </p>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-5xl mx-auto">
              We strive to offer our wholesale partners top-quality service, by
              delivering competitive pricing, fast shipping, and sustainable
              tech solutions that help your business grow. When you work with
              us, you&apos;re not just getting devices - you&apos;re gaining a
              partner committed to your success.
            </p>
          </div>

          {/* Section Heading */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black text-center sm:text-left mb-6 sm:mb-8 uppercase tracking-wide">
            WHAT SETS US APART
          </h2>

          {/* Offer Blocks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
            <OfferBlock
              image="/images/wholesale_page/24.png"
              text="24-Hr Turnaround on All Devices"
            />
            <OfferBlock
              image="/images/wholesale_page/phonesearch.png"
              text="Inventory Always Tested, Never Flipped"
            />
            <OfferBlock
              image="/images/wholesale_page/phoneplus.png"
              text="Largest Selection of Android Devices"
            />
            <OfferBlock
              image="/images/wholesale_page/globe.png"
              text="Shipping to All Major Continents"
            />
            <OfferBlock
              image="/images/wholesale_page/box.png"
              text="Same-Day or Next-Day Shipping"
            />
            <OfferBlock
              image="/images/wholesale_page/100k.png"
              text="Devices Ready-To-Go, At All Times"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
