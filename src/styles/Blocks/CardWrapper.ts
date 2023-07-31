import styled from "@emotion/styled";
import UserImage from "./UserImage";
import TitleTop from "./TitleTop";

type CardWrapperType = {
  index: number;
};

const CardWrapper = styled.div<CardWrapperType>`
  flex: 0 1 32%;
  height: 220px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.bgExtraLight};
  border-color: ${(props) =>
    props.theme.colors.cards[props.index % props.theme.colors.cards.length]};
  border-radius: 10px;
  margin: 0.5%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);

  &:hover > ${UserImage} {
      border-top: 15px solid;
      border-color: ${(props) =>
        props.theme.colors.cards[
          props.index % props.theme.colors.cards.length
        ]};
      height: 50px;
  }

  &:hover > ${TitleTop} {
    top: -25px;
  }
`;
export default CardWrapper;
