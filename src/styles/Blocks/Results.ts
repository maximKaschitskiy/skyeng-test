import styled from "@emotion/styled";

const Results = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.bgLight};
  padding: 10px 0 25px 0;
  overflow-y: scroll;
  border-radius: 25px 0px 0 25px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.bgLight};
    border-radius: 10px;
  }
 
  &::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
  }

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;
export default Results;
