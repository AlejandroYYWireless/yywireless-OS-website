import Image from "next/image";

const YYCircleLogo = () => {
  return (
    <div className=" h-[260px] w-[260px] flex items-center justify-center bg-stone-700/20 rounded-full">
      <Image
        src={"/images/internal/YYWirelessLargeDark.png"}
        alt="An image of the companies logo, YYWireless, it is a grey globe with white canvas like text, inside of the globe is the word YYWireless, with green tips on the ends of the Ys"
        width={250}
        height={250}
      />
    </div>
  );
};

export default YYCircleLogo;
