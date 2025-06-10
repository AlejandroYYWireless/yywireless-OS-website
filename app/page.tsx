import Certifications from "./home/components/Certifications";
import Contact from "./home/components/Contact";
import Hero from "./home/components/Hero";
import Impact from "./home/components/Impact";
import Partners from "./home/components/Partners";
import Quote from "./home/components/Quote";

export default function Home() {
  return (
    <div className="overflow-x-hidden+">
      <Hero />
      <Quote />
      <Certifications />
      <Partners />
      <Impact />
      <Contact />
    </div>
  );
}
