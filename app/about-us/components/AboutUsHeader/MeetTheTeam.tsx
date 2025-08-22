const MeetTheTeam = () => {
  interface TeamMemberProps {
    url: string;
    name: string;
    position: string;
  }
  const TeamMember = ({ url, name, position }: TeamMemberProps) => (
    <div className="flex flex-col space-y-2 items-center w-[210px]">
      <img
        alt={`an image of YYWireless team member ${name}, the position they hold is ${position}`}
        className="object-cover rounded-full h-[200px] w-[200px]"
        src={url}
      />
      <div className="flex flex-col text-center">
        <p className="text-xl font-bold font-montserrat text-[#8aeb6a] uppercase">
          {name}
        </p>
        <p className="font-poppins text-white text-lg">{position}</p>
      </div>
    </div>
  );
  const teamMembers = [
    {
      url: "/images/internal/leaders/ivanxiao.jpg",
      name: "Ivan Xiao",
      position: "C.E.O.",
    },
    {
      url: "/images/internal/leaders/kittyvang.jpg",
      name: "Kitty Vang",
      position: "C.O.O.",
    },
    {
      url: "/images/internal/leaders/missyjohnson.jpg",
      name: "Missy Johnson",
      position: "Accounting & Office Manager",
    },
    {
      url: "/images/internal/leaders/anthonybattillo.jpg",
      name: "Anthony Batillo",
      position: "Innovation Manager",
    },
    {
      url: "/images/internal/leaders/maggiechen.jpg",
      name: "Maggie Chen",
      position: "Warehouse & Inventory Manager",
    },
    {
      url: "/images/internal/leaders/melindamorrill.jpg",
      name: "Melinda Morrill",
      position: "Shipping Manager",
    },
    {
      url: "/images/internal/leaders/songgongbo.jpg",
      name: "Song GongBo",
      position: "Production Manager",
    },
    {
      url: "/images/internal/leaders/frankyxiao.jpg",
      name: "Franky Xiao",
      position: "Director of Repairs",
    },
    {
      url: "/images/internal/leaders/nickkalianoff.jpg",
      name: "Nick Kalianoff",
      position: "Wholesale Manager",
    },

    {
      url: "/images/internal/leaders/lingqiu.jpg",
      name: "Ling Qiu",
      position: "E-Commerce Manager",
    },
    {
      url: "/images/internal/leaders/kristin.png",
      name: "Kristin Vrieze",
      position: "Human Resources Generalist",
    },
  ];
  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-12 pt-[100px] sm:pt-[130px] md:pt-[170px] bg-[#1c1c1c]">
      <div className="text-end">
        <h1
          className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                   drop-shadow-[0px_0px_8px_rgba(138,253,106,0.7)] sm:drop-shadow-[0px_0px_14px_rgba(138,253,106,0.8)]
                   text-[#8aeb6a] font-poppins tracking-wider font-normal"
        >
          Meet The Team
        </h1>
        <div
          className="mt-8 p-2 sm:p-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 
                      gap-8 md:gap-10 justify-items-center content-start"
        >
          {teamMembers.map((member, index) => (
            <TeamMember
              url={member.url}
              name={member.name}
              position={member.position}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
