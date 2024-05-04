import servicesBG from "../../assets/images/banner/4.jpg";
const AllServicesBanner = () => {
  return (
    <div
      className="h-64 bg-cover bg-center rounded-lg relative"
      style={{
        backgroundImage: `url(${servicesBG})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[#15151500] rounded-lg flex flex-col justify-center text-white">
        <h2 className="text-3xl lg:text-[45px] font-bold ml-6 lg:ml-16 h-1/2 content-end">
          All Services
        </h2>
        <p className="h-1/2 content-end mx-auto relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 296 50"
            fill="none"
            className="w-60 h-10 md:w-[296px] md:h-[50px]"
          >
            <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
          </svg>
          <span className="absolute bottom-2 md:bottom-2.5 inset-x-0 text-center font-medium text-base md:text-lg">
            Home/All Services
          </span>
        </p>
      </div>
    </div>
  );
};

export default AllServicesBanner;
