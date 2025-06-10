import MdTimeline from "../OurHistory/MdTimeline";
import SmTimeline from "../OurHistory/SmTimeline";
import Timeline from "../OurHistory/Timeline";

const OurHistory = () => {
  return (
    <div className="bg-[#1c1c1c] h-fit py-[120px] flex flex-col items-center pt-[170px] overflow-x-hidden">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                         drop-shadow-[0px_0px_8px_rgba(138,253,106,0.7)] sm:drop-shadow-[0px_0px_14px_rgba(138,253,106,0.8)]
                         text-[#8aeb6a] font-poppins tracking-wider font-normal"
          >
            Our history
          </h1>
          <p
            className="text-lg sm:text-xl px-4 md:text-2xl lg:text-3xl mt-4 mb-4 sm:mt-6
                         drop-shadow-[0px_0px_8px_rgba(138,253,106,0.7)] sm:drop-shadow-[0px_0px_14px_rgba(138,253,106,0.8)]
                         text-[#b7eb6a] font-poppins tracking-wider font-semibold"
          >
            From 2009 to Today: How YYWireless Built Its Future
          </p>
          <p className="font-montserrat text-white text-xl sm:text-2xl max-w-4xl mx-auto">
            What started as a one-person operation has grown into one of North
            America&apos;s most reputable electronics distributors. Through
            dedication, innovation, and teamwork, YYWireless continues to evolve
            and lead the industry. Explore our journey and the milestones that
            shaped who we are today.
          </p>
        </div>
      </div>
      <div className="mt-8 w-full overflow-x-hidden">
        <Timeline />
        <SmTimeline />
        <MdTimeline />
      </div>
    </div>
  );
};

export default OurHistory;
