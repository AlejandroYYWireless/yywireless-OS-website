const WhyUsedMatters = () => {
  interface WYMFooterElementProps {
    header: string;
    value: string;
  }

  const WYMFooterElement = ({ header, value }: WYMFooterElementProps) => (
    <div className="flex flex-col text-center">
      <p className="text-white font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        {header}
      </p>
      <p className="text-[#1c1c1c] text-sm sm:text-base md:text-xl xl:text-2xl font-bold">
        {value}
      </p>
    </div>
  );

  return (
    <div className="flex flex-col">
      {/* Main content section - changes from 1 column on mobile to 2 columns on md and up */}
      <div className="flex flex-col md:grid md:grid-cols-2 flex-grow">
        {/* Text content section */}
        <div className="flex flex-col py-6 px-4 sm:py-8 sm:px-5 md:py-10 md:px-6 lg:py-12 xl:place-items-end order-2 md:order-1">
          <h3 className="uppercase mb-2 sm:mb-3 md:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins text-center md:text-right">
            why<span className="font-bold mx-2 md:mx-3 xl:mx-4">used</span>
            matters
          </h3>
          <ul className="list-disc font-montserrat space-y-2 sm:space-y-3 md:space-y-4 text-base sm:text-lg md:text-xl xl:text-2xl max-w-full md:max-w-[600px] pl-5 md:pl-0">
            <li>
              <span className="font-bold">Certified & Reliable</span> - Every
              device is tested and graded for quality assurance.
            </li>
            <li>
              <span className="font-bold">Wholesale & Bulk Pricing</span> -
              Competitive rates for bulk buyers and retail partners.
            </li>
            <li>
              <span className="font-bold">Strong B2B & B2C Presence</span> -
              Serving businesses on platforms like eBay, Amazon, Walmart, and
              Reebelo.
            </li>
            <li>
              <span className="font-bold">Customer-Centric Approach</span> -
              Dedicated to resolving concerns, ensuring compliance with
              marketplace policies, and providing top-tier customer support.
            </li>
          </ul>
        </div>

        {/* Video section */}
        <div className="h-64 sm:h-80 md:h-full order-1 md:order-2">
          <video
            src={"/videos/samplevideo1.mp4"}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
          />
        </div>
      </div>

      {/* Stats footer */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-around w-full bg-gradient-to-br from-[#379C2A] to-[#8BC53E] p-4 sm:p-5 md:p-8 lg:p-12 shadow-lg gap-6 sm:gap-2">
        <WYMFooterElement header="2006" value="Year founded" />
        <WYMFooterElement header="100+" value="Numbers of employees" />
        <WYMFooterElement header="53+" value="Countries, global reach" />
        <div className="flex flex-col text-center sm:text-start">
          <div className="text-white font-poppins text-lg sm:text-xl">
            <p className="font-bold uppercase">smartphones,</p>
            <p className="font-bold uppercase">tablets,</p>
            <p className="font-bold uppercase">accessories:</p>
            <p>Certified Used,</p>
            <p>Refurbished</p>
          </div>
          <p className="text-[#1c1c1c] text-sm sm:text-base md:text-xl xl:text-2xl font-bold">
            Product range
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsedMatters;
