import { useQuery } from "@tanstack/react-query";
import AxiosInstance from "../../utils/AxiosInstance";

const getTeacher = async (id) => {
  const response = await AxiosInstance.get(`teacher/${id}`);
  return response;
};

const useGetTeacher = (id) => {
  return useQuery({
    queryKey: ["teachers", id],
    queryFn: () => getTeacher(id),
  });
};

export default useGetTeacher;
