import AboutUsHeader from "./components/AboutUsHeader";
import MeetTheTeam from "./components/AboutUsHeader/MeetTheTeam";
import OurHistory from "./components/AboutUsHeader/OurHistory";
import WhoWeAre from "./components/AboutUsHeader/WhoWeAre";
import WhyUsedMatters from "./components/AboutUsHeader/WhyUsedMatters";
import AboutUsTeamYY from "./components/AboutUsTeamYY";

const Page = () => {
  return (
    <div>
      <div className="relative">
        <AboutUsHeader />
        <img
          className="w-full z-2 absolute bottom-[-40px] sm:bottom-[-50px] md:bottom-[-70px] lg:bottom-[-120px] xl:bottom-[-200px]"
          src="/images/assets/ourstory.svg"
          alt="Decorative top wave"
        />
      </div>
      <div className="relative">
        <WhoWeAre />
        <img
          className="w-full z-2 absolute bottom-[-110px] sm:bottom-[-170px] md:bottom-[-180px] lg:bottom-[-270px] xl:bottom-[-300px] 2xl:bottom-[-320px]"
          src="/images/assets/whowearebottom.svg"
          alt="Decorative top wave"
        />
      </div>
      <div className="relative">
        <OurHistory />
        <img
          className="w-full z-2 absolute bottom-[-130px] sm:bottom-[-180px] md:bottom-[-240px] lg:bottom-[-275px] xl:bottom-[-150px] 2xl:bottom-[-275px]"
          src="/images/assets/meettheteam.svg"
          alt="Decorative top wave"
        />
      </div>
      <div>
        <MeetTheTeam />
      </div>
      <div>
        <WhyUsedMatters />
      </div>
      <div>
        <AboutUsTeamYY />
      </div>
    </div>
  );
};

export default Page;
