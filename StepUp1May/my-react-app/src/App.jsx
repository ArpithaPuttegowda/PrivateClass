import { Footer } from "./Components/Routes/Footer";
import { Header } from "./Components/Routes/Header";
import { Menu } from "./Components/Routes/Menu";
import "./App.css"
import { Ajax } from "./UnitTests/Ajax";

const App = () => {
  return (
    <div>
     {/* <Header/>
     <Menu/>
     <Footer/> */}
     <Ajax/>
    </div>
  );
};
export default App;
