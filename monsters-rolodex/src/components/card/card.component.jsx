import "./card.styles.css";

const Card = (props) => {
  const { alt, image, heading, text } = props;
  return (
    <div className="card-container">
      <img alt={alt} src={image} />
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

// class Card extends Component {
//   render() {
//     const { alt, image, heading, text } = this.props;
//     return (
//       <div className="card-container">
//         <img alt={alt} src={image} />
//         <h2>{heading}</h2>
//         <p>{text}</p>
//       </div>
//     );
//   }
// }

export default Card;
