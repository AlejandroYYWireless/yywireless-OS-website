import Image from "next/image";

const Step5 = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/services_page/morephones.png"}
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-8">
        <h2 className="italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
          From batch polishing to enterprise MDM—YYWireless delivers
          industrial-scale services with boutique-level attention.
        </h2>
      </div>
    </div>
  );
};

export default Step5;
