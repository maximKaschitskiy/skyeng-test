import { CardsType } from "../types";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import CardsWrapper from "../styles/Blocks/CardsWrapper";
import { Card } from "./Card";

export const Cards = () => {

  const cards = useSelector((state: RootState) => state.cards.items);

  return (
    <CardsWrapper>
      {cards.map((item: CardsType, index: number) => {
        return <Card card={item} index={index} key={item.id}/>
      })}
    </CardsWrapper>
  );
};
