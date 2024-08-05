import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import Main from "./Main";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  gap: 0;
`;
2;
const MainWrapper = styled.div`
  grid-column: 3 / 10;
  grid-row: 2 / -1;
  background-color: rgb(238, 234, 234);
  height: 100%;
  /* padding: 0.4rem 0.2rem; */
`;

function AppLayout() {
  return (
    <Container>
      <Header />
      <SideBar />
      <MainWrapper>
        <Main />
        <Outlet />
      </MainWrapper>
      <RightBar />
    </Container>
  );
}

export default AppLayout;
