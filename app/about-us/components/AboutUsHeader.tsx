import Image from "next/image";
import YYCircleLogo from "./AboutUsHeader/YYCircleLogo";
import AboutUsHeaderText from "./AboutUsHeader/AboutUsHeaderText";
import AboutUsCollage from "./AboutUsHeader/AboutUsCollage";

const AboutUsHeader = () => {
  return (
    <div className="relative bg-[#1c1c1c] w-full overflow-hidden pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-12 2xl:pb-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/assets/aboutUsHeaderBackground.png"}
          alt="background"
          width={1920}
          height={1220}
          className="object-cover w-full h-full brightness-50 saturate-0"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <div className="flex flex-col xl:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 xl:gap-24">
          {/* Left Column - Logo and Text */}
          <div className="flex flex-col items-center xl:items-center">
            <YYCircleLogo />
            <AboutUsHeaderText />
          </div>

          {/* Right Column - Collage */}
          <div className="flex items-center justify-center xl:mt-0 w-full max-w-full xl:max-w-1/2">
            <AboutUsCollage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeader;
