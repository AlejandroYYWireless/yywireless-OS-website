const Quote = () => {
  return (
    <div className="min-h-screen relative flex justify-center items-start pt-16 md:pt-24 lg:pt-[120px] px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 items-start">
          {/* Quote section - full width on mobile, 2 columns on large screens */}
          <div className="col-span-1 lg:col-span-2 z-10 text-xl sm:text-2xl lg:text-3xl font-semibold flex flex-col">
            <p className="mb-8 sm:mb-12 lg:mb-24 self-start">
              &quot;YYWireless started as a small idea in my basement with
              nothing but determination and a vision. Today, we&apos;ve grown
              into something much bigger - but the foundation remains the same:
              hard word, trust, and innovation.&quot;
            </p>
            <p>- Ivan Xiao, C.E.O</p>
          </div>

          {/* Video section - full width on mobile, 3 columns on large screens */}
          <div className="col-span-1 lg:col-span-3 lg:ml-10 z-10 place-self-center w-full">
            <video
              className="w-full lg:max-w-[50vw]"
              src={"/videos/herovideo.mp4"}
              controls
            />
          </div>
        </div>
      </div>

      {/* Bottom wave image */}
      <img
        className="w-full bottom-0 h-[120px] sm:h-[180px] lg:h-[240px] absolute"
        src="/images/extraassets/bottomwave.svg"
        alt="Decorative wave design"
      />
    </div>
  );
};

export default Quote;
