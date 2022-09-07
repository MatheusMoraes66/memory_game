import { useEffect, useState } from "react";
import "./styles.css";

export interface CardProps{
  id: string;
  flipped?: boolean;
  back: string;
  handleClick?: (id: string) => void
}

export function Card({flipped = false, back, id, handleClick}: CardProps) {
  const [cardContentClassNames, setCardContentClassNames] = useState('card__content')


  useEffect(() => {
    if(flipped){
      setCardContentClassNames(cardContentClassNames + ' card__content--flipped' )
    }else{
      setCardContentClassNames('card__content' )
    }
  }, [flipped])


  const handleClickFn = () => {
    if(handleClick){
      handleClick(id)
    }
  }
 
  return <div className="card" onClick={handleClickFn}>
    <div className={cardContentClassNames}>
      <div className="card__face card__face--front">?</div>
      <div className="card__face card__face--back">{back}</div>
    </div>
  </div>
}