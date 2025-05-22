import { ChevronDown, ChevronUp, Quote } from "lucide-react";
import React from "react";

const Timeline = () => {
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
    <div
      className={`h-[380px] flex ${
        flip ? "flex-col-reverse" : "flex-col"
      } justify-between items-center`}
    >
      <div className="p-2 bg-white w-[220px] relative h-[140px]">
        <div className="border-2 p-3 h-full border-[#369C2A]">
          <div className="flex items-center justify-between gap-2 mb-0">
            <p className="text-4xl font-montserrat text-muted-foreground font-bold">
              {year}
            </p>
            <div className="px-3 py-2 bg-stone-800 text-sm flex flex-col justify-center items-center text-white">
              Event {eventNumber}
            </div>
          </div>
          <p className="text-muted-foreground leading-4 flex flex-col justify-center h-[50px] text-sm text-center">
            {text}
          </p>
        </div>
        <Quote className="absolute top-[-12px] left-[-12px] bg-white rounded-md p-2 text-[#369C2A] w-7 h-7" />
        <Quote className="absolute bottom-[-12px] right-[-12px] bg-white rounded-md p-2 text-[#369C2A] w-7 h-7" />
        {flip ? (
          <ChevronDown className="absolute rounded-full text-[#369C2A] left-[90px] top-[-35px] w-7 h-7" />
        ) : (
          <ChevronUp className="absolute rounded-full text-[#369C2A] left-[90px] bottom-[-35px] w-7 h-7" />
        )}
      </div>
      <div>
        <img
          className="aspect-video object-cover w-[240px] h-[135px]"
          src={img}
        />
      </div>
    </div>
  );

  return (
    <div className="hidden relative xl:block">
      <div className="grid grid-cols-6 gap-8">
        <TimeLineTextBox
          year="2009"
          eventNumber="1"
          text="Founded in a basement, a 1-man operation selling on Amazon, eBay & wholesale."
          img={"/images/internal/history/2009.jpg"}
        />
        <TimeLineTextBox
          year="2013"
          eventNumber="2"
          text="Moved to its first location, with 5 employees."
          img={"/images/internal/history/2013.png"}
          flip
        />
        <TimeLineTextBox
          year="2019"
          eventNumber="3"
          text="Moved to its second location, expanding to 25 employees."
          img={"/images/internal/history/2019.jpg"}
        />
        <TimeLineTextBox
          year="2021"
          eventNumber="4"
          text="Powered through COVID, moved to this warehouse, grew to 45 employees."
          img={"/images/internal/history/2021.jpg"}
          flip
        />
        <TimeLineTextBox
          year="2023"
          eventNumber="5"
          text="Operations expanded to 75 employees, with 6 department heads."
          img={"/images/internal/history/2023.jpg"}
        />
        <TimeLineTextBox
          year="2025"
          eventNumber="6"
          text="Over 100 employees, 10 departments, 9 managers, & growth rate up to 25%-30%."
          img={"/images/internal/history/2025.jpg"}
          flip
        />
      </div>
      <div className="absolute top-1/2 z-5 h-1 w-full bg-lime-500" />
    </div>
  );
};

export default Timeline;
