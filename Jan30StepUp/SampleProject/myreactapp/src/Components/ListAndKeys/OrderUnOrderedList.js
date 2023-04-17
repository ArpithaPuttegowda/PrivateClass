// import React from "react";

// export const OrderUnOrderedList = () => {
//   const flowers = ["Rose", "Jasmin", "Lilly"];
//   const colors = ["Red", "White", "Yellow"];
//   return (
//     <div>
//       <OrderedList colors={colors} />
//       <UnOrderedList flowers={flowers} />
//     </div>
//   );
// };

// const OrderedList = ({colors}) => (
//   <ol>
//     {colors?.map((clr, i) => (
//       <li key={clr + i}>{clr}</li>
//     ))}
//   </ol>
// );

// const UnOrderedList = ({flowers}) => (
//   <ul>
//     {flowers?.map((flower, i) => (
//       <li key={flower + i}>{flower}</li>
//     ))}
//   </ul>
// );

import React from "react";
export const OrderUnOrderedList = () => {
  const flowers = ["Rose", "Jasmin", "Lilly", "Hibiscus"];
  const colors = ["Red", "White", "Yellow", "Green"];

  const dataToRender = () => {
    const handleSachinData = () => alert("Sachin");
    return (
      <div>
        <span onClick={handleSachinData}>Sachin</span>
        <span>Dhoni</span>
        <span>Kohli</span>
      </div>
    );
  };

  return (
    <div>
      <ul>
        {flowers?.map((flower, i) => {
          return <UnOrderedList flower={flower} key={flower + i} />;
        })}
      </ul>
      <ol>
        {colors?.map((color, i) => {
          return <OrderedList clr={color} key={color + i} />;
        })}
      </ol>
      {dataToRender()}
    </div>
  );
};

const OrderedList = ({clr}) => <li>{clr}</li>;

const UnOrderedList = ({flower}) => <li>{flower}</li>;
