import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createPost } from "../../services/apiPosts";
import toast from "react-hot-toast";

export function useCreatePost() {
  const queryClient = useQueryClient();
  const { mutate: createNewPost, isLoading } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      toast.success("Post sent successfully");
    },
  });

  return { createNewPost, isLoading };
}
