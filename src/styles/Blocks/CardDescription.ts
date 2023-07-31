import styled from "@emotion/styled";

const CardDescription = styled.p`
  box-sizing: border-box;
  text-align: left;
  line-height: 14px;
  color: ${props => props.theme.colors.textLight};
  margin: 0;
  ${props => props.theme.fonts.medium};
  margin-top: auto;
  margin-bottom: auto;
  padding: 12px 10px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default CardDescription;
