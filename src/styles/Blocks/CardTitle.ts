import styled from "@emotion/styled";

const CardTitle = styled.h5`
  box-sizing: border-box;
  text-align: left;
  color: ${props => props.theme.colors.textDark};
  margin: 0;
  ${props => props.theme.fonts.subtitle};
  margin-top: 5px;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  padding: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default CardTitle;
