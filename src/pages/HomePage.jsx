import { Helmet } from "react-helmet-async";
import { HomeCarousel } from "../components/Banner/HomeCarousel";
import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import ContactSection from "../components/ContactSection/ContactSection";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import HomeNav from "../components/common/Nav/HomeNav";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <header>
        <HomeNav />
      </header>
      <section className="container mx-auto px-4 space-y-10 md:space-y-12 lg:space-y-24 pb-10 md:pb-12 lg:pb-24">
        <HomeCarousel />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <ProductsSection />
      </section>
    </>
  );
};

export default HomePage;
