import { Spinner } from "@material-tailwind/react";
import useGetServices from "../../hooks/useGetServices";
import ServiceCard from "../ServicesSection/ServiceCard";

const AllServices = () => {
  const { isPending, data: services } = useGetServices();
  return (
    <div className="space-y-3 text-center mx-auto mt-10">
      <h2 className="text-3xl lg:text-[45px] leading-tight font-bold text-[#151515] max-w-[376px] mx-auto">
        All Services
      </h2>
      {isPending ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {services?.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllServices;
