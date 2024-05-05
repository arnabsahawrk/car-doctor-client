import PropTypes from "prop-types";
import AuthDataContext from "../contexts/AuthDataContext";

const Provider = ({ children }) => {
  return <AuthDataContext>{children}</AuthDataContext>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
