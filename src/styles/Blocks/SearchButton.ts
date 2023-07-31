import styled from "@emotion/styled";

const SearchButton = styled.button`
  width: max-content;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 9px 15px;
  margin: auto;
  border: 1px solid ${props => props.theme.colors.bgDark};;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.bgDark};
  color: ${props => props.theme.colors.textLight};
  ${props => props.theme.fonts.medium};
  transition: 0.15s;

  &:hover {
    border: 1px solid #2684FF;
  }

  &:disabled {
    color: ${props => props.theme.colors.textDark};
  }
`;
export default SearchButton;
