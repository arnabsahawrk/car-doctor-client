import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetServices = () => {
  //Get services data func
  const getServices = async () => {
    try {
      const { data } = await axios.get("services.json");
      return data;
    } catch (err) {
      console.error("Failed To Fetch Services", err);
    }
  };

  //TanStackQuery
  const { isPending, data, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  return { isPending, data, refetch };
};

export default useGetServices;
