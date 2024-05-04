import { Helmet } from "react-helmet-async";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import { useParams } from "react-router-dom";
import useGetServices from "../hooks/useGetServices";
import { createContext, useEffect, useState } from "react";
import Nav from "../components/common/Nav/Nav";

export const ServiceContext = createContext(null);
const ServiceDetailsPage = () => {
  const { id } = useParams();
  const { isPending, data: services } = useGetServices();
  const [service, setService] = useState();

  useEffect(() => {
    if (!isPending) {
      const matchingData = services.find((service) => service._id === id);
      setService(matchingData);
    }
  }, [isPending, services, id]);

  return (
    <>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <header>
        <Nav />
      </header>
      <section className="container mx-auto px-4 pb-10 md:pb-12 lg:pb-24">
        <ServiceContext.Provider value={service}>
          <ServiceDetails />
        </ServiceContext.Provider>
      </section>
    </>
  );
};

export default ServiceDetailsPage;
