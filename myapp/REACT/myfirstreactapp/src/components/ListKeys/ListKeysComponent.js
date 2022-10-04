import React from "react";

export const ListKeysComponent = () => {
  const states = ["Karnataka", "Telangana", "Mumbai", "Andra"];
  return (
    <div>
      {states.map((myState, index) => {
        return <State key={index + myState} state={myState} />;
      })}
    </div>
  );
};

const State = ({state}) => {
  return <h1>{state}</h1>;
};
