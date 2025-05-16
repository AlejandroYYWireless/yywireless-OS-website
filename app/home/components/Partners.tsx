const Partners = () => {
  const partners = [
    {
      name: "ATT Logo",
      image: "/images/brands/ATT.png",
    },
    {
      name: "TMobile Logo",
      image: "/images/brands/TMobile.png",
    },
    {
      name: "Verizon",
      image: "/images/brands/Verizon.png",
    },
    {
      name: "USPS Logo",
      image: "/images/brands/USPS.png",
    },
    {
      name: "FedEx Logo",
      image: "/images/brands/FedEx.png",
      scale: 1.2,
    },
    {
      name: "UPS Logo",
      image: "/images/brands/UPS.png",
    },
  ];

  return (
    <div className="relative">
      {/* Top wave - responsive height */}
      <img
        className="w-full h-[150px] sm:h-[180px] md:h-[220px] lg:h-[250px]"
        src="/images/extraassets/topthick.svg"
        alt="Decorative top wave"
      />

      {/* Heading - responsive text size - keeping original position */}
      <div className="absolute top-0 w-full">
        <h1
          className="uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl mt-2 sm:mt-4
                     drop-shadow-[0px_0px_14px_rgba(138,253,106,0.8)]
                     text-[#8aeb6a] font-poppins text-center tracking-wider font-normal"
        >
          Our Partners
        </h1>
      </div>

      {/* Partners grid - with staggered fade-in animation */}
      <div className="gap-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 place-items-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 my-6"
          >
            <img
              src={partner.image}
              alt={partner.name}
              className={`${
                partner.scale ? "scale-[1.2]" : ""
              } w-[140px] sm:w-[180px] md:w-[200px] lg:w-[240px] h-auto object-contain`}
            />
          </div>
        ))}
      </div>

      {/* Bottom wave - responsive height */}
      <img
        className="w-full"
        src="/images/extraassets/triplewave.svg"
        alt="Decorative bottom wave"
      />
    </div>
  );
};

export default Partners;
