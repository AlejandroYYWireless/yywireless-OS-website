import Image from "next/image";

const NoteQuip = ({ text, iconLoc }: { text: string, iconLoc: string }) => {
  return (
    <div className="rounded-4xl bg-[#828282] p-1 max-w-[400px]">
      <div className="flex items-center text-center flex-col">
        <Image
          src={`/images/assurant_page/${iconLoc}.png`}
          alt="an icon representing speed, location, metrics or a star"
          width={400}
          height={400}
          className="h-20 w-20"
          priority
        />
        <p className="pb-4 px-4 leading-5 italic text-white text-lg  font-lexendmega font-[200]">
          {text}
        </p>
      </div>
    </div>
  )
}


const AssurantHeader = () => {
  return (
    <div className="relative text-white min-h-[50vh] pt-12 bg-black w-full overflow-hidden pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-12 2xl:pb-4">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/assurant_page/whitelines1.png"}
          alt="background"
          width={720}
          height={1080}
          className="object-cover w-full h-full"

          priority
        />
      </div>

      <div className="relative z-[1] flex flex-col gap-4 items-center h-full w-full">
        <div className="pt-[60px] xl:pt-[80px] 2xl:pt-[100px]">
          <h1
            className="green-outline uppercase font-montserrat text-base
                     md:text-2xl lg:text-3xl
                     drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                     sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                     lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                     text-[#8aeb6a] font-semibold"
          >
            we are yywireless
          </h1>

        </div>
        <Image
          src={"/images/internal/YYWirelessSmallLight.svg"}
          alt="image of the company logo"
          width={120}
          height={120}
          className="mb-4 sm:mb-8 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px]"
          priority
        />
        <div className="leading-0.5 text-center px-4">

          <p
            className="uppercase leading-4 tracking-wide font-montserrat text-base
             md:text-2xl lg:text-3xl italic
             drop-shadow-[0px_0px_4px_rgba(255,255,255,0.8)] 
             sm:drop-shadow-[0px_0px_8px_rgba(255,255,255,0.8)]
             lg:drop-shadow-[0px_0px_10px_rgba(255,255,255,.9)] 
             text-white font-semibold"
          >let us be your</p>

          <p
            className="green-outline tracking-[.4em] uppercase font-montserrat text-xl
             md:text-2xl lg:text-3xl xl:text-5xl
             drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
             sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
             lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
             text-[#8aeb6a] font-bold italic"
          >assurant</p>

          <p
            className="uppercase font-montserrat text-2xl
             md:text-2xl lg:text-3xl xl:text-6xl italic
             drop-shadow-[0px_0px_4px_rgba(255,255,255,0.8)] 
             sm:drop-shadow-[0px_0px_8px_rgba(255,255,255,0.8)]
             lg:drop-shadow-[0px_0px_8px_rgba(255,255,255,1)] 
             text-white leading-4 tracking-[.04em]"
          >authorized</p>


          <p
            className="green-outline tracking-[.45em] uppercase font-montserrat text-xl
             md:text-2xl lg:text-3xl xl:text-5xl
             drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
             sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
             lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
             text-[#8aeb6a] font-bold italic"
          >reseller</p>
        </div>

        <Image
          src={"/images/assurant_page/electronics1.png"}
          alt="image of some electronics we sell at our company"
          width={600}
          height={500}
          className="max-w-[90%] sm:max-w-full h-auto"
        />
        <p
          className="text-lg uppercase  sm:text-xl px-4 md:text-4xl lg:text-7xl mt-4 mb-4 sm:mt-6
                       drop-shadow-[0px_0px_8px_rgba(138,253,106,0.7)] sm:drop-shadow-[0px_0px_14px_rgba(138,253,106,0.8)]
                       text-[#b7eb6a] font-poppins tracking-wider font-semibold"
        >
          why choose us?
        </p>
        <div className="gap-4 sm:gap-8 grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-0">
          <NoteQuip text="Founded in 2009, we are a leading wholesale distributor of new, pre-owned, and certified mobile devices, supporting businesses and retailers with reliable inventory and logistics solutions." iconLoc="bullseye1" />
          <NoteQuip iconLoc="pin1" text="Based in Clive, Iowa, we offer U.S.-based operations, faster response times, easier communication, and closer logistical support—giving our partners a strong advantage over foreign or remote-only resellers." />
          <NoteQuip iconLoc="graph1" text="We maintain 100,000+ devices in stock, process 5,000 daily, and ensure rigorous testing and certified data wiping—delivering reliable inventory and fast turnaround to support quality-driven reseller programs." />
          <NoteQuip iconLoc="star1" text="We provide value-added services beyond device sales, including repairs, unlocking, MDM setup, and certified quality control—helping streamline operations and enhance customer offerings." />
        </div>
      </div>
    </div>
  )
};

export default AssurantHeader;
