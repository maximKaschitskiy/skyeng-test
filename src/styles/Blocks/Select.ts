import styled from "@emotion/styled";
import ReactSelect from "react-select";

const Select = styled(ReactSelect)`
  width: 20%;
  margin-left: 5px;
  margin-right: 5px;

  & .Select__control {
    background-color: ${props => props.theme.colors.bgDark};
    border: none;
    ${props => props.theme.fonts.medium};
  }

  & .Select__control:hover {

  }

  & .Select__single-value {
    color: ${props => props.theme.colors.textLight};
    ${props => props.theme.fonts.medium};
  }

  & .Select__control--is-focused {

  }

  & .Select_value-container {

  }

  & .Select__indicators {}

  & .Select__menu {
    background-color: ${props => props.theme.colors.bgDark};
    color: ${props => props.theme.colors.textLight};
    ${props => props.theme.fonts.medium};
  }

  & .Select_menu-list {
    background-color: ${props => props.theme.colors.bgDark};
    color: ${props => props.theme.colors.textLight};
  }

  & .Select__option {
    background-color: ${props => props.theme.colors.bgDark};
    color: ${props => props.theme.colors.textLight};
  }

`;
export default Select;
