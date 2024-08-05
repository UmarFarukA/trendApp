import styled from "styled-components";
const userAvatar = "/src/images/user.png";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const Aside = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / -1;
  height: 100dvh;
  /* background-color: rgb(169, 221, 169); */
  color: rgb(169, 221, 169);
  font-weight: 800;
  font-size: 1.2rem;
  padding: 2.2rem 1.4rem;
  text-align: center;
  border-right: 1rem;
`;

function SideBar() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Aside>
      <Avatar path={userAvatar} height="6.4rem" rad="50%" />
      <div>
        <span>{user.username}</span>
        <p>Followers: {user.followers.length}</p>
        <p>Following: {user.following.length}</p>
        <p>Group: Nil</p>
        <p>
          <Link to="/dashboard/profile">My trends</Link>
        </p>
      </div>
    </Aside>
  );
}

export default SideBar;
