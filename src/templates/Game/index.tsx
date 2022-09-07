import { CardProps } from "../../components/Card";
import { Grid } from "../../components/Grid";

export interface GameProps {
  cards: CardProps[];
}

export function Game({cards}: GameProps ) {

  return (
    <div>
      <Grid cards={cards} />
    </div>
  )

}