import { Quote } from "lucide-react";

const SmTimeline = () => {
  const TimeLineTextBox = ({
    year,
    text,
    img,
    flip,
  }: {
    year: string;
    text: string;
    img: string;
    flip?: boolean;
  }) => (
    <div className="mb-8">
      <div className="p-1 bg-white w-full relative h-full">
        <div className="border-2 p-3 h-full border-[#369C2A]">
          <div
            className={`gap-3 flex ${
              flip ? "flex-row-reverse" : "flex-row"
            } items-center`}
          >
            {/* Text Section */}
            <div className="flex-1">
              <p className="text-2xl font-montserrat text-muted-foreground font-bold mb-2">
                {year}
              </p>
              <p className="text-muted-foreground leading-relaxed text-xs">
                {text}
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-shrink-0">
              <img
                className="aspect-video object-cover w-[140px] h-[100px] sm:w-[160px] sm:h-[120px]"
                src={img}
              />
            </div>
          </div>
        </div>
        <Quote className="absolute top-[-8px] left-[-8px] bg-white rounded-md p-1 text-[#369C2A] w-5 h-5" />
        <Quote className="absolute bottom-[-8px] right-[-8px] bg-white rounded-md p-1 text-[#369C2A] w-5 h-5" />
      </div>
    </div>
  );

  return (
    <div className="block md:hidden px-4 py-6">
      <TimeLineTextBox
        year="2009"
        text="Founded in a basement, a 1-man operation selling on Amazon, eBay & wholesale."
        img={"/images/internal/history/2009.jpg"}
      />
      <TimeLineTextBox
        year="2013"
        text="Moved to its first location, with 5 employees."
        img={"/images/internal/history/2013.png"}
        flip
      />
      <TimeLineTextBox
        year="2019"
        text="Moved to its second location, expanding to 25 employees."
        img={"/images/internal/history/2019.jpg"}
      />
      <TimeLineTextBox
        year="2021"
        text="Powered through COVID, moved to this warehouse, grew to 45 employees."
        img={"/images/internal/history/2021.jpg"}
        flip
      />
      <TimeLineTextBox
        year="2023"
        text="Operations expanded to 75 employees, with 6 department heads."
        img={"/images/internal/history/2023.jpg"}
      />
      <TimeLineTextBox
        year="2025"
        text="Over 100 employees, 10 departments, 9 managers, & growth rate up to 25%-30%."
        img={"/images/internal/history/2025.jpg"}
        flip
      />
    </div>
  );
};

export default SmTimeline;
