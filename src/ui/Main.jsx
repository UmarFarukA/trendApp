import styled from "styled-components";
import CreatePost from "../features/Posts/CreatePost";

const MainContainer = styled.div`
  padding: 1.6rem 2rem;
`;

function Main() {
  return (
    <MainContainer>
      <CreatePost />
    </MainContainer>
  );
}

export default Main;
