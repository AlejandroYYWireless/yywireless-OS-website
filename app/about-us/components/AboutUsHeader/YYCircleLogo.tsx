import Image from "next/image";

const YYCircleLogo = () => {
  return (
    <div className=" h-[260px] w-[260px] flex items-center justify-center bg-stone-700/20 rounded-full">
      <Image
        src={"/images/internal/YYWirelessLargeDark.png"}
        alt="An image of the companies logo, YYWireless, it is a grey globe with white canvas like text, inside of the globe is the word YYWireless, with green tips on the ends of the Ys"
        width={250}
        height={250}
        placeholder="blur"
        blurDataURL="https://yywireless.com/wp-content/uploads/2024/04/Transparent-01a.png"
      />
    </div>
  );
};

export default YYCircleLogo;
