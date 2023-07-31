import styled from "@emotion/styled";

const CardsWrapper = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.bgLight};
  padding: 10px 10px 5px 10px;
  border-radius: 10px;
`;
export default CardsWrapper;
