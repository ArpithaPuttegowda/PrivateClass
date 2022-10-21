import "./App.css";
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";
import {Menu} from "./Components/Menu/Menu";

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
