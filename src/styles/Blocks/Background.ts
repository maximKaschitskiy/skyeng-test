import styled from "@emotion/styled";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.bgExtraLight};
  box-sizing: border-box;
`;

export default Background;
