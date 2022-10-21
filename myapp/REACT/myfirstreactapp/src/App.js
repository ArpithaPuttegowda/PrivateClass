import {Footer} from "./components/Routing/Footer";
import {Header} from "./components/Routing/Header";
import {Menu} from "./components/Routing/Menu";
import "./App.css";
import {useEffect} from "react";

const App = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((s) => {
        return s.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
};

export default App;
