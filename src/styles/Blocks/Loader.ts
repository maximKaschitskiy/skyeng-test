import styled from "@emotion/styled";

const Loader = styled.span<{load: boolean}>`
  width: 75%;
  height: 4.8px;
  display: flex;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
  margin: 15px 0 15px 0 ;
  
  &::after {
    content: "";
    width: 25%;
    height: 4.8px;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: animloader 1s linear infinite;
    display: ${props => props.load ? 'inline-block' : 'none'};
  }


  @keyframes animloader {
    0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
  }
`;
export default Loader;
