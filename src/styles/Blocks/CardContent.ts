import styled from "@emotion/styled";

const CardContent = styled.p`
  box-sizing: border-box;
  text-align: left;
  line-height: 14px;
  color: ${props => props.theme.colors.textDark};
  margin: 0;
  ${props => props.theme.fonts.medium};
  margin-top: auto;
  margin-bottom: auto;
  padding: 12px 10px;
  width: 100%;
`;
export default CardContent;
