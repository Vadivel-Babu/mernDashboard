import { useQuery } from "@tanstack/react-query";
import AxiosInstance from "../../utils/AxiosInstance";

const getClasses = async () => {
  const response = await AxiosInstance.get("class");

  return response;
};

const useFetchAllClasses = () => {
  return useQuery({ queryKey: ["classes"], queryFn: getClasses });
};

export default useFetchAllClasses;
