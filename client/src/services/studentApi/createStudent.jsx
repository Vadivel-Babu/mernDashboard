import { useMutation, useQueryClient } from "@tanstack/react-query";
import AxiosInstance from "../../utils/AxiosInstance";

const createStudent = async (data) => {
  const response = await AxiosInstance.post("/student", data);
  console.log(response);

  return response;
};

const useCreateStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createStudent,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
  });
};

export default useCreateStudent;
