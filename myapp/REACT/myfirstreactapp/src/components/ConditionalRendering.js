import React, {useState} from "react";

export const ConditionalRendering = () => {
  const [isShow, setIsShow] = useState(true);
  const handleToggle = () => {
    throw new Error("something went wrong");
    // setIsShow(!isShow);
  };
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isShow && <h1>Hyderabad</h1>}
      {isShow ? <p>Mumbai</p> : <p>Karnataka</p>}
    </div>
  );
};

// export const ConditionalRendering = () => {
//   const [isShow, setIsShow] = useState(true);
//   const handleToggle = () => {
//     setIsShow(!isShow);
//   };
//   let template;
//   if (isShow) {
//     template = <h1>Mumbai</h1>;
//   } else {
//     template = <h1>Karnataka</h1>;
//   }
//   return (
//     <div>
//       <button onClick={handleToggle}>Toggle</button>
//       <h1>{template}</h1>
//     </div>
//   );
// };
