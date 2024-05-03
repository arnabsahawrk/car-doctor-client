import PropTypes from "prop-types";

const ContactInfo = ({ info, idx }) => {
  const { img, head, infoContact } = info;
  return (
    <div
      className={`flex items-center gap-4 ${
        idx === 2 && "md:col-span-2 xl:col-auto"
      }`}
    >
      <img src={img} alt={head} />
      <ul className="text-white space-y-2">
        <li className="font-medium">{head}</li>
        <li className="text-xl md:text-2xl">{infoContact}</li>
      </ul>
    </div>
  );
};

ContactInfo.propTypes = {
  info: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};

export default ContactInfo;
