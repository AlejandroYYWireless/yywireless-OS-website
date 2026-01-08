import AssurantHeader from "./components/AssurantHeader";

const Page = () => {
  return (
    <div className="">
      <div className="">
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

      <div className="z-10 hover:scale-[1.01] max-w-[300px] h-auto fixed bottom-0 right-2">
        <a target="_blank" href="https://buy.yywireless.com">
          <img

            src={"/images/assurant_page/signupbtn.png"}
          />
        </a>
      </div>
    </div>
  );
};

export default Page;
