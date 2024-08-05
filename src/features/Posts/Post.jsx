/* eslint-disable react/prop-types */
import styled from "styled-components";
import Avatar from "../../ui/Avatar";
import { useDeletePost } from "./useDeletePost";
const userAvatar = "/src/images/user.png";

const PostWrapper = styled.div`
  background-color: rgb(228, 252, 228);
  padding: 0.6rem 0.8rem;
  margin-bottom: 1.2rem;
  border-bottom: 0.2rem solid gray;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;

const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;

  div {
    display: flex;
    gap: 2rem;
  }
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteBtn = styled.span`
  font-size: 0.8rem;
  padding: 0.2rem 0.4rem;
  background-color: red;
  color: white;
  border-radius: 0.8rem;
`;

const EditBtn = styled.span`
  font-size: 0.8rem;
  padding: 0.2rem 0.4rem;
  background-color: gray;
  color: white;
  border-radius: 0.8rem;
`;

function Post({ post, isOwner = false }) {
  const { deletePost, isLoading: ResponseLoading } = useDeletePost();

  const handleDelete = (id) => {
    deletePost(id);
  };
  return (
    <PostWrapper>
      <Avatar path={userAvatar} height="1.8rem" rad="50%" />
      <PostDetails>
        <PostHeader>
          <p>{post.content}</p>
          {isOwner && (
            <div>
              <EditBtn>Edit</EditBtn>
              <DeleteBtn
                onClick={() => handleDelete(post.id)}
                status={ResponseLoading}
              >
                Delete
              </DeleteBtn>
            </div>
          )}
        </PostHeader>
        <div>
          <span>
            <button> 👍likes</button> {post.likes.length}
          </span>
          <span>{post.comments.length} comments</span>
        </div>
      </PostDetails>
    </PostWrapper>
  );
}

export default Post;
