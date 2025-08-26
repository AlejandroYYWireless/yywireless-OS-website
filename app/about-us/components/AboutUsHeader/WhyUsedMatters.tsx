const WhyUsedMatters = () => {
  interface WYMFooterElementProps {
    header: string;
    value: string;
  }

  const WYMFooterElement = ({ header, value }: WYMFooterElementProps) => (
    <div className="flex flex-col text-center mb-6 sm:mb-0">
      <p className="text-white font-poppins text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
        {header}
      </p>
      <p className="text-[#1c1c1c] text-base sm:text-lg md:text-xl xl:text-2xl font-bold">
        {value}
      </p>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content section - changes from 1 column on mobile to 2 columns on md and up */}
      <div className="flex flex-col md:grid md:grid-cols-2 flex-grow">
        {/* Text content section */}
        <div className="flex flex-col py-8 px-5 md:py-10 md:px-6 lg:py-12 xl:place-items-end order-2 md:order-1">
          <h3 className="uppercase mb-4 md:mb-6 text-4xl lg:text-5xl  xl:text-7xl font-poppins text-center md:text-right leading-tight">
            why<span className="font-bold mx-2 md:mx-3 xl:mx-4">used</span>
            matters
          </h3>
          <ul className="list-disc font-montserrat space-y-3 md:space-y-4 text-lg sm:text-xl xl:text-2xl max-w-full md:max-w-[600px] pl-6 md:pl-0 leading-relaxed">
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
        <div className="h-72 sm:h-96 md:h-full order-1 md:order-2">
          <video
            src={"/videos/samplevideo1.mp4"}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>

      {/* Stats footer */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-around w-full bg-gradient-to-br from-[#379C2A] to-[#8BC53E] p-6 md:p-8 lg:p-12 shadow-lg gap-8 sm:gap-4">
        <WYMFooterElement header="2009" value="Year founded" />
        <WYMFooterElement header="100+" value="Numbers of employees" />
        <WYMFooterElement header="53+" value="Countries, global reach" />
        <div className="flex flex-col text-center sm:text-start mb-4 sm:mb-0">
          <div className="text-white font-poppins text-xl">
            <p className="font-bold uppercase">smartphones,</p>
            <p className="font-bold uppercase">tablets,</p>
            <p className="font-bold uppercase">accessories:</p>
            <p>Certified Used,</p>
            <p>Refurbished</p>
          </div>
          <p className="text-[#1c1c1c] text-base sm:text-lg md:text-xl xl:text-2xl font-bold mt-2">
            Product range
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsedMatters;
