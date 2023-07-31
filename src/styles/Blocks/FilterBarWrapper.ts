import styled from "@emotion/styled";

const FilterBarWrapper = styled.div`
  width: 75%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.bgLight};
  padding: 10px 0;
  border-radius: 10px;
`;
export default FilterBarWrapper;
