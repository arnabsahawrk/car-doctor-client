import PropTypes from "prop-types";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <Link
      to={`/serviceDetails/${_id}`}
      className="rounded-lg p-6 border border-gray-300 space-y-4"
    >
      <img className="w-full object-cover rounded-lg" src={img} alt={title} />
      <h2 className="text-xl md:text-2xl text-[#444444] font-bold">{title}</h2>
      <ul className="font-semibold text-[#FF3811] text-lg md:text-xl flex items-center justify-between">
        <li>Price: ${price}</li>
        <li>
          <FaLongArrowAltRight />
        </li>
      </ul>
    </Link>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
