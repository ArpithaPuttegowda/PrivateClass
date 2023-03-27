import React, {useContext} from "react";
import {ctx} from "./ctx";

// const ContextAPIF = () => {
//   const data = "INDIA";
//   return (
//     <h1>
//       I'm Parent::
//       <A d={data} />
//     </h1>
//   );
// };

// export default ContextAPIF;

// export const A = ({d}) => {
//   return (
//     <div>
//       I'm A:
//       <B myData={d} />
//     </div>
//   );
// };

// export const B = ({myData}) => {
//   return (
//     <div>
//       I'm B:
//       <C d={myData} />
//     </div>
//   );
// };
// export const C = ({d}) => {
//   return (
//     <div>
//       I'm C:
//       <D d={d} />
//     </div>
//   );
// };
// export const D = ({d}) => {
//   return <div>I'm D:{d}</div>;
// };

const ContextAPIF = () => {
  const data = "INDIA";
  return (
    <h1>
      I'm Parent::
      <ctx.Provider value={data}>
        <A />
      </ctx.Provider>
    </h1>
  );
};

export default ContextAPIF;

export const A = () => {
  return (
    <div>
      I'm A:
      <B />
    </div>
  );
};

export const B = () => {
  const data = useContext(ctx);
  return (
    <div>
      I'm B:{data}
      <C />
    </div>
  );
};

export const C = () => {
  return (
    <div>
      I'm C:<ctx.Consumer>{(d) => d}</ctx.Consumer>
      <D />
    </div>
  );
};
export const D = () => {
  return (
    <div>
      I'm D:<ctx.Consumer>{(d) => d}</ctx.Consumer>
    </div>
  );
};
