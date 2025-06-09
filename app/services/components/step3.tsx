import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Step3 = () => {
  const ServicePopup = ({
    img,
    text,
    title,
    header,
    subtext,
  }: {
    img: string;
    text: string;
    title: string;
    header: string;
    subtext?: string;
  }) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="relative border-lime-600 border-2 aspect-square cursor-pointer w-48 h-48"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col text-white items-center justify-center z-10">
              <p className="text-white font-bold text-xl font-montserrat text-center px-4">
                {title}
              </p>
              {subtext && <p className="text-sm">{subtext}</p>}
            </div>
          </div>
        </DialogTrigger>
        <DialogContent
          className="bg-black/95 border-lime-500 text-white max-w-2xl"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>
          <div className="relative z-10">
            <DialogHeader>
              <DialogTitle
                className="green-outline capitalize font-poppins 
                          text-2xl text-2xl
                          drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                          sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                          lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                          text-[#8aeb6a] mb-4"
              >
                {header}
              </DialogTitle>
            </DialogHeader>
            <p className="text-white text-lg leading-relaxed font-poppins">
              {text}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background image with quality improvements */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/services_page/wires.png"}
          alt="background"
          fill
          className="object-cover"
          quality={100}
          priority={true}
          unoptimized={false}
          sizes="100vw"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 py-12">
        <div className="text-center mb-8">
          <h1
            className="green-outline uppercase font-poppins 
                       text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                       drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                       sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                       lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                       text-[#8aeb6a]"
          >
            enterprise services
          </h1>
        </div>

        <div className="w-full max-w-6xl">
          {/* Desktop: 3 columns top, 2 columns bottom */}
          <div className="hidden md:block">
            {/* Top row - 3 items */}
            <div className="grid grid-cols-3 gap-6 mb-6 justify-items-center">
              <ServicePopup
                text="Advanced software troubleshooting and repair services for complex enterprise applications and systems."
                img={"/images/services_page/metalphone.png"}
                header="Advanced Software Repair"
                title="Advanced Software Repair"
              />
              <ServicePopup
                text="Professional carrier unlocking services for all major networks and device types."
                img={"/images/services_page/metallock.png"}
                header="Carrier Unlocking"
                title="Carrier Unlocking"
              />
              <ServicePopup
                text="High-volume device polishing and restoration services for enterprise clients."
                img={"/images/services_page/metalrock.png"}
                header="Device Polishing"
                title="Device Polishing"
                subtext="(High Volume)"
              />
            </div>
            {/* Bottom row - 2 items centered */}
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto justify-items-center">
              <ServicePopup
                text="WISE certified hardware repair services for mobile devices and enterprise equipment."
                img={"/images/services_page/metalphone.png"}
                header="Hardware Repairs"
                title="Hardware Repairs"
                subtext="(WISE Certified)"
              />
              <ServicePopup
                text="Mobile Device Management setup and ongoing support for enterprise environments."
                img={"/images/services_page/metalmdm.png"}
                header="MDM Setup & Support"
                title="MDM Setup & Support"
              />
            </div>
          </div>

          {/* Mobile/Tablet: Single column */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
            <ServicePopup
              text="Advanced software troubleshooting and repair services for complex enterprise applications and systems."
              img={"/images/services_page/metalphone.png"}
              header="Advanced Software Repair"
              title="Advanced Software Repair"
            />
            <ServicePopup
              text="Professional carrier unlocking services for all major networks and device types."
              img={"/images/services_page/unlock.png"}
              header="Carrier Unlocking"
              title="Carrier Unlocking"
            />
            <ServicePopup
              text="High-volume device polishing and restoration services for enterprise clients."
              img={"/images/services_page/polishing.png"}
              header="Device Polishing"
              title="Device Polishing (High Volume)"
            />
            <ServicePopup
              text="WISE certified hardware repair services for mobile devices and enterprise equipment."
              img={"/images/services_page/hardware.png"}
              header="Hardware Repairs"
              title="Hardware Repairs (WISE Certified)"
            />
            <ServicePopup
              text="Mobile Device Management setup and ongoing support for enterprise environments."
              img={"/images/services_page/mdm.png"}
              header="MDM Setup & Support"
              title="MDM Setup & Support"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
