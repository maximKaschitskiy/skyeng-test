import styled from "@emotion/styled";

const ResultsCount = styled.p`
  box-sizing: border-box;
  text-align: left;
  line-height: 26px;
  color: ${props => props.theme.colors.textLight};
  margin: 0;
  ${props => props.theme.fonts.subtitle};
  margin-top: auto;
  margin-bottom: auto;
  font-size: 1.5vw;
`;
export default ResultsCount;
