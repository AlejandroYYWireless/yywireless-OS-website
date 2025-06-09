import Image from "next/image";
import React from "react";

const Step2 = () => {
  const OfferBlock = ({ image, text }: { image: string; text: string }) => {
    return (
      <div className="flex flex-col w-full max-w-xs">
        <div className="bg-black w-full aspect-square relative">
          <img src={image} className="w-full h-full object-cover" alt={text} />
        </div>
        <div className="bg-gradient-to-br from-[#379C2A] to-[#8BC53E] p-4 text-white font-bold text-center h-22 text-md leading-tight mt-2">
          {text}
        </div>
      </div>
    );
  };
  return (
    <div className="relative min-h-screen w-full">
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 lg:p-12">
        <div className="text-center max-w-6xl">
          <h1 className="text-4xl lg:text-6xl text-right text-black mb-8">
            WHAT WE OFFER
          </h1>

          <p className="text-gray-700 text-lg lg:text-xl mb-4 leading-relaxed">
            We process 5,000 devices daily - over 1 million annually - through
            rigorous testing and certified data wiping, ensuring every product
            meets our exacting standards. We never flip inventory, so you always
            get reliable, high-quality stock.
          </p>

          <p className="text-gray-700 text-lg lg:text-xl mb-12 leading-relaxed">
            We strive to offer our wholesale partners top-quality service, by
            delivering competitive pricing, fast shipping, and sustainable tech
            solutions that help your business grow. When you work with us,
            you're not just getting devices - you're gaining a partner committed
            to your success.
          </p>

          <h2 className="text-xl font-bold text-black flex items-start text-start mb-4">
            WHAT SETS US APART
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 justify-items-center">
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
