import Services from "./Services";

const ServicesSection = () => {
  return (
    <section id="service">
      <div className="space-y-5 text-center mx-auto pt-4">
        <h4 className="text-xl font-bold text-[#FF3811]">Service</h4>
        <h2 className="text-3xl lg:text-[45px] leading-tight font-bold text-[#151515] max-w-[376px] mx-auto">
          Our Service Area
        </h2>
        <p className="text-[#737373] max-w-[717px] mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <Services />
    </section>
  );
};

export default ServicesSection;
