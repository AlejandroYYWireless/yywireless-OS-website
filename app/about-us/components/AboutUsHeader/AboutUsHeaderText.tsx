const AboutUsHeaderText = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col items-center">
        {/* Main Heading */}
        <h1
          className="green-outline uppercase mb-4 sm:mb-5 md:mb-6 font-poppins 
                     text-3xl sm:text-5xl md:text-6xl lg:text-7xl
                     drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                     sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                     lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,0.5)] 
                     text-[#8aeb6a] font-bold tracking-wide"
        >
          get to know us
        </h1>

        {/* Established Date */}
        <p className="text-white text-xl sm:text-2xl font-bold drop-shadow-[0px_0px_14px_rgba(255,255,255,1)] mb-6 sm:mb-8">
          EST. 2006
        </p>

        {/* Description Box */}
        <div className="p-3 sm:p-4 md:p-5 bg-stone-700/60 rounded-sm sm:rounded w-full max-w-3xl">
          <p
            className="text-lime-500 font-poppins text-center
                       text-base sm:text-xl md:text-2xl font-normal 
                       px-2 sm:px-6 md:px-8 relative z-10 leading-relaxed"
          >
            YYWireless is a leading electronics distributor driven by our
            mindset of wholesale to retail -{" "}
            <span className="font-bold">
              {" "}
              Value Added One Device at a Time.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeaderText;
