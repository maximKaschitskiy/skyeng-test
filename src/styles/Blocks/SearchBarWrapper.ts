import styled from "@emotion/styled";

const SearchBarWrapper = styled.div`
  width: 75%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.bgLight};
  padding: 5px 15px;
  border-radius: 10px;
  margin-top: 15px;
`;
export default SearchBarWrapper;
