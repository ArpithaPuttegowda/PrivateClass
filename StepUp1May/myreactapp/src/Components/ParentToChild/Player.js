export const Player = () => {
  return (
    <div>
      <PlayerName name="Sachin" loc="Mumbai" />
      <PlayerName name="Dhoni" loc="Ranchi" />
      <PlayerName name="Kohli" loc="Delhi" />
    </div>
  );
};

const PlayerName = ({ name, loc }) => {
  return (
    <h1>
      I'm {name}, I'm from {loc}
    </h1>
  );
};
