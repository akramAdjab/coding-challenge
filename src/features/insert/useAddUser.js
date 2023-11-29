import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addUser as addUserApi } from "../../services/apiUser";
import { useCurrentUser } from "../../context/CurrentUserProvider";

export function useAddUser() {
  const queryClient = useQueryClient();

  const { setCurrentUserId } = useCurrentUser();

  const {
    data: { data: userAdded } = {},
    mutate: addUser,
    isPending: isAdding,
  } = useMutation({
    mutationFn: addUserApi,
    onSuccess: (data) => {
      setCurrentUserId(data?.data?.at(0).id);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("User was successfully added");
    },
    onError: () => {
      toast.error("An error occurred while adding a new user");
    },
  });

  return { userAdded, addUser, isAdding };
}
