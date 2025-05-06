import Image from "next/image";

const Contact = () => {
  const ItemBox = ({ text }: { text: string }) => {
    return (
      <div
        className="w-full md:w-[250px] lg:w-[300px] h-12 md:h-14 lg:h-16  
                    bg-black text-center flex items-center justify-center 
                    text-lg sm:text-xl lg:text-2xl text-white"
      >
        {text}
      </div>
    );
  };

  const items = [
    "Wholesale",
    "Inventory",
    "Retail",
    "Fun Stuff",
    "Recycle",
    "Career",
  ];

  return (
    <div className="flex flex-col min-h-full md:h-screen relative">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full py-8">
        {/* Left column with image and copyright */}
        <div className="flex justify-between flex-col items-center">
          <Image
            src="/images/internal/buildingshot.jpg"
            alt="A photo of the YYWireless building"
            width={500}
            height={560}
            className="place-self-center h-auto md:h-[450px] lg:h-[560px] w-auto object-contain"
          />
          <span className="text-base md:text-lg lg:text-xl font-semibold uppercase mt-4 md:mt-0">
            2025 yywireless all rights reserved.
          </span>
        </div>

        {/* Right column with contact information */}
        <div className="p-4 text-center flex flex-col justify-between items-center">
          <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
            Contact Us
          </h4>

          <p className="text-base sm:text-lg lg:text-xl uppercase font-semibold text-center mt-4 md:mt-0">
            Connecting people through technology --- affordability, reliability,
            and sustainability.
          </p>

          {/* Grid for contact boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 w-full max-w-2xl mt-6 md:mt-0">
            {items.map((item, index) => (
              <ItemBox key={index} text={item} />
            ))}
          </div>

          {/* Divider */}
          <div className="h-1 w-full bg-black mt-6 md:mt-0" />

          <p className="uppercase text-lg sm:text-xl lg:text-2xl font-semibold mt-4 md:mt-0">
            follow us on social media
          </p>

          {/* Social media links */}
          <div className="sm:flex sm:items-center sm:justify-between w-full">
            <div className="flex items-center space-x-6 sm:space-x-10 md:space-x-14 mt-4 sm:justify-center sm:mt-0 mx-auto">
              {/* Instagram */}
              <a href="#" className="text-white ms-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                  viewBox="0 0 24 24"
                >
                  <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>

              {/* Facebook */}
              <a href="#" className="text-white">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>

              {/* Twitter */}
              <a href="#" className="text-white ms-5">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>

              {/* Email */}
              <a href="#" className="text-white ms-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#000000"
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                  />
                </svg>
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer SVG */}
      <img
        className="w-full h-[120px] sm:h-[160px] md:h-[200px]"
        src="/images/extraassets/footersvg.svg"
        alt="Footer decoration"
      />
    </div>
  );
};

export default Contact;
