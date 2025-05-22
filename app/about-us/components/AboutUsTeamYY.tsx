import TeamYYHeader from "./AboutUsTeamYY/TeamYYHeader";
import TeamYYMarquee from "./AboutUsTeamYY/TeamYYMarquee";

const AboutUsTeamYY = () => {
  return (
    <div className="py-12 bg-[#1c1c1c]">
      <TeamYYHeader />
      <TeamYYMarquee />
      <div className="relative w-full text-end text-white mt-6 mb-2">
        <span className="text-sm sm:text-base md:text-lg lg:text-xl font-normal uppercase">
          © 2025 yywireless all rights reserved.
        </span>
      </div>{" "}
    </div>
  );
};

export default AboutUsTeamYY;
