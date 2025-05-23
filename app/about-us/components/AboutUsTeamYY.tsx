import TeamYYHeader from "./AboutUsTeamYY/TeamYYHeader";
import TeamYYMarquee from "./AboutUsTeamYY/TeamYYMarquee";

const AboutUsTeamYY = () => {
  return (
    <div className=" bg-[#1c1c1c]">
      <TeamYYHeader />
      <TeamYYMarquee />
      <div className=" w-full text-end text-white mt-6">
        <span className="text-sm sm:text-base md:text-lg lg:text-xl font-normal uppercase">
          © 2025 yywireless all rights reserved.
        </span>
      </div>
    </div>
  );
};

export default AboutUsTeamYY;
