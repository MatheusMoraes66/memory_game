import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardProps } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { animal, foods, fruts } from "../../data/cards";

export function Game() {
  let { id } = useParams(); 
  const [cards, setCards] = useState<CardProps[]>([]);
  useEffect(() => {
    const idSelect = Number(id);
    if(idSelect === 0){
      setCards(fruts)
    }

    if(idSelect === 1){
      setCards(foods)
    }

    if(idSelect === 2){
      setCards(animal)
    }
  })
  return (
    <div>
      <Grid cards={cards} />
    </div>
  )
}