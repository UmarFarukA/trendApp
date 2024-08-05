import { useQuery } from "@tanstack/react-query";
import { getSuggestedFriends } from "../../services/apiUsers";

export function useUsers() {
  const { data: users, isLoading } = useQuery({
    queryKey: ["new_users"],
    queryFn: getSuggestedFriends,
  });

  return { users, isLoading };
}
