import { useMutation, useQueryClient } from "@tanstack/react-query";

import AxiosInstance from "../../utils/AxiosInstance";

const update = async (data) => {
  const response = await AxiosInstance.put(`/student/${data._id}`, data);

  return response;
};

const updateStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
  });
};

export default updateStudent;
