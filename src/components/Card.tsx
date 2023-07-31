import { useRef, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useHover, useDebounce } from 'usehooks-ts'
import { changeId } from '../redux/slice/uiSlice';
import { CardsType } from "../types";
import ContentWrapper from '../styles/Blocks/ContentWrapper';
import CardWrapper from "../styles/Blocks/CardWrapper";
import CardTitle from "../styles/Blocks/CardTitle";
import CardDescription from "../styles/Blocks/CardDescription";
import Nickname from "../styles/Blocks/Nickname";
import UserImage from "../styles/Blocks/UserImage";
import TitleTop from "../styles/Blocks/TitleTop";

export const Card = ({ card, index }: { card: CardsType, index: number }) => {

  const dispatch = useDispatch();

  const handleChage = (value: any) => {
    dispatch(changeId(value));
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${card.login}`);
  }

  const ref = useRef(null);
  const isHover = useHover(ref);
  const debouncedValue = useDebounce<any>(isHover, 500)

  useEffect(() => {
    if (isHover) {
      return handleChage(index);
    }
    return handleChage(null);
  }, [debouncedValue])

  return (
    <CardWrapper ref={ref} index={index} onClick={handleClick}>
      <TitleTop index={index}>{card.login}</TitleTop>
      <UserImage src={card.avatar_url} index={index} />
      <ContentWrapper>
        <Nickname index={index}>{card.login}</Nickname>
        <CardTitle>{card.url}</CardTitle>
        <CardDescription>{card.html_url}</CardDescription>
      </ContentWrapper>
    </CardWrapper>
  );
};
