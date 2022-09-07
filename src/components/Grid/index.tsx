import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { duplicateRegenerateSortArray } from "../../utils/cards";
import { Card, CardProps } from "../Card";
import './styles.css'
export interface GridProps {
  cards: CardProps[];
}

export function Grid({cards}:GridProps)  {
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);
  const [stateCards, setStateCards] = useState(() => {
    return duplicateRegenerateSortArray(cards)
  })
  const navigate = useNavigate();
  const first = useRef<CardProps | null>(null);
  const second = useRef<CardProps | null>(null);
  const unflip = useRef(false);

  const handleReset = () => {
    setStateCards(duplicateRegenerateSortArray(cards))
    setMatches(0)
    setMoves(0)
    clearState()
  }

  const handleClick = (id: string) => {
    const newStateCards = stateCards.map((card)=> {
      if(card.id !== id) return card;

      if(card.flipped) return card;

      if(unflip.current && first.current && second.current){
        first.current.flipped = false;
        second.current.flipped = false;
        clearState();
      }

      card.flipped = true;

      if(first.current === null){
        first.current = card;
      } else if(second.current === null){
        second.current = card;
      }

      if(first.current && second.current){
        setMoves(moves + 1);
        if(first.current.back === second.current.back){
          first.current = null;
          second.current = null;
          setMatches(matches + 1)
        }else{
          unflip.current = true;
        }
      }
      return card
    })
    setStateCards(newStateCards)
  }

  const clearState = () => {
    first.current = null;
    second.current = null;
    unflip.current = false;
  }
return <>
<div className="text">
  <p>Moves: {moves} | Matches: {matches} | <button onClick={() => handleReset()} className="btn">Reset</button> <button onClick={() => navigate(-1)} className="btn">Return</button></p>
</div>
<div className="grid">
  {stateCards.map(card => {
    return <Card {...card} key={card.id} handleClick={handleClick} />
  })}
</div>
</> 

}