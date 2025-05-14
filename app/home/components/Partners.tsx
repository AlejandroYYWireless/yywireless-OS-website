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
      name: "UPS Logo",
      image: "/images/brands/UPS.png",
    },
    {
      name: "FedEx Logo",
      image: "/images/brands/FedEx.png",
      scale: 1.2,
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

      {/* Heading - responsive text size */}
      <div className="absolute top-0 inset-0 w-full">
        <h1
          className="uppercase text-5xl md:text-8xl lg:text-8xl mt-4
                       drop-shadow-[0px_0px_14px_rgba(138,253,106,0.8)]
                       text-[#8aeb6a] font-poppins text-center tracking-wider font-normal"
        >
          Our Partners
        </h1>
      </div>

      {/* Partners grid - responsive columns and spacing */}
      <div className="gap-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 place-items-center">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <img
              src={partner.image}
              alt={partner.name}
              className={`${
                partner.scale ? "scale-140" : ""
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
