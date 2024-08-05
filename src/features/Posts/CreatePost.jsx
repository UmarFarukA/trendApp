import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useCreatePost } from "./useCreatePost";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TextArea = styled.textarea`
  border-radius: 0.6rem;
  padding: 0.4rem 0.6rem;
  outline: none;
  width: 100%;
`;

const Button = styled.button`
  width: 10%;
  align-self: flex-end;
  padding: 0.4rem 0.6rem;
  background-color: rgb(09, 187, 09);
  color: white;
  font-weight: 400;
  border: none;
  border-radius: 0.6rem;

  &:hover {
    cursor: pointer;
    background-color: rgb(169, 221, 169);
  }
`;

function CreatePost() {
  const { register, handleSubmit, reset } = useForm();

  const { createNewPost, isLoading } = useCreatePost();

  const handleAddPost = (data) => {
    createNewPost(data);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(handleAddPost)}>
      <TextArea
        cols="8"
        rows="6"
        placeholder="Share something"
        {...register("content", {
          required: "Post must have a content",
          min: {
            value: 2,
            message: "Post must have at least a character",
          },
        })}
      ></TextArea>
      <Button disabled={isLoading}>Send</Button>
    </Form>
  );
}

export default CreatePost;
