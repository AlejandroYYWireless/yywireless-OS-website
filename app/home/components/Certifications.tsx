import Image from "next/image";
import Link from "next/link";

interface CertificateItemProps {
  title: string;
  description: string;
  imageUrl: string;
  reversed?: boolean;
  link?: string;
}

const Certifications = () => {
  const CertificateItem = ({
    title,
    description,
    imageUrl,
    reversed,
    link,
  }: CertificateItemProps) => {
    // Render the image either as a link or a static image based on whether a link is provided
    const renderImage = () => {
      const imageElement = (
        <div className="relative w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] md:w-[170px] md:h-[170px] lg:w-[180px] lg:h-[180px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
      );

      if (link) {
        return (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-105 transition-transform"
          >
            {imageElement}
          </Link>
        );
      }

      return imageElement;
    };

    return (
      <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-10 sm:mb-8">
        <div
          className={`relative w-full font-semibold flex flex-col 
            ${reversed ? "sm:flex-col-reverse" : ""} 
            justify-around items-center p-2 sm:p-4`}
        >
          {renderImage()}

          <div
            className={`
            ${reversed ? "sm:mb-8" : "sm:mt-8"} 
            w-full max-w-[280px] sm:max-w-[220px] md:max-w-[250px] 
            mt-4 sm:mt-0 transform transition-all duration-300
          `}
          >
            <p className="font-montserrat text-white font-bold bg-stone-500/70 backdrop-blur-sm p-3 sm:p-4 text-center rounded-sm shadow-md text-sm sm:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="flex flex-col justify-center pb-16 sm:pb-20 md:pb-24">
        <div className="absolute inset-0">
          <Image
            src={"/images/assets/gpttech1.png"}
            alt="background"
            fill
            priority
            className="brightness-50 saturate-0 object-cover"
          />
        </div>

        <div className="bg-transparent flex-col pt-12 sm:pt-16 md:pt-20 lg:pt-24 text-center flex justify-center items-center px-4 sm:px-6 relative z-10">
          <h1
            className="green-outline uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                       drop-shadow-[0px_0px_8px_rgba(138,253,106,0.8)] sm:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                       text-[#8aeb6a] font-normal mb-2 sm:mb-0"
          >
            Industry certified
          </h1>

          <div className="flex flex-wrap pt-8 sm:pt-12 md:pt-16 lg:pt-20 w-full justify-center">
            <CertificateItem
              title="R2v3"
              description="Electronics recycling standard certification for responsible recycling practices and environmental stewardship."
              imageUrl="/images/assets/r2v3.png"
              link="https://sustainableelectronics.org/"
              reversed={true}
            />
            <CertificateItem
              title="ISO 9001:2015"
              description="Quality Management System Certification ensuring consistent service quality and customer satisfaction."
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
              description="WISE Certified technicians ensuring devices are refurbished with high quality standards."
              imageUrl="/images/assets/wise.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
