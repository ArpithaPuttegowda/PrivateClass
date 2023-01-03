import "./App.css";
import {Footer} from "./Components/Footer";
import {Menu} from "./Components/Menu";
import {Header} from "./Components/WithOutRedux/Header";
import {WithoutRedux} from "./Components/WithOutRedux/WithoutRedux";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
