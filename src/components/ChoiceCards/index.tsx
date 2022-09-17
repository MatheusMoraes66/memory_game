import { useNavigate } from "react-router-dom";

export function ChoiceCards(){
  const navigate = useNavigate();

  const handlerClick = (id: Number) => {
      if(id === 0){
        navigate("/game/0");
      }

      if(id === 1){
        navigate("/game/1");
      }

      if(id === 2){
        navigate("/game/2");
      }
  }
return (
  <>
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
  </>
)
}