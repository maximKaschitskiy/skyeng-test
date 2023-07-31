import styled from "@emotion/styled";

const CardWrapperFull = styled.div`
  flex: 0 1 50%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.bgExtraLight};
  border-top: 15px solid;
  border-color: ${props => props.theme.colors.bgDark};
  padding: 10px 15px;
  border-radius: 10px;
  margin-top: 15px;
  overflow: hidden;
  transition: 0.3s;
  z-index: 2;
`;
export default CardWrapperFull;
