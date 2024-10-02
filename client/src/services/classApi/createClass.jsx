import { useMutation, useQueryClient } from "@tanstack/react-query";
import AxiosInstance from "../../utils/AxiosInstance";

const createClass = async (data) => {
  const response = await AxiosInstance.post("/class", data);
  console.log(response);

  return response;
};

const useCreateClass = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createClass,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["classes"] });
    },
  });
};

export default useCreateClass;
