import styled from "styled-components";
import Post from "../features/Posts/Post";
import { usePostByUser } from "../features/Posts/usePostByUser";
import Loading from "../ui/Loading";

const Wrapper = styled.div`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
`;

function Profile() {
  const { posts, isLoading } = usePostByUser();

  if (isLoading) return <Loading message="Loading user trends" />;

  if (!posts) return <Loading message="You have not make any post yet!" />;

  return (
    <Wrapper>
      {posts.map((post) => (
        <Post key={post.id} post={post} isOwner={true} />
      ))}
    </Wrapper>
  );
}

export default Profile;
