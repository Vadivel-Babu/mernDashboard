import { useMutation, useQueryClient } from "@tanstack/react-query";
import AxiosInstance from "../../utils/AxiosInstance";

const remove = async (id) => {
  console.log(id);

  const response = await AxiosInstance.delete(`class/${id}`);
  return response;
};

const useDeleteClass = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: remove,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["classes"] });
    },
  });
};

export default useDeleteClass;
