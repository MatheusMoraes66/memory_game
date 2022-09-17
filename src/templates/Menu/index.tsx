import { useNavigate } from 'react-router-dom';
import { CardProps } from '../../components/Card';
import { ChoiceCards } from '../../components/ChoiceCards';
import { animal, foods, fruts } from '../../data/cards';
import './styles.css';


export function Menu() {
  return(
    <div className="menu">
      <ChoiceCards />
    </div>
  )
}