import { Helmet } from "react-helmet-async";
import AllServicesSection from "../components/AllServicesSection/AllServicesSection";

const AllServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <section className="container mx-auto px-4 pb-10 md:pb-12 lg:pb-24">
        <AllServicesSection />
      </section>
    </>
  );
};

export default AllServicesPage;
