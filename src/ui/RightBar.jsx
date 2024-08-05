import styled from "styled-components";
import Friends from "./Friends";

const Aside = styled.div`
  grid-column: 10 / -1;
  grid-row: 2 / -1;
  height: 100%;
  /* background-color: rgb(169, 221, 169); */
`;

function RightBar() {
  return (
    <Aside>
      <Friends />
    </Aside>
  );
}

export default RightBar;
