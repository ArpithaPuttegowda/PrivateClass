import { useReducer } from "react";
import "./App.css";
import { A } from "./GlobalStateUsingUseReducer/A";
import { B } from "./GlobalStateUsingUseReducer/B";
import { C } from "./GlobalStateUsingUseReducer/C";
import { reducer } from "./reducer";
import { initData } from "./initData";
import { ctx } from "./ctx";

function App() {
  const [state, dispatch] = useReducer(reducer, initData);
  return (
    <p>
      <ctx.Provider value={{ state, dispatch }}>
        <A />
        <B />
        <C />
      </ctx.Provider>
    </p>
  );
}

export default App;
