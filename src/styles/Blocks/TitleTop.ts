import styled from "@emotion/styled";

const TitleTop = styled.h4<{index: number}>`
  box-sizing: border-box;
  text-align: left;
  line-height: 16px;
  color: ${props => props.theme.colors.textExtraLight};
  margin: 0;
  ${props => props.theme.fonts.medium};
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  width: 100%;
  top: 18px;
  transition: 0.5s;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
`;
export default TitleTop;
