// import { useReducer } from "react";
// import "./App.css";
// import { A } from "./GlobalStateUsingUseReducer/A";
// import { B } from "./GlobalStateUsingUseReducer/B";
// import { C } from "./GlobalStateUsingUseReducer/C";
// import { reducer } from "./reducer";
// import { initData } from "./initData";
// import { ctx } from "./ctx";

import { Counter } from "./Counter/Counter";

// function App() {
//   const [state, dispatch] = useReducer(reducer, initData);
//   return (
//     <p>
//       <ctx.Provider value={{ state, dispatch }}>
//         <A />
//         <B />
//         <C />
//       </ctx.Provider>
//     </p>
//   );
// }
// export default App;

const App = () => {
  return (
    <div>
      Hellow world
      <span>Pune</span>
      <button disabled>Submit</button>
      <button data-testid="register-btn">Register</button>
      <Counter />
    </div>
  );
};

export default App;
