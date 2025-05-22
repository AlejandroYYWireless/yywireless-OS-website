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
      className={`h-[300px] flex ${
        flip ? "flex-col-reverse" : "flex-col"
      } justify-between items-center`}
    >
      <div className="p-1 bg-white  w-[170px] relative h-[112px]">
        <div className="border-2 p-1 h-full border-[#369C2A]">
          <div className="flex items-center justify-between gap-1 ">
            <p className="text-3xl font-montserrat text-muted-foreground">
              {year}
            </p>{" "}
            <div className="px-3 py-1 bg-stone-900 text-xs flex flex-col justify-center items-center text-white">
              Event {eventNumber}
            </div>
          </div>
          <p className="text-muted-foreground leading-[1] flex flex-col justify-center  h-[60px] text-xs text-center">
            {text}
          </p>
        </div>
        <Quote className="absolute top-[-10] left-[-10] bg-white rounded-md p-1 text-[#369C2A]" />
        <Quote className="absolute bottom-[-10] right-[-10] bg-white rounded-md p-1 text-[#369C2A]" />
        {flip ? (
          <ChevronDown className="absolute  rounded-full text-[#369C2A] left-[70px] top-[-30]" />
        ) : (
          <ChevronUp className="absolute  rounded-full  text-[#369C2A]  left-[70px] bottom-[-30]" />
        )}
      </div>
      <div>
        <img className="aspect-video object-fill w-[180px]" src={img} />
      </div>
    </div>
  );

  return (
    <div className="hidden relative xl:block">
      <div className="grid grid-cols-6 gap-6 ">
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
          text="Operations expanded to 75 employees, with 
            6 department heads."
          img={"/images/internal/leaders/songgongbo.jpg"}
        />
        <TimeLineTextBox
          year="2025"
          eventNumber="6"
          text="Over 100 employees, 10 departments, 9 managers, & growth rate 
up to 25%-30%."
          img={"/images/internal/leaders/songgongbo.jpg"}
          flip
        />
      </div>
      <div className="absolute top-1/2 z-5 h-1 w-full bg-lime-500" />
    </div>
  );
};

export default Timeline;
