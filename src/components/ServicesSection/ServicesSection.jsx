import { useNavigate } from "react-router-dom";
import Services from "./Services";

const ServicesSection = () => {
  const navigate = useNavigate();
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
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/services")}
          className="text-[#FF3811] hover:text-white hover:bg-[#FF3811] transition duration-700 ease-in-out text-lg border-2 border-[#FF3811] py-2 lg:py-3 px-4 lg:px-5 rounded"
        >
          More Services
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
