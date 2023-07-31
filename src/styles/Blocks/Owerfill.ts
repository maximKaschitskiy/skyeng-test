import styled from "@emotion/styled";

const Owerfill = styled.div<any>`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.bgLight};
  opacity: 0.90;
  z-index: 1;
`;
export default Owerfill;
