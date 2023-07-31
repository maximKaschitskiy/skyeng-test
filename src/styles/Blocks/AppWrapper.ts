import styled from "@emotion/styled";

const AppWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.bgDark};
  box-sizing: border-box;
  position: relative;
  border-radius: 25px;
`;
export default AppWrapper;
