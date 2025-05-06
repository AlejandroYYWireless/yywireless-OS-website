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
          className="flex justify-center items-center text-center pt-6 sm:pt-8 md:pt-10 lg:pt-14 
                       text-3xl sm:text-4xl md:text-5xl lg:text-7xl 
                       drop-shadow-[0px_0px_8px_rgba(255,255,255,1)] sm:drop-shadow-[0px_0px_10px_rgba(255,255,255,1)] 
                       md:drop-shadow-[0px_0px_12px_rgba(255,255,255,1)] lg:drop-shadow-[0px_0px_14px_rgba(255,255,255,1)] 
                       text-white font-bold"
        >
          Our Partners
        </h1>
      </div>

      {/* Partners grid - responsive columns and spacing */}
      <div className="gap-4 p-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 place-items-center">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <img
              src={partner.image}
              alt={partner.name}
              className="w-[140px] sm:w-[180px] md:w-[200px] lg:w-[240px] h-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Bottom wave - responsive height */}
      <img
        className="w-full h-[120px] sm:h-[140px] md:h-[170px] lg:h-[200px]"
        src="/images/extraassets/threebottomwave.svg"
        alt="Decorative bottom wave"
      />
    </div>
  );
};

export default Partners;
