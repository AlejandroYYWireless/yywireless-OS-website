"use client";
import { useState, useEffect, useRef } from "react";

const Quote = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Animation effect on component load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // TypeScript-safe way to handle video load
  const handleVideoLoad = () => {
    if (videoContainerRef.current) {
      const loadingElement =
        videoContainerRef.current.querySelector(".animate-pulse");
      if (loadingElement) {
        loadingElement.classList.add("hidden");
      }
    }
  };

  return (
    <div className="h-fit py-14 lg:min-h-screen xl:min-h-[90vh] relative flex justify-center items-start pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col w-full xl:flex-row xl:items-center xl:gap-8">
          {/* Quote section - adjusted for balanced height */}
          <div
            className={`w-full px-4 mb-6 xl:mb-0 xl:w-5/12 transform transition-all duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="quote-container h-full flex flex-col justify-center relative bg-gradient-to-br from-[#379C2A] to-[#8BC53E] p-4 sm:p-5 md:p-6 rounded-lg shadow-lg">
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-white font-semibold xl:font-bold italic leading-snug xl:leading-tight mb-4 relative z-10 font-poppins">
                &quot;YYWireless started as a small idea in my basement with
                nothing but determination and a vision. Today, we&apos;ve grown
                into something much bigger - but the foundation remains the
                same: hard work, trust, and innovation.&quot;
              </blockquote>

              <div className="flex justify-end mt-auto">
                <p className="text-base sm:text-lg text-white font-bold uppercase font-poppins">
                  - Ivan Xiao, C.E.O.
                </p>
              </div>
            </div>
          </div>

          {/* Video section - adjusted for balanced height */}
          <div
            className={`w-full px-4 transform transition-all duration-700 delay-300 xl:w-7/12 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div
              ref={videoContainerRef}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              {/* Video placeholder overlay while loading */}
              <div className="absolute inset-0 bg-gray-200 animate-pulse z-0"></div>

              <iframe
                className="w-full md:min-h-[400px] relative z-10"
                src="https://www.youtube.com/embed/jAF9P7glYkE?autoplay=1&mute=1&loop=1&playlist=jAF9P7glYkE&controls=1"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background wave - responsive and animated */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        <img
          className={`w-full transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          src="/images/extraassets/bottomwave.svg"
          alt=""
          role="presentation"
        />
      </div>
    </div>
  );
};

export default Quote;
