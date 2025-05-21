import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="container pt-[100px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20 xl:mt-[200px]">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        {/* Text Content Section */}
        <div className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6 order-2 md:order-1 max-w-3xl">
          <h2 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins text-center md:text-left">
            who we are
          </h2>

          <p className="font-montserrat text-base sm:text-lg md:text-xl leading-relaxed">
            YYWireless | Bayshine Trading Inc. is a trusted distributor of
            certified used, refurbished, and new mobile devices. Founded in 2009
            by Ivan Xiao, we have grown from a small startup to a leading
            wholesale supplier in the consumer electronics industry. Our mission
            is to provide high-quality, reliable, and affordable devices to
            businesses and consumers while striving for transparency and trust
            in every wholesale transaction.
          </p>

          <p className="font-montserrat text-base sm:text-lg md:text-xl leading-relaxed">
            We specialize in wholesale distribution of smartphones, tablets, and
            accessories, catering to B2B and B2C markets. Our products undergo
            rigorous quality checks and certification processes to ensure
            top-tier performance. Whether supplying retailers, repair shops, or
            bulk buyers, we offer competitive pricing and a seamless purchasing
            experience.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <Image
            src="/images/assets/pillars.png"
            alt="Company Pillars"
            width={600}
            height={450}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
