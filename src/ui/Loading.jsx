/* eslint-disable react/prop-types */
import styled from "styled-components";

const Paragraph = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;

function Loading({ message }) {
  return <Paragraph>{message}</Paragraph>;
}

export default Loading;
