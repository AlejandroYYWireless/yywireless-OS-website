import Image from "next/image";
import React from "react";

const Step7 = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/retail_page/partners.png"}
          alt="background"
          width={1920}
          height={1220}
          className="object-cover opacity-50 w-full h-full"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-2xl mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide mb-4 sm:mb-6">
            Powered by Platforms
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            YYWireless is one of the fastest-scaling mobile electronics
            retailers in the market - growing 65% year-over-year through Amazon
            FBA alone, with 30% overall retail growth across platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 lg:py-8 order-2 lg:order-1">
            <div>
              <p className="text-sm sm:text-base mb-4">
                We&apos;re active on{" "}
                <span className="font-semibold">Amazon</span>,{" "}
                <span className="font-semibold">eBay</span>,{" "}
                <span className="font-semibold">Walmart</span>, and{" "}
                <span className="font-semibold">more coming soon</span>, where
                we maintain{" "}
                <span className="italic">top-tier seller ratings</span> -
                including{" "}
                <span className="font-semibold">4.5 stars on Amazon</span> and a
                perfect{" "}
                <span className="font-semibold">5-star record on eBay</span>.
              </p>
            </div>

            <div>
              <p className="text-sm sm:text-base">
                Our{" "}
                <span className="font-semibold">
                  proven fulfillment infrastructure
                </span>
                ,{" "}
                <span className="font-semibold">
                  high customer satisfaction
                </span>
                , and{" "}
                <span className="font-semibold">multi-platform presence</span>{" "}
                make us a{" "}
                <span className="font-semibold">powerful partner</span> in
                consumer electronics retail.
              </p>
            </div>
          </div>

          {/* Right Platform Logos */}
          <div className="flex flex-col border-lime-500 border-t-3 pt-6 sm:pt-8 lg:pl-8 items-center space-y-6 sm:space-y-8 lg:space-y-12 order-1 lg:order-2">
            {/* Top Row - Amazon and eBay */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-12 w-full">
              <div className="flex bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 items-center justify-center w-48 sm:w-56 lg:w-64 h-24 sm:h-28 lg:h-32">
                <img
                  src="/images/retail_page/amazon.png"
                  alt="Amazon"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 items-center justify-center w-48 sm:w-56 lg:w-64 h-24 sm:h-28 lg:h-32">
                <img
                  src="/images/retail_page/ebay.png"
                  alt="eBay"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Bottom Row - Walmart and Temu */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-12 w-full">
              <div className="flex bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 items-center justify-center w-48 sm:w-56 lg:w-64 h-24 sm:h-28 lg:h-32">
                <img
                  src="/images/retail_page/walmart.png"
                  alt="Walmart"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="flex bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 items-center justify-center w-48 sm:w-56 lg:w-64 h-24 sm:h-28 lg:h-32">
                <img
                  src="/images/retail_page/temu.png"
                  alt="Temu"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Bottom Text */}
          </div>
        </div>
        <div className="text-center mt-6 sm:mt-8 px-4">
          <p className="text-lime-600 font-semibold text-base sm:text-lg italic">
            Explore our trusted storefronts across top online marketplaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step7;
