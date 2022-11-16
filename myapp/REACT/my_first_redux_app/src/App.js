import {createContext, useReducer} from "react";
import "./App.css";
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";
import {Menu} from "./Components/Menu/Menu";

const inits = {
  name: "",
  loc: ""
};

const reducer = (state, action) => {
  console.log(action, "action of action");
  switch (action.type) {
    case "NAME":
      return (state = {...state, name: action.payload});
    case "LOC":
      return (state = {...state, loc: action.payload});
    default:
      return state;
  }
};

export const ctx = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, inits);
  return (
    <div className="App">
      <ctx.Provider value={{state, dispatch}}>
        <Header />
        <Menu />
        <Footer />
      </ctx.Provider>
    </div>
  );
}

export default App;
