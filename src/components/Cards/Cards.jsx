import "./cards.scss";
import data from "../../data/data.json";


const Cards = () => {

  const containerCard = ({ id, title, cover, description }) => (
    <figure className="cards" key={id}>
      <img src={cover} alt={description} className="cards-img" />
      <figcaption className="cards-txt">{title}</figcaption>
    </figure>
  );

  return (
    <article className="cards-container">
      {data.map((article) => containerCard(article))}
    </article>
  );
};

export default Cards;
