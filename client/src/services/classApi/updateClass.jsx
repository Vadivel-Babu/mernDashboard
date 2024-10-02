import { useMutation, useQueryClient } from "@tanstack/react-query";

import AxiosInstance from "../../utils/AxiosInstance";

const update = async (data) => {
  const response = await AxiosInstance.put(`/class/${data._id}`, data);

  return response;
};

const updateClass = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classes"] });
    },
  });
};

export default updateClass;
