import "./ZombieFighters.css";

const ZombieFightersList = ({ name, price, strength, agility, img }) => {
  return (
    <div className="zombie">
      <img src={img} />
      <h3>{name}</h3>
      <p>
        <span>Price: {price}</span>
      </p>
      <p>
        <span>Strength: {strength}</span>
      </p>
      <p>
        <span>Agility: {agility}</span>
      </p>
    </div>
  );
};

export default ZombieFightersList;
