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
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <h2 className="italic text-5xl font-bold text-white text-center max-w-2xl">
          From batch polishing to enterprise MDM—YYWireless delivers
          industrial-scale services with boutique-level attention.
        </h2>
      </div>
    </div>
  );
};

export default Step5;
