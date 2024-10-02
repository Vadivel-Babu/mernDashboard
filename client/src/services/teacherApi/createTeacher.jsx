import { useMutation, useQueryClient } from "@tanstack/react-query";
import AxiosInstance from "../../utils/AxiosInstance";

const createTeacher = async (data) => {
  const response = await AxiosInstance.post("/teacher", data);
  console.log(response);

  return response;
};

const useCreateTeacher = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTeacher,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
    },
  });
};

export default useCreateTeacher;
