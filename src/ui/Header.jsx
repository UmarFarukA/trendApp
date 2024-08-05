import styled from "styled-components";
import { useLogout } from "../features/Auth/useLogout";
import {
  HomeIcon,
  UsersIcon,
  VideoCameraIcon,
  BellAlertIcon,
} from "@heroicons/react/16/solid";
import { useNavigate } from "react-router";

const Heading = styled.header`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  border-bottom: 0.6rem;
  /* background-color: rgb(09, 187, 09); */
  background-color: rgb(169, 221, 169);
  /* background-color: black; */
  color: white;
  padding: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconsWrapper = styled.div`
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 8.2rem;
  /* height: 8.2rem; */

  span {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  span {
    font-weight: 600;
  }

  p {
    cursor: pointer;
  }
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: 2.2rem;
`;

function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const { logout, isLoading } = useLogout();

  const handleHome = (e) => {
    e.preventDefault();
    navigate("/dashboard", { replace: true });
  };
  return (
    <Heading>
      <Logo>Trend</Logo>
      <IconsWrapper>
        <span>
          <HomeIcon onClick={handleHome} />
          <p>Home</p>
        </span>
        <span>
          <UsersIcon />
          <p>Users</p>
        </span>
        <span>
          <BellAlertIcon />
          <p>Notifications</p>
        </span>

        <span>
          <ChatBubbleLeftIcon />
          <p>Messages</p>
        </span>
      </IconsWrapper>

      <Info>
        <span>{user.name}</span>
        <p onClick={logout} disabled={isLoading}>
          Logout
        </p>
      </Info>
    </Heading>
  );
}

export default Header;
