import React from "react";

const WhoWeAre = () => {
  return (
    <div className="grid grid-cols-2 place-items-center xl:p-12 xl:mt-[200px]">
      <div className="flex flex-col space-y-6">
        <h2 className="uppercase text-7xl font-poppins">who we are</h2>
        <p className="font-montserrat text-xl">
          YYWireless | Bayshine Trading Inc. is a trusted distributor of
          certified used, refurbished, and new mobile devices. Founded in 2009
          by Ivan Xiao, we have grown from a small startup to a leading
          wholesale supplier in the consumer electronics industry. Our mission
          is to provide high-quality, reliable, and affordable devices to
          businesses and consumers while striving for transparency and trust in
          every wholesale transaction.{" "}
        </p>
        <p className="font-montserrat text-xl">
          We specialize in wholesale distribution of smartphones, tablets, and
          accessories, catering to B2B and B2C markets. Our products undergo
          rigorous quality checks and certification processes to ensure top-tier
          performance. Whether supplying retailers, repair shops, or bulk
          buyers, we offer competitive pricing and a seamless purchasing
          experience.
        </p>
      </div>
      <img className="w-[600px]" src={"/images/assets/pillars.png"} />
    </div>
  );
};

export default WhoWeAre;
