import styled from "styled-components";
import { useUsers } from "../features/Users/useUsers";
import Loading from "./Loading";
import Friend from "./Friend";

const Wrapper = styled.div`
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Friends() {
  const { users, isLoading } = useUsers();

  if (isLoading) <Loading message="Loading..." />;
  // console.log(getSuggestedFriends());

  if (!users) return <Loading message="No Available Suggestion" />;

  return (
    <Wrapper>
      {users.map((user) => (
        <Friend user={user} key={user.id} />
      ))}
    </Wrapper>
  );
}

export default Friends;
