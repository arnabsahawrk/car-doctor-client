import { Helmet } from "react-helmet-async";
import { HomeCarousel } from "../components/Banner/HomeCarousel";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className="container mx-auto px-4">
        <HomeCarousel />
      </section>
    </>
  );
};

export default HomePage;
