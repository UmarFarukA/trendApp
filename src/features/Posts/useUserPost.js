import { useQuery } from "@tanstack/react-query";
import { getUserPost } from "../../services/apiPosts";

export function useUserPosts() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getUserPost,
  });

  return { posts, isLoading };
}
