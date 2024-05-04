import useGetServices from "../../hooks/useGetServices";
import ServiceCard from "./ServiceCard";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { isPending, data: services } = useGetServices();
  const navigate = useNavigate();

  return (
    <>
      {isPending ? (
        <Spinner />
      ) : (
        <div className="mt-10 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services?.slice(0, 8).map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate("/allServices")}
              className="text-[#FF3811] hover:text-white hover:bg-[#FF3811] transition duration-700 ease-in-out text-lg border-2 border-[#FF3811] py-2 lg:py-3 px-4 lg:px-5 rounded"
            >
              More Services
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
