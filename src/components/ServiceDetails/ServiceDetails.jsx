import ServiceDetailsBanner from "../Banner/ServiceDetailsBanner";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const ServiceDetails = () => {
  return (
    <>
      <ServiceDetailsBanner />
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-10 md:mt-12 lg:mt-24">
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
};

export default ServiceDetails;
