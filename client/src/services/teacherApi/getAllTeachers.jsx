import { useQuery } from "@tanstack/react-query";
import AxiosInstance from "../../utils/AxiosInstance";

const getTeachers = async () => {
  const response = await AxiosInstance.get("teacher");

  return response;
};

const useFetchAllTeachers = () => {
  return useQuery({ queryKey: ["teachers"], queryFn: getTeachers });
};

export default useFetchAllTeachers;
