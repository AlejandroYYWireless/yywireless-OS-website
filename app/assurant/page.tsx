import AssurantHeader from "./components/AssurantHeader";

const Page = () => {
  return (
    <div>
      <div className="relative">
        <AssurantHeader />
      </div>
      <p className="z-10 bg-[#1c1c1c] text-muted-foreground uppercase text-xs">
        ©{new Date().getFullYear()} YYWireless all rights reserved
      </p>
      <img
        className="w-full z-2"
        src="/images/assets/aboutusfooter.svg"
        alt="Decorative bottom lines"
      />
    </div>
  );
};

export default Page;
