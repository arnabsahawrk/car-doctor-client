import { useContext } from "react";
import { AuthContext } from "../contexts/AuthDataContext";

const useAuth = () => {
  const allData = useContext(AuthContext);
  return allData;
};

export default useAuth;
