import servicesBG from "../../assets/images/banner/4.jpg";

const ServiceDetailsBanner = () => {
  return (
    <div
      className="h-64 bg-cover bg-center rounded-lg relative"
      style={{
        backgroundImage: `url(${servicesBG})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[#15151500] rounded-lg text-white flex flex-col items-center justify-between">
        <h2 className="text-3xl lg:text-[45px] font-bold mt-10">
          Service Details
        </h2>
        <p className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 296 50"
            fill="none"
            className="w-60 h-10 md:w-[296px] md:h-[50px]"
          >
            <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
          </svg>
          <span className="absolute bottom-2 md:bottom-2.5 inset-x-0 text-center font-medium text-base md:text-lg">
            Home/Service Details
          </span>
        </p>
      </div>
    </div>
  );
};

export default ServiceDetailsBanner;
