const TeamYYHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:space-x-24 items-center w-full space-y-6 lg:space-y-0 px-4">
      <h1
        className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                   drop-shadow-[0px_0px_8px_rgba(138,253,106,0.7)] sm:drop-shadow-[0px_0px_14px_rgba(138,253,106,0.8)]
                   text-[#8aeb6a] font-poppins tracking-wider font-normal text-center lg:text-left"
      >
        Team YY
      </h1>
      <p className="text-white text-lg sm:text-xl lg:text-2xl font-montserrat max-w-2xl text-center lg:text-left">
        We&apos;re proud to spotlight the talent, passion, and personalities
        that make us who we are
      </p>
    </div>
  );
};

export default TeamYYHeader;
