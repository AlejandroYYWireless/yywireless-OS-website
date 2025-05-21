import AboutUsHeader from "./components/AboutUsHeader";
import MeetTheTeam from "./components/AboutUsHeader/MeetTheTeam";
import OurHistory from "./components/AboutUsHeader/OurHistory";
import WhoWeAre from "./components/AboutUsHeader/WhoWeAre";
import WhyUsedMatters from "./components/AboutUsHeader/WhyUsedMatters";

const Page = () => {
  return (
    <div>
      <div className="relative">
        <AboutUsHeader />
        <img
          className="w-full z-2 absolute bottom-[-200px]"
          src="/images/assets/ourstory.svg"
          alt="Decorative top wave"
        />{" "}
      </div>
      <div className="relative">
        <WhoWeAre />
        <img
          className="w-full z-2 absolute bottom-[-450px]"
          src="/images/assets/whowearebottom.svg"
          alt="Decorative top wave"
        />{" "}
      </div>
      <div className="relative">
        <OurHistory />
        <img
          className="w-full z-2 absolute bottom-[-275px]"
          src="/images/assets/meettheteam.svg"
          alt="Decorative top wave"
        />{" "}
      </div>
      <div>
        <MeetTheTeam />
      </div>
      <div>
        <WhyUsedMatters />
      </div>
    </div>
  );
};

export default Page;
