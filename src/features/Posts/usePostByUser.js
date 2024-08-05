import { useQuery } from "@tanstack/react-query";
import { getPostByUser } from "../../services/apiPosts";

export function usePostByUser() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["user_post"],
    queryFn: getPostByUser,
  });

  return { posts, isLoading };
}
