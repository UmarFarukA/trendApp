import styled from "styled-components";
import UserPosts from "../features/Posts/UserPosts";

const Container = styled.div`
  padding: 0.4rem 2rem;
`;

function Dashboard() {
  return (
    <>
      <Container>
        <UserPosts />
      </Container>
    </>
  );
}

export default Dashboard;
