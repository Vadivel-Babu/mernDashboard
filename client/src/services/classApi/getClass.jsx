import { useQuery } from "@tanstack/react-query";
import AxiosInstance from "../../utils/AxiosInstance";

const getClass = async (id) => {
  const response = await AxiosInstance.get(`class/${id}`);
  return response;
};

const useGetClass = (id) => {
  return useQuery({
    queryKey: ["classes", id],
    queryFn: () => getClass(id),
  });
};

export default useGetClass;
