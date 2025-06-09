import Image from "next/image";

const Step6 = () => {
  const TestimonialCard = ({
    name,
    quote,
  }: {
    name: string;
    quote: string;
  }) => {
    return (
      <div className="bg-stone-700 backdrop-blur-sm rounded-lg p-6 max-w-sm">
        <h3 className="text-white font-bold text-lg mb-2">{name}</h3>

        {/* 5 stars */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-lime-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <p className="text-gray-200 text-sm leading-relaxed">"{quote}"</p>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/services_page/aistars.png"}
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Green curved top section */}
      <div className="absolute top-0 left-0 right-0 h-20 lg:h-32 z-5">
        <svg viewBox="0 0 800 200" className="w-full h-full">
          <path d="M0,0 Q400,200 800,0 L800,0 L0,0 Z" fill="#65a30d" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left section - Title and Benefits */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-12">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-lime-500 mb-8 lg:mb-12">
            Why Partner With YY
          </h1>

          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center text-white text-lg lg:text-xl">
              <span className="text-lime-500 text-2xl mr-4">≫</span>
              Fast turnaround
            </div>
            <div className="flex items-center text-white text-lg lg:text-xl">
              <span className="text-lime-500 text-2xl mr-4">≫</span>
              Quality control
            </div>
            <div className="flex items-center text-white text-lg lg:text-xl">
              <span className="text-lime-500 text-2xl mr-4">≫</span>
              U.S.-based operations
            </div>
            <div className="flex items-center text-white text-lg lg:text-xl">
              <span className="text-lime-500 text-2xl mr-4">≫</span>
              Scalable support
            </div>
            <div className="flex items-center text-white text-lg lg:text-xl">
              <span className="text-lime-500 text-2xl mr-4">≫</span>
              Certified technicians
            </div>
            <div className="flex items-center text-white text-lg lg:text-xl">
              <span className="text-lime-500 text-2xl mr-4">≫</span>
              Largest Inventory Selection
            </div>
          </div>
        </div>

        {/* Right section - Testimonials */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            <TestimonialCard
              name="Fita Kareta"
              quote="I have been in the telecom industry for the last 12 years, and for the past 7 years, YY Wireless has been my only vendor. During this time, I've had the opportunity to meet and talk to most of the teams, and they are amazing. I can't say enough about their product variety, quality, and shipping speed. I highly recommend YY Wireless to anyone looking for quality phones and other gadget suppliers."
            />
            <TestimonialCard
              name="Tran Nguyen"
              quote="We've been doing business with them for over 10 years, and they have never disappointed us from product quality to pricing. Their product availability is impressive, offering everything from affordable options to the latest models always in stock. Give them a try to help grow your business."
            />
            <TestimonialCard
              name="Meir Levi"
              quote="Great experience with YYWireless. Good service and competitive pricing. My favorite wholesaler to work with."
            />
            <TestimonialCard
              name="DNCL TECHZONE"
              quote="Great cellphone wholesale company to work with! Everything ship out same business day!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6;
