import { Monster } from "../../App";
import Card from "../card/card.component";
import "./card-list.styles.css";

type CardProps = {
  monsters: Monster[],
};

const CardList = ({ monsters }: CardProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      const { name, email, id } = monster;
      return (
        <Card
          key={id}
          alt={`monster ${name}`}
          image={`https://robohash.org/${id}?set=set2&size=180x180`}
          heading={name}
          text={email}
        />
      );
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           const { name, email, id } = monster;
//           return (
//             <Card
//               key={id}
//               alt={`monster ${name}`}
//               image={`https://robohash.org/${id}?set=set2&size=180x180`}
//               heading={name}
//               text={email}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
