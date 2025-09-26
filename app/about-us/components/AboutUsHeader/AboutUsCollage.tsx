import Image from "next/image";

const AboutUsCollage = () => {
  return (
    <div className="relative mt-10" style={{ maxHeight: '80vh' }}>
      <Image
        className="z-4"
        src="/images/internal/collage1.png"
        alt="Collage"
        width={800}
        height={600}
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '80vh',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};

export default AboutUsCollage;
