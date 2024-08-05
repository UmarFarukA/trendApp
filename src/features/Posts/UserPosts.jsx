import { useUserPosts } from "./useUserPost";
import Loading from "../../ui/Loading";
import Post from "./Post";

function UserPosts() {
  const { posts, isLoading } = useUserPosts();

  if (isLoading) return <Loading message="Loading..." />;

  if (!posts) return <Loading message="No Post" />;

  // const sortedPosts = posts.sort((a, b) => b.posted_on - a.posted_on);

  // console.log(sortedPosts);

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default UserPosts;
