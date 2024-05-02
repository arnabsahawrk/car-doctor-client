import AboutContent from "./AboutContent";
import AboutPhoto from "./AboutPhoto";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center lg:justify-around gap-32"
    >
      <AboutPhoto />
      <AboutContent />
    </section>
  );
};

export default AboutSection;
