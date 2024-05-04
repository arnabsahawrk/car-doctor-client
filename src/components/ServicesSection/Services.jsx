import useGetServices from "../../hooks/useGetServices";
import ServiceCard from "./ServiceCard";
import Spinner from "../Spinner/Spinner";

const Services = () => {
  const { isPending, data: services } = useGetServices();

  return (
    <>
      {isPending ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {services?.slice(0, 8).map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      )}
    </>
  );
};

export default Services;
