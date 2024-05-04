import { Helmet } from "react-helmet-async";
import AllServicesSection from "../components/AllServicesSection/AllServicesSection";
import Nav from "../components/common/Nav/Nav";

const AllServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <header>
        <Nav />
      </header>
      <section className="container mx-auto px-4 pb-10 md:pb-12 lg:pb-24">
        <AllServicesSection />
      </section>
    </>
  );
};

export default AllServicesPage;
