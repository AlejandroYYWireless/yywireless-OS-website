import { Mail, Phone } from "lucide-react";

const Step4 = () => {
  const SalesRepCard = ({
    title,
    image,
    name,
    text,
    waqr,
    email,
    phonenumber,
  }: {
    title: string;
    image: string;
    name: string;
    text: string;
    waqr: string;
    email: string;
    phonenumber: string;
  }) => {
    return (
      <div className="bg-gradient-to-br from-[#379C2A] to-[#8BC53E] p-4 text-white font-bold text-center rounded-lg shadow-lg w-full max-w-[280px] mx-auto">
        {/* Title */}
        <div className="text-sm font-bold mb-3 uppercase tracking-wide">
          {title}
        </div>

        {/* Profile Image */}
        <div className="mb-3">
          <div className="w-40 h-40 mx-auto bg-white p-1 rounded-lg">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Name */}
        <div className="text-base font-bold mb-3 uppercase tracking-wider">
          {name}
        </div>

        {/* Description Text */}
        <div className="text-md  mb-3 font-medium">{text}</div>

        {/* QR Code */}
        <div className="mb-3">
          <div className="w-12 h-12 mx-auto bg-white p-1 rounded">
            <img
              src={waqr}
              alt="QR Code"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-1 text-xs">
          <div className="flex items-center justify-center gap-1">
            <Mail size={12} className="text-white" />
            <a href={`mailto:${email}?subject=Business%Inquiry`}>
              <span className="font-medium break-all">{email}</span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Phone size={12} className="text-white" />
            <span className="font-medium">{phonenumber}</span>
          </div>
        </div>
      </div>
    );
  };

  const MiddleCard = () => {
    return (
      <div className="relative w-full max-w-[300px] ">
        {/* Main Card */}
        <div className="bg-[#1c1c1c] p-4 rounded-lg text-white">
          <img
            src="/images/wholesale_page/wsmwa.png"
            alt=""
            className="w-full h-auto mb-4"
          />
          {/* Title */}
          <div className="text-center mb-2">
            <h3 className="text-lg font-bold uppercase">
              CONTACT THE TEAM HERE
            </h3>
            <p className="text-md">FOR ALL GENERAL SALES QUESTIONS</p>
          </div>

          {/* Divider */}
          <div className="text-center mb-2">
            <span className="text-[#8BC53E] font-bold text-lg">or</span>
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <h4 className="text-xl font-bold uppercase">
              GET OUR WHOLESALE DEALS FIRST BY EMAIL
            </h4>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="bg-[#1c1c1c] 
     p-4 sm:p-6"
    >
      <h1
        className="green-outline uppercase font-poppins 
                          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                          drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                          sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                          lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                          text-[#8aeb6a] mb-6 lg:mb-8 text-center font-bold"
      >
        The Wholesale Team
      </h1>

      {/* Cards Layout */}
      <div className="mt-8 lg:mt-12">
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden lg:flex items-center place-content-center place-items-center justify-center gap-6">
          {/* Left Cards */}
          <div className="grid grid-cols-1 gap-4 place-content-center">
            <SalesRepCard
              title="WHOLESALE MANAGER"
              image="/images/wholesale_page/nick.jpeg"
              name="NICK KALIANOFF"
              text="Leads our team with strategy and focus, ensuring clients get reliable service, top-tier products, and long-term value."
              waqr="/images/wholesale_page/nickwa.jpg"
              email="nick@yywireless.com"
              phonenumber="+1 515 723 - 9908"
            />
            <SalesRepCard
              title="SALES REPRESENTATIVE"
              image="/images/wholesale_page/luan.jpeg"
              name="Luan Pham"
              text="Hardworking, dependable, and deeply experienced - Luan's commitment makes him a favorite among our partners."
              waqr="/images/wholesale_page/nickwa.jpg"
              email="luan@yywireless.com"
              phonenumber="+1 515 822 - 0964"
            />
          </div>

          {/* Middle Card */}
          <MiddleCard />

          {/* Right Cards */}
          <div className="grid grid-cols-1  gap-4">
            <SalesRepCard
              title="SALES REPRESENTATIVE"
              image="/images/wholesale_page/blaik.png"
              name="Blaik Woellhof"
              text="Blaik brings high energy and a problem-solving mindset to every interaction. His proactive communication ensures customers always feel supported and confident."
              waqr="/images/wholesale_page/blaikwa.png"
              email="blaik@yywireless.com"
              phonenumber="+1 515 305 - 8272"
            />
            <SalesRepCard
              title="SALES REPRESENTATIVE"
              image="/images/wholesale_page/karlaa.png"
              name="Karla Contreras"
              text="With a strong eye for detail and a client-first approach, Karla consistently delivers smooth transactions and builds lasting relationships across the board."
              waqr="/images/wholesale_page/karlawa.png"
              email="karla@yywireless.com"
              phonenumber="+1 515 305 - 8292"
            />
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden space-y-6">
          {/* First Row - 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SalesRepCard
              title="WHOLESALE MANAGER"
              image="/images/wholesale_page/nick.jpeg"
              name="NICK KALIANOFF"
              text="Leads our team with strategy and focus, ensuring clients get reliable service, top-tier products, and long-term value."
              waqr="/images/wholesale_page/nickwa.jpg"
              email="nick@yywireless.com"
              phonenumber="+1 515 723 - 9908"
            />
            <SalesRepCard
              title="SALES REPRESENTATIVE"
              image="/images/wholesale_page/luan.jpeg"
              name="Luan Pham"
              text="Hardworking, dependable, and deeply experienced - Luan's commitment makes him a favorite among our partners."
              waqr="/images/wholesale_page/nickwa.jpg"
              email="luan@yywireless.com"
              phonenumber="+1 515 822 - 0964"
            />
          </div>

          {/* Middle Card - Full width */}
          <div className="flex justify-center">
            <MiddleCard />
          </div>

          {/* Second Row - 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SalesRepCard
              title="SALES REPRESENTATIVE"
              image="/images/wholesale_page/blaik.png"
              name="Blaik Woellhof"
              waqr="/images/wholesale_page/blaikwa.png"
              email="blaik@yywireless.com"
              text="Blaik brings high energy and a problem-solving mindset to every interaction. His proactive communication ensures customers always feel supported and confident."
              phonenumber="+1 515 305 - 8272"
            />
            <SalesRepCard
              title="SALES REPRESENTATIVE"
              image="/images/wholesale_page/karlaa.png"
              name="Karla Contreras"
              text="With a strong eye for detail and a client-first approach, Karla consistently delivers smooth transactions and builds lasting relationships across the board."
              waqr="/images/wholesale_page/karlawa.png"
              email="karla@yywireless.com"
              phonenumber="+1 515 305 - 8292"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
