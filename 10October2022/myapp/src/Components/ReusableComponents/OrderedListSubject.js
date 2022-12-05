import React from "react";

export const OrderedListSubject = () => {
  const subjects = ["React", "Vuejs", "Angular"];
  return (
    <div>
      <ol>
        {subjects.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ol>
    </div>
  );
};
