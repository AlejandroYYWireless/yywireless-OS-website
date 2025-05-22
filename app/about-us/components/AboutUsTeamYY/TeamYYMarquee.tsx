import { Marquee } from "@/components/magicui/marquee";

const TeamYYMarquee = () => {
  const images = [
    "/images/internal/teamyy/1.jpg",
    "/images/internal/teamyy/2.jpg",
    "/images/internal/teamyy/3.jpg",
    "/images/internal/teamyy/4.jpg",
    "/images/internal/teamyy/5.jpg",
    "/images/internal/teamyy/6.jpg",
    "/images/internal/teamyy/7.jpg",
    "/images/internal/teamyy/8.jpg",
    "/images/internal/teamyy/9.jpg",
    "/images/internal/teamyy/10.jpg",
  ];

  return (
    <div className="my-4">
      <Marquee className="[--duration:100s]">
        {images.map((image, index) => (
          <img className="h-[450px]" key={index} src={image} />
        ))}
      </Marquee>
    </div>
  );
};

export default TeamYYMarquee;
