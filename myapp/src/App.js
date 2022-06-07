import {Component, useState} from "react";
import "./App.css";
import {ControlledComponentsFunctional} from "./Components/ControlledComponentsFunctional";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {UseEffect} from "./Components/Hooks/useEffect";
import {Example} from "./Components/Hooks/useStateHook";
import UnMountingLifeCycle from "./Components/LifeCycleMethods";
import Menu from "./Components/Menu";
import ReactMemoPureComponent from "./Components/ReactMemoPureComponent";
import ReferenceAsCallback from "./Components/ReferenceAsCallback";
import ReferenceUsingOnChange from "./Components/ReferenceUsingOnChange";
import SetStateCallback from "./Components/SetStateCallback";
import {UseContextHook} from "./Components/UseContextHook";
import {UseEffectAsComponentWillUnMount} from "./Components/useEffectAsComponentWillUnMount";
import {UseRefHook} from "./Components/UseRefHook";
import SetStateAsObject from "./SetStateAsObject";
import SetStateAsObjectAndCallback from "./SetStateAsObjectAndCallback";

class App extends Component {
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
        <ReactMemoPureComponent />
        <Footer />
      </>
    );
  }
}
export default App;
