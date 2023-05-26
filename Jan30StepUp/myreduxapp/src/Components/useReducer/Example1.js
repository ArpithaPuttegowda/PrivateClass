import React, { useReducer, useState } from "react";

// export const Example1 = () => {
//   const [name, setName] = useState("sachin");
//   const [color, setColor] = useState("blue");
//   const handleName = () => {
//     setName("dhoni");
//   };
//   const handleColor = () => {
//     setColor("yellow");
//   };
//   return (
//     <div>
//       <button onClick={handleName}>ChangeName</button>
//       <button onClick={handleColor}>ChangeColor</button>
//       <h1>{name}</h1>
//       <h1>{color}</h1>
//     </div>
//   );
// };

// export const Example1 = () => {
//   const [info, setInfo] = useState({
//     name: "sachin",
//     color: "blue",
//   });
//   const handleName = () => {
//     // setInfo({ ...info, name: "dhoni" });
//     setInfo((prevState) => {
//       return {
//         ...prevState,
//         name: "dhoni",
//       };
//     });
//   };
//   const handleColor = () => {
//     // setInfo({ ...info, color: "pink" });
//     setInfo((prevState) => {
//       return {
//         ...prevState,
//         color: "pink",
//       };
//     });
//   };
//   return (
//     <div>
//       <button onClick={handleName}>ChangeName</button>
//       <button onClick={handleColor}>ChangeColor</button>
//       <h1>{info.name}</h1>
//       <h1>{info.color}</h1>
//     </div>
//   );
// };

const initData = {
  name: "sachin",
  color: "pink",
};
const reducer = (state, action) => {
  switch (action) {
    case "NAME":
      return (state = { ...state, name: "Dhoni" });
    case "COLOR":
      return (state = { ...state, color: "yellow" });
    default:
  }
  return state;
};
export const Example1 = () => {
  const [state, dispatch] = useReducer(reducer, initData);
  const handleName = () => {
    dispatch("NAME");
  };
  const handleColor = () => {
    dispatch("COLOR");
  };
  return (
    <div>
      <button onClick={handleName}>ChangeName</button>
      <button onClick={handleColor}>ChangeColor</button>
      <h1>{state?.name}</h1>
      <h1>{state?.color}</h1>
    </div>
  );
};
