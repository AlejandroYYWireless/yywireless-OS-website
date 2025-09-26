import { Dialog, DialogClose, DialogContent, DialogTitle, DialogHeader, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Certifications = () => {

  interface CertificationDialogProps {
    header: string
    description: string
    certification_img: string
    secondary_img?: string
    r2?: boolean
    wide?: boolean
  }

  const CertificationDialog = ({ header, description, certification_img, secondary_img, r2, wide }: CertificationDialogProps) => {
    if (r2) {
      return (
        <Link href={"https://sustainableelectronics.org/r2/"} target="_blank">

          <div className="h-full w-full flex justify-center items-center cursor-pointer hover:opacity-80 hover:scale-105 transition-all duration-200 rounded-xl border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md bg-white">
            <Image
              src={certification_img}
              alt={header}
              width={200}
              height={200}
              className="w-full h-full object-contain rounded-xl p-2"
            />
          </div>

        </Link>
      )
    }

    return (
      <Dialog>
        <DialogTrigger asChild>
          <div className="h-full w-full flex flex-col justify-center items-center cursor-pointer hover:opacity-80 hover:scale-105 transition-all duration-200 rounded-xl border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md bg-white">
            <Image
              src={certification_img}
              alt={header}
              width={400}
              height={400}
              className={`${wide ? 'w-full h-auto object-contain' : 'w-full h-full object-cover'} rounded-xl p-2`}
            />
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-4xl min-h-[500px]">
          <DialogHeader>
            <DialogTitle>
              {header}
            </DialogTitle>
            <DialogDescription>
              {description}
            </DialogDescription>
          </DialogHeader>
          {/* Improved image container with better centering and sizing */}
          <div className="flex justify-center items-center flex-grow p-4">
            <div className="relative max-w-full max-h-full">
              <Image
                src={secondary_img ? secondary_img : certification_img}
                alt={header}
                width={600}
                height={400}
                className="max-w-full max-h-[60vh] w-auto h-auto object-contain rounded-lg shadow-lg"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
          <DialogClose asChild>
            <Button className="h-12 w-full mt-4" variant="secondary">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    )
  }

  const certifications = [
    {
      header: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent quality standards.",
      certification_img: "/images/certifications/ISO9001.png"
    },
    {
      header: "R2 Responsible Recycling",
      description: "Certified for responsible electronics recycling and data security.",
      certification_img: "/images/certifications/R2.webp",
      r2: true,
    },
    {
      header: "Wise ASC Certification",
      description: "Wise Certification for Authorized Service Center",
      certification_img: "/images/certifications/WISE1.png",
      secondary_img: "/images/certifications/WISE2.webp",
      wide: true
    },
    {
      header: "Adisa Data Erasure",
      description: "Adisa Data Erasure Certification for Verified Data Erasure Processes.",
      certification_img: "/images/certifications/adisa.jpg"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Main content section - changes from 1 column on mobile to 2 columns on md and up */}
      <div className="flex flex-col md:grid md:grid-cols-2 flex-grow">
        {/* Certifications section - appears first on mobile, left column on desktop */}
        <div className="h-72 sm:h-96 md:h-full order-1 md:order-1 p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 h-full max-w-md mx-auto md:max-w-none">
            {certifications.map((cert, index) => (
              <div key={index} className="aspect-square">
                <CertificationDialog
                  header={cert.header}
                  description={cert.description}
                  certification_img={cert.certification_img}
                  secondary_img={cert.secondary_img}
                  r2={cert.r2}
                  wide={cert.wide}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text content section - appears second on mobile, right column on desktop */}
        <div className="flex flex-col py-8 px-5 md:py-10 md:px-6 lg:py-12 xl:place-items-end order-2 md:order-2">
          <h3 className="uppercase text-wrap mb-4 md:mb-6 text-4xl lg:text-5xl xl:text-7xl font-poppins text-center md:text-left max-w-full leading-tight">
            Certifications
            <br />
            <span className="font-bold mx-2 md:mx-3 xl:mx-4">also</span>
            matter
          </h3>
          <ul className="list-disc font-montserrat space-y-3 md:space-y-4 text-lg sm:text-xl xl:text-2xl max-w-full md:max-w-[600px] pl-6 leading-relaxed">
            <li>
              <span className="font-bold">ISO 9001:2015</span> - International
              standard for quality management systems, ensuring consistent
              processes and continuous improvement in all our operations.
            </li>
            <li>
              <span className="font-bold">R2 Responsible Recycling</span> -
              Certified for safe, secure, and environmentally responsible
              electronics recycling with verified data destruction protocols.
            </li>
            <li>
              <span className="font-bold">Wise ASC Certification</span> -
              Authorized Service Center certification demonstrating expertise
              in professional electronics repair and refurbishment services.
            </li>
            <li>
              <span className="font-bold">ADISA Data Erasure</span> -
              Verified data erasure processes meeting international standards
              for complete and secure removal of sensitive information.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
