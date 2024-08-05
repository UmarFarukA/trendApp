// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLogin } from "../features/Auth/useLogin";
import { useState } from "react";

const LoginContainer = styled.div`
  align-self: center;
  justify-self: flex-start;
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 70%;

  h3 {
    font-size: 3.2rem;
  }

  div {
    margin-bottom: 1rem;
  }
`;

const InputControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
`;

const InputField = styled.input`
  padding: 0.6rem 0.6rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
`;

const Button = styled.button`
  background-color: #fff;
  width: 100%;
  padding: 0.6rem 0;
  border-radius: 0.4rem;
  color: rgb(19, 187, 19);
  font-weight: bolder;
  font-size: 1rem;

  &:hover {
    background-color: #e6e6e6;
  }
`;

// const ErrorContainer = styled.span`
//   background-color: rgb(248, 124, 124);
//   color: white;
// `;

const Paragraph = styled.p`
  color: white;
`;

function Login() {
  const { login, isLaoding } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) return;
    login(
      { username, password },
      {
        onSettled: () => {
          setUsername("");
          setPassword("");
        },
      }
    );
  };

  return (
    <LoginContainer>
      <h3>Get Informed with Trend</h3>
      <form onSubmit={handleLogin}>
        <InputControl>
          <Label>Username</Label>
          <InputField
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputControl>
        <InputControl>
          <Label>Password</Label>
          <InputField
            type="password"
            name="password"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {errors.name && (
            <ErrorContainer>{errors.name.message}</ErrorContainer>
          )} */}
        </InputControl>
        <Button disabled={isLaoding}>
          {isLaoding ? "Authenticating" : "Login"}
        </Button>
      </form>
      <Paragraph>
        Join the trend{" "}
        <Link to="/register" className="register">
          here
        </Link>
      </Paragraph>
    </LoginContainer>
  );
}

export default Login;
