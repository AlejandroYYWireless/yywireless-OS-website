const Quote = () => {
  return (
    <div className="min-h-screen relative flex justify-center items-start pt-16 md:pt-24 lg:pt-[120px] px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 items-start">
          {/* Quote section - full width on mobile, 2 columns on large screens */}
          <div className="col-span-1 h-full lg:col-span-2 z-10 text-xl sm:text-2xl lg:text-3xl font-semibold flex flex-col">
            {/* Quote with gradient background */}
            <div className="h-full  text-right flex flex-col justify-between font-poppins  self-start p-4 py-2 uppercase italic lg:text-4xl  rounded-0 text-white bg-gradient-to-br from-[#379C2A] to-[#8BC53E] shadow-lg font-bold">
              <p className="leading-relaxed">
                &quot;YYWireless started as a small idea in my basement with
                nothing but determination and a vision. Today, we&apos;ve grown
                into something much bigger - but the foundation remains the
                same: hard work, trust, and innovation.&quot;
              </p>
              <p className="mt-4">- Ivan Xiao, C.E.O.</p>
            </div>
          </div>

          {/* Video section - full width on mobile, 3 columns on large screens */}
          <div className="col-span-1 h-full lg:col-span-3 lg:ml-10 z-10 place-self-center">
            <video
              className="h-full"
              src={"/videos/herovideo.mp4"}
              loop
              autoPlay
              muted
              controls
            />
          </div>
        </div>
      </div>

      {/* Bottom wave image */}
      <img
        className="bottom-0 absolute"
        src="/images/extraassets/bottomwave.svg"
        alt="Decorative wave design"
      />
    </div>
  );
};

export default Quote;
