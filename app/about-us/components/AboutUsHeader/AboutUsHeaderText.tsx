const AboutUsHeaderText = () => {
  return (
    <div>
      <div>
        <h1
          className="green-outline uppercase mb-4 font-poppins 
                     text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                     drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                     sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                     lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                     text-[#8aeb6a] font-bold"
        >
          get to know us
        </h1>
        <p className="text-white text-2xl font-bold drop-shadow-[0px_0px_14px_rgba(255,255,255,1)]">
          EST. 2006
        </p>

        <div className="p-2 bg-stone-700/60">
          <p
            className="text-lime-500 font-poppins text-center mt-2 sm:mt-3 md:mt-4 
                      text-xs sm:text-base md:text-xl lg:text-2xl font-normal 
                      px-1 sm:px-4 md:px-6 relative z-10"
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
