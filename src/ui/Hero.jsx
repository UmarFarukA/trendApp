import styled from "styled-components";

const Div = styled.div`
  color: #fff;
  align-self: center;
`;

const Name = styled.div`
  h1 {
    font-size: 7.4rem;
    font-weight: 600;
    letter-spacing: 0.4rem;
    font-family: Georgia, Times, "Times New Roman", serif;
    margin-bottom: 0;
  }

  span {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

function Hero() {
  return (
    <Div>
      <Name>
        <h1>Trend</h1>
        <span>Connect, Share, Discover</span>
      </Name>
    </Div>
  );
}

export default Hero;
