import {Component} from "react";
import "./App.css";
import {ButtonHover} from "./Components/customHooks/ButtonHover";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

class App extends Component {
  componentDidMount() {
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
  }
  render() {
    return (
      <>
        {/* <ReferenceAsCallback /> */}
        {/* <SetStateAsObject /> */}
        {/* <SetStateAsObjectAndCallback /> */}
        {/* <SetStateCallback /> */}
        {/* <ReferenceUsingOnChange /> */}

        <Header />
        {/* <Example /> */}
        {/* <Menu /> */}
        {/* <UseEffect /> */}
        {/* <UseEffectAsComponentWillUnMount /> */}
        {/* <UseRefHook /> */}
        {/* <ControlledComponentsFunctional /> */}
        {/* <UseContextHook /> */}
        {/* <ReactMemoPureComponent /> */}
        {/* <MemoReact /> */}
        {/* <UseMemoHook /> */}
        {/* <UseCallbackHook /> */}
        {/* <Sample /> */}
        {/* <SampleRedux /> */}
        <ButtonHover />
        <Footer />
      </>
    );
  }
}
export default App;
