import styled from "@emotion/styled";

const SearchInput = styled.input`
  padding: 0;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
  align-self: flex-start;
  outline: none;
  border: none;
  margin-left: 15px;
  color: ${props => props.theme.colors.textLight};
  ${props => props.theme.fonts.medium};

  &::placeholder {
    color: ${props => props.theme.colors.textTint};
  }
`;
export default SearchInput;
