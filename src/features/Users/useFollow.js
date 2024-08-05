import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFollower } from "../../services/apiUsers";
import toast from "react-hot-toast";

export function useFollow() {
  const queryClient = useQueryClient();
  const { mutate: follow, isLoading } = useMutation({
    mutationFn: addFollower,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["new_users"],
      });
      toast.success("New follower followed");
    },
  });

  return { follow, isLoading };
}
