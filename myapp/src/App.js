import {Component, useState} from "react";
import "./App.css";
import {ControlledComponentsFunctional} from "./Components/ControlledComponentsFunctional";
import {ButtonHover} from "./Components/customHooks/ButtonHover";
import {Sample} from "./Components/ExampleWithoutRedux/Sample";
import {SampleRedux} from "./Components/ExampleWithRedux/SampleRedux";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {UseEffect} from "./Components/Hooks/useEffect";
import {Example} from "./Components/Hooks/useStateHook";
import UnMountingLifeCycle from "./Components/LifeCycleMethods";
import Menu from "./Components/Menu";
import {MemoReact} from "./Components/ReactMemo";
import ReactMemoPureComponent from "./Components/ReactMemoPureComponent";
import ReferenceAsCallback from "./Components/ReferenceAsCallback";
import ReferenceUsingOnChange from "./Components/ReferenceUsingOnChange";
import SetStateCallback from "./Components/SetStateCallback";
import {UseCallbackHook} from "./Components/UseCallbackHook";
import {UseContextHook} from "./Components/UseContextHook";
import {UseEffectAsComponentWillUnMount} from "./Components/useEffectAsComponentWillUnMount";
import {UseMemoHook} from "./Components/UseMemoHook";
import {UseRefHook} from "./Components/UseRefHook";
import SetStateAsObject from "./SetStateAsObject";
import SetStateAsObjectAndCallback from "./SetStateAsObjectAndCallback";

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
