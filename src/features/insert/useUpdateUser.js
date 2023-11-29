import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateUser as updateUserApi } from "../../services/apiUser";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const {
    data: updatedUser,
    mutate: updateUser,
    isPending: isUpdating,
  } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("User was successfully updated");
    },
    onError: () => {
      toast.error("An error occurred while updating the user");
    },
  });

  return { updateUser, updatedUser, isUpdating };
}
