/* eslint-disable react/prop-types */
import styled from "styled-components";
import Avatar from "./Avatar";
import { useFollow } from "../features/Users/useFollow";
const userAvatar = "/src/images/user.png";

const Wrapper = styled.div`
  border-radius: 0.8rem;
  background-color: rgb(194, 241, 194);
  display: flex;
  gap: 1rem;
  padding: 1rem;

  &:hover {
    background-color: rgb(194, 241, 194);
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  span {
    color: gray;
    font-weight: 600;
    font-size: 1rem;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  }
`;

const BtnFollow = styled.button`
  cursor: pointer;
  border-radius: 0.4rem;
  border: none;
  background-color: white;
  color: rgb(169, 221, 169);
  padding: 0.4rem 0.6rem;

  &:hover {
    background-color: rgb(241, 235, 235);
    color: rgb(126, 228, 126);
  }
`;

const BtnCancel = styled.button`
  cursor: pointer;
  border-radius: 0.4rem;
  border: none;
  background-color: gray;
  color: white;
  padding: 0.4rem 0.6rem;

  &:hover {
    background-color: rgb(165, 160, 160);
    color: white;
  }
`;

function Friend({ user }) {
  const { follow, isLoading } = useFollow();
  const handleFollow = (id) => {
    follow(id);
  };
  return (
    <Wrapper>
      <Avatar path={userAvatar} height="3.4rem" rad="50%" />
      <Details>
        <span>{user.name}</span>
        <div>
          <BtnFollow onClick={() => handleFollow(user.id)} disabled={isLoading}>
            Follow
          </BtnFollow>
          <BtnCancel>Cancel</BtnCancel>
        </div>
      </Details>
    </Wrapper>
  );
}

export default Friend;
