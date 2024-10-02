import { useMutation, useQueryClient } from "@tanstack/react-query";

import AxiosInstance from "../../utils/AxiosInstance";

const update = async (data) => {
  const response = await AxiosInstance.put(`/teacher/${data._id}`, data);

  return response;
};

const updateTeacher = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
    },
  });
};

export default updateTeacher;
