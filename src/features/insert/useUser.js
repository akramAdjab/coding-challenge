import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiUser";
import { useCurrentUser } from "../../context/CurrentUserProvider";

export function useUser() {
  const { currentUserId } = useCurrentUser();

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      if (currentUserId === null) return currentUserId;

      return getUser(currentUserId);
    },
  });

  return { user, isLoadingUser };
}
