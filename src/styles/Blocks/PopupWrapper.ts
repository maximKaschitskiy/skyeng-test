import styled from "@emotion/styled";

const PopupWrapper = styled.div<any>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  box-sizing: border-box;
  border-radius: 25px;
  display: ${props => props.show ? 'flex' : 'none'};
`;
export default PopupWrapper;
