import { div } from "framer-motion/client";
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
      <div className="bg-gradient-to-br from-[#379C2A] to-[#8BC53E] p-4 text-white font-bold text-center rounded-lg shadow-lg w-56">
        {/* Title */}
        <div className="text-sm font-bold mb-3 uppercase tracking-wide">
          {title}
        </div>

        {/* Profile Image */}
        <div className="mb-3">
          <div className="w-20 h-20 mx-auto bg-white p-1 rounded-lg">
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
        <div className="text-xs leading-relaxed mb-3 font-medium">{text}</div>

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
            <span className="font-medium">{email}</span>
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
      <div className="relative">
        {/* Main Card */}
        <div className="bg-[#1c1c1c] p-4 rounded-lg text-white shadow-lg w-64">
          <img src="/images/wholesale_page/wsmwa.png" alt="" />
          {/* Title */}
          <div className="text-center mb-2">
            <h3 className="text-sm font-bold uppercase ">
              CONTACT THE TEAM HERE
            </h3>
            <p className="text-xs ">FOR ALL GENERAL SALES QUESTIONS</p>
          </div>

          {/* Divider */}
          <div className="text-center mb-2">
            <span className="text-[#8BC53E] font-bold text-sm">or</span>
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <h4 className="text-sm font-bold uppercase">
              GET OUR WHOLESALE DEALS FIRST BY EMAIL
            </h4>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#1c1c1c] min-h-screen p-6">
      <h1
        className="green-outline uppercase font-poppins 
                          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                          drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                          sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                          lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                          text-[#8aeb6a] mb-6 lg:mb-8 text-center lg:text-left"
      >
        The Wholesale Team
      </h1>

      {/* Cards Layout */}
      <div className="mt-12 flex items-center justify-center gap-6">
        {/* Left Cards */}
        <div className="flex gap-4">
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
        <div className="flex gap-4">
          <SalesRepCard
            title="SALES REPRESENTATIVE"
            image="/images/wholesale_page/carlos.jpeg"
            name="Carlos Smith"
            text="A longtime collaborator and company insider, Carlos brings experience, insight, and solid support to every sale."
            waqr="/images/wholesale_page/carloswa.jpg"
            email="carlos@yywireless.com"
            phonenumber="+1 515 305 - 8297"
          />
          <SalesRepCard
            title="SALES REPRESENTATIVE"
            image="/images/wholesale_page/starr.jpg"
            name="STARR HOLCOMB"
            text="From warehouse to sales floor, Starr's drive and fresh perspective make her a rising contributor on our team."
            waqr="/images/wholesale_page/starrwa.jpg"
            email="starr@yywireless.com"
            phonenumber="+1 515 305 - 8272"
          />
        </div>
      </div>
    </div>
  );
};

export default Step4;
