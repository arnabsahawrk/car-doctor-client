import { Helmet } from "react-helmet-async";
import AllServicesBanner from "../components/Banner/AllServicesBanner";

const AllServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <section className="container mx-auto px-4 space-y-10 md:space-y-12 lg:space-y-24 pb-10 md:pb-12 lg:pb-24">
        <AllServicesBanner />
      </section>
    </>
  );
};

export default AllServicesPage;
