import React, {createElement} from "react";

// export const WithoutJSX2 = () => {
//   return (
//     <p id="parent">
//       <span>
//         <span id="mySpan">Hyderabad</span>
//         <span>Delhi</span>
//       </span>
//     </p>
//   );
// };

export const WithoutJSX2 = () => {
  return createElement(
    "p",
    {id: "parent"},
    createElement("span", null, [
      createElement("span", {id: "mySpan"}, "Hyderabad"),
      createElement("span", null, "Delhi")
    ])
  );
};
