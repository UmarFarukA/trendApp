/* eslint-disable react/prop-types */
import styled from "styled-components";

const Img = styled.img`
  height: ${(props) => props.height};
  border-radius: ${(props) => props.rad};
`;

function Avatar({ path, height, rad }) {
  return <Img src={path} alt="" height={height} rad={rad} />;
}

export default Avatar;
