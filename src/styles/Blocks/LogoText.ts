import styled from "@emotion/styled";

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  line-height: 54px;
  color: ${props => props.theme.colors.textExtraLight};
  margin: 0;
  margin-left: 5px;
  margin-right: 18px;
  ${props => props.theme.fonts.title};
`;
export default Logo;
