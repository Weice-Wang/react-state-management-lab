import { useState } from "react";
import "./App.css";
import ZombieFightersList from "./component/ZombieFighters/ZombieFighters.jsx";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "/assets/survivar.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "/assets/scavenger.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "/assets/shadow.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "/assets/tracker.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "/assets/sharp.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "/assets/medic.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "/assets/engineer.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "/assets/brawler.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "/assets/Infiltrator.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "/assets/leader.png",
    },
  ]);

  const handleAddFighter = (zombieFighter) => {
    if (money >= zombieFighter.price) {
      setTeam([...team, zombieFighter]);
      setZombieFighters(
        zombieFighters.filter((zombie) => zombie.id !== zombieFighter.id),
      );
      setMoney(money - zombieFighter.price);
    } else {
      setMoney(`not enough money`);
    }
  };

  const totalStrength = team.reduce(
    (total, fighter) => total + fighter.strength,
    0,
  );
  const totalAgility = team.reduce(
    (total, fighter) => total + fighter.agility,
    0,
  );

  const handleRemoveFighter = (zombieFighter) => {
    setTeam(team.filter((zombie) => zombie.id !== zombieFighter.id));
    setZombieFighters([...zombieFighters, zombieFighter]);
    setMoney(money + zombieFighter.price);
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Total Strength: {totalStrength} </h2>
      <h2>Total Agility: {totalAgility} </h2>
      <section>
        {team.length === 0 ? (
          <p>Pick your team Member</p>
        ) : (
          team.map((zombieFighter) => (
            <li key={zombieFighter.id}>
              <ZombieFightersList {...zombieFighter} />
              <button onClick={() => handleRemoveFighter(zombieFighter)}>
                Remove
              </button>
            </li>
          ))
        )}
      </section>
      <section>
        <ul>
          {zombieFighters.map((zombieFighter) => (
            <li key={zombieFighter.id}>
              <ZombieFightersList {...zombieFighter} />
              <button onClick={() => handleAddFighter(zombieFighter)}>
                Add
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default App;
