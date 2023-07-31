import styled from "@emotion/styled";

const SortCaption = styled.p`
  box-sizing: border-box;
  text-align: left;
  line-height: 26px;
  color: ${props => props.theme.colors.textLight};
  margin: 0;
  ${props => props.theme.fonts.medium};
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: 10px;
`;
export default SortCaption;
