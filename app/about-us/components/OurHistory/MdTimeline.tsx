import { Quote } from "lucide-react";

const MdTimeline = () => {
  const TimeLineTextBox = ({
    year,
    eventNumber,
    text,
    img,
    flip,
  }: {
    year: string;
    eventNumber: string;
    text: string;
    img: string;
    flip?: boolean;
  }) => (
    <div className="mb-12">
      <div
        className={`gap-6 flex ${
          flip ? "flex-row-reverse" : "flex-row"
        } justify-between items-center`}
      >
        <div className="p-2 bg-white w-[320px] relative h-full">
          <div className="border-2 p-4 h-full border-[#369C2A]">
            <div className="flex items-center justify-between gap-2 mb-4">
              <p className="text-4xl font-montserrat text-muted-foreground font-bold">
                {year}
              </p>
              <div className="px-4 py-2 bg-stone-900 text-sm flex flex-col justify-center items-center text-white">
                Event {eventNumber}
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed flex flex-col justify-center h-[80px] text-sm">
              {text}
            </p>
          </div>
          <Quote className="absolute top-[-12px] left-[-12px] bg-white rounded-md p-2 text-[#369C2A] w-8 h-8" />
          <Quote className="absolute bottom-[-12px] right-[-12px] bg-white rounded-md p-2 text-[#369C2A] w-8 h-8" />
        </div>
        <div>
          <img
            className="aspect-video object-cover w-[500px] h-[280px]"
            src={img}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="hidden md:block xl:hidden py-8">
      <TimeLineTextBox
        year="2009"
        eventNumber="1"
        text="Founded in a basement, a 1-man operation selling on Amazon, eBay & wholesale."
        img={"/images/internal/leaders/songgongbo.jpg"}
      />
      <TimeLineTextBox
        year="2013"
        eventNumber="2"
        text="Moved to its first location, with 5 employees."
        img={"/images/internal/leaders/songgongbo.jpg"}
        flip
      />
      <TimeLineTextBox
        year="2019"
        eventNumber="3"
        text="Moved to its second location, expanding to 25 employees."
        img={"/images/internal/leaders/songgongbo.jpg"}
      />
      <TimeLineTextBox
        year="2021"
        eventNumber="4"
        text="Powered through COVID, moved to this warehouse, grew to 45 employees."
        img={"/images/internal/leaders/songgongbo.jpg"}
        flip
      />
      <TimeLineTextBox
        year="2023"
        eventNumber="5"
        text="Operations expanded to 75 employees, with 6 department heads."
        img={"/images/internal/leaders/songgongbo.jpg"}
      />
      <TimeLineTextBox
        year="2025"
        eventNumber="6"
        text="Over 100 employees, 10 departments, 9 managers, & growth rate up to 25%-30%."
        img={"/images/internal/leaders/songgongbo.jpg"}
        flip
      />
    </div>
  );
};

export default MdTimeline;
