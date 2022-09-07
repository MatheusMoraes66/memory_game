import { useNavigate } from 'react-router-dom';
import { CardProps } from '../../components/Card';
import { animal, foods, fruts } from '../../data/cards';
import './styles.css';

export interface MenuProps{
  choice?: (cards: CardProps[]) => void
}

export function Menu({choice}:MenuProps) {

  const navigate = useNavigate();

  const handlerClick = (id: Number) => {
    if(choice){
      if(id === 0){
        console.log(fruts)
          choice(fruts)
      }

      if(id === 1){
        console.log(foods)
        choice(foods)
      }

      if(id === 2){
        console.log(animal);
        choice(animal)
      }
      navigate("/game");
    }
  }
 
  return(
    <div className="menu">
      <div className="menu__description">
        <h6>Choose one of the options from the card below.</h6>
      </div>
      <div className="menu__items">
        <div className="menu__item" onClick={() => handlerClick(0)}>
          <div className="menu__item--icon">🍎</div>
          <div className="menu__item--text">Fruit</div>
        </div>

        <div className="menu__item" onClick={() => handlerClick(1)}>
          <div className="menu__item--icon">🍔</div>
          <div className="menu__item--text">Food</div>
        </div>

        <div className="menu__item" onClick={() => handlerClick(2)}>
          <div className="menu__item--icon">🐻</div>
          <div className="menu__item--text">Animal</div>
        </div>
      </div>
  </div>
  )
}