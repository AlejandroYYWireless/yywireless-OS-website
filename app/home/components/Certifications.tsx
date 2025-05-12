import Image from "next/image";
import React from "react";

const Certifications = () => {
  interface CertificateItemProps {
    title: string;
    description: string;
    imageUrl: string;
    reversed?: boolean;
  }

  const CertificateItem = ({
    title,
    description,
    imageUrl,
    reversed,
  }: CertificateItemProps) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 md:mb-0">
        <div
          className={`relative w-full font-semibold text-base sm:text-lg md:text-xl flex flex-col ${
            reversed ? "md:flex-col-reverse md:mt-12" : ""
          } justify-around items-center p-2 sm:p-4`}
        >
          <div className="relative w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]">
            <Image src={imageUrl} alt={title} fill className="object-contain" />
          </div>
          <p
            className={`${
              reversed ? "md:mb-12" : "md:mt-12"
            } w-full sm:w-[180px] md:w-[250px] font-montserrat text-white font-bold bg-stone-500/60 p-4 text-center mt-4 md:mt-0`}
          >
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="flex flex-col justify-center pb-24">
        <div className="absolute inset-0">
          <Image
            src={"/images/assets/gpttech1.png"}
            alt="background"
            fill
            className="brightness-50 saturate-0 object-cover"
          />
        </div>
        <div className="bg-transparent flex-col pt-16 sm:pt-20 md:pt-[100px] lg:pt-[30px] text-center flex justify-center items-center px-4 sm:px-6 relative z-10">
          <h1
            className="green-outline uppercase text-7xl
                       drop-shadow-[0px_0px_8px_rgba(138,253,106,0.8)] sm:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                       text-[#8aeb6a] font-normal"
          >
            Industry certified
          </h1>

          <div className="flex flex-wrap pt-8 sm:pt-12 md:pt-16 lg:pt-[100px] w-full justify-center">
            <CertificateItem
              title="ISO 9001:2015"
              description="Electronics reycling standard certification for responsibl-e recycling practices and environmental standardship."
              imageUrl="/images/assets/r2v3.png"
              reversed={true}
            />
            <CertificateItem
              title="ISO 9001:2015"
              description="Quality Management Sytem Certification ensuring consistent service quality and customer satisfaction."
              imageUrl="/images/extraassets/iso9001.webp"
            />
            <CertificateItem
              title="ISO 14001:2015"
              description="Environmental Management System Certification demonstrating our commitment to environmental responsibility."
              imageUrl="/images/extraassets/iso14001.webp"
              reversed={true}
            />
            <CertificateItem
              title="Wise certification"
              description="WISE Certified technicians ensuring devices are refurbished with high quality"
              imageUrl="/images/assets/wise.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
