import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserPost } from "../../services/apiPosts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useDeletePost() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deletePost, isLoading } = useMutation({
    mutationFn: deleteUserPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user_post"],
      });
      navigate("/dashboard/profile", { replace: true });
      toast.success("Post deleted successfully");
    },

    onError: () => {
      toast.error("Error deleting post");
    },
  });

  return { deletePost, isLoading };
}
