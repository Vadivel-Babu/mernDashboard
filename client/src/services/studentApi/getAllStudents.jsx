import { useQuery } from "@tanstack/react-query";
import AxiosInstance from "../../utils/AxiosInstance";

const getStudents = async () => {
  const response = await AxiosInstance.get("student");

  return response;
};

const useFetchAllStudents = () => {
  return useQuery({ queryKey: ["students"], queryFn: getStudents });
};

export default useFetchAllStudents;
