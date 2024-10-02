import { useQuery } from "@tanstack/react-query";
import AxiosInstance from "../../utils/AxiosInstance";

const getStudent = async (id) => {
  const response = await AxiosInstance.get(`student/${id}`);
  return response;
};

const useGetStudent = (id) => {
  return useQuery({
    queryKey: ["students", id],
    queryFn: () => getStudent(id),
  });
};

export default useGetStudent;
