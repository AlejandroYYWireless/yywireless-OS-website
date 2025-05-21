import Image from "next/image";
import YYCircleLogo from "./AboutUsHeader/YYCircleLogo";
import AboutUsHeaderText from "./AboutUsHeader/AboutUsHeaderText";
import AboutUsCollage from "./AboutUsHeader/AboutUsCollage";

const AboutUsHeader = () => {
  return (
    <div className="relative lg:h-[fit] pb-12 sm:pb-14 xl:pb-12 2xl:pb-4  w-full overflow-hidden">
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
      <div className="flex items-center h-full w-full text-center space-x-24 justify-center px-4 sm:px-6 md:px-8 relative ">
        <div className="flex flex-col justify-center items-center max-w-1/2">
          <YYCircleLogo />
          <AboutUsHeaderText />
        </div>
        <AboutUsCollage />
      </div>
    </div>
  );
};

export default AboutUsHeader;
