import { useContext } from "react";
import { ServiceContext } from "../../pages/ServiceDetailsPage";
import useGetServices from "../../hooks/useGetServices";
import { FaArrowRight, FaFileLines } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logooo.png";
import Spinner from "../Spinner/Spinner";

const RightSide = () => {
  const service = useContext(ServiceContext);
  const { price } = service || {};
  const { isPending, data: services } = useGetServices();

  return (
    <div className="xl:col-span-4 space-y-6">
      {isPending ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-5 p-10 rounded-lg bg-[#F3F3F3]">
          <h2 className="text-[#151515] font-bold text-2xl">Services</h2>
          <div className="space-y-5 max-h-[400px] overflow-auto">
            {services?.slice(0, 8).map((service) => (
              <NavLink
                key={service?._id}
                to={`/services/details/${service?._id}`}
                className={({ isActive, isPending }) =>
                  `${
                    isActive
                      ? "bg-[#FF3811] text-white"
                      : "bg-white hover:bg-[#FF3811]"
                  } ${
                    isPending ? "text-amber-600" : ""
                  } flex justify-between items-center p-[18px] text-[#151515] transition ease-in-out duration-700 hover:text-white font-semibold rounded-md`
                }
              >
                {service?.title} <FaArrowRight />
              </NavLink>
            ))}
          </div>
        </div>
      )}
      <div className="bg-[#151515]  p-10 rounded-lg space-y-7">
        <h2 className="text-white font-bold text-2xl">Services</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <FaFileLines className="text-white size-[30px]" />
            <ul className="space-y-1">
              <li className="font-semibold text-lg text-white">Our Brochure</li>
              <li className="text-[#A2A2A2]">Download</li>
            </ul>
          </div>
          <p className="bg-[#FF3811] p-4 rounded-md">
            <FaArrowRight className="text-white" />
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <FaFileLines className="text-white size-[30px]" />
            <ul className="space-y-1">
              <li className="font-semibold text-lg text-white">
                Company Details
              </li>
              <li className="text-[#A2A2A2]">Download</li>
            </ul>
          </div>
          <p className="bg-[#FF3811] p-4 rounded-md">
            <FaArrowRight className="text-white" />
          </p>
        </div>
      </div>
      <div className="bg-[#151515]  p-10 rounded-lg flex flex-col items-center gap-y-7 pb-14">
        <img src={logo} alt="logo" className="object-cover" />
        <p className="font-bold text-xl text-center text-white leading-8">
          Need Help? We Are Here To Help You
        </p>
        <div className="bg-white p-7 rounded-lg text-center space-y-[6px]">
          <p className="text-[#151515] font-bold text-xl">
            <span className="text-[#FF3811]">Car Doctor</span> Special
          </p>
          <p className="text-[#737373] font-bold">
            Save up to <span className="text-[#FF3811]">60% off</span>
          </p>
          <div className="relative">
            <p className="bg-[#FF3811] p-4 rounded-md text-white absolute -bottom-14 inset-x-6">
              Get A Quote
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-[#151515] font-bold text-3xl lg:text-[35px]">
        Price ${price}
      </h2>
      <button className="hover:text-[#FF3811] text-white bg-[#FF3811] hover:bg-transparent transition duration-700 ease-in-out text-lg border-2 border-[#FF3811] py-3  px-4 rounded font-semibold w-full">
        Proceed Checkout
      </button>
    </div>
  );
};

export default RightSide;
