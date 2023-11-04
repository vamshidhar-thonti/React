import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
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
  }
}

export default CardList;
