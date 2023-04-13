import React from "react";
import {Form} from "./Components/ControlledComponents/Form";
import Exception from "./Components/ExceptionHandling/Exception";
import MyAnotherComp from "./Components/ExceptionHandling/MyAnotherComp";

const App = () => {
  return (
    <div>
      <Exception />
      <MyAnotherComp />
      <Form />
    </div>
  );
};

export default App;
