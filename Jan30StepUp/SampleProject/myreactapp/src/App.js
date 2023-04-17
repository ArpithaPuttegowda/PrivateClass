import React from "react";
import {Form} from "./Components/ControlledComponents/Form";
import Exception from "./Components/ExceptionHandling/Exception";
import MyAnotherComp from "./Components/ExceptionHandling/MyAnotherComp";
import {Players} from "./Components/ListAndKeys/Players";
import {DropDown} from "./Components/ListAndKeys/DropDown";
import {RenderColorFlower} from "./Components/ListAndKeys/RenderColorFlower";
import {Input} from "./Components/ListAndKeys/Input";
import {OrderUnOrderedList} from "./Components/ListAndKeys/OrderUnOrderedList";
import {TableList} from "./Components/ListAndKeys/TableList";

const App = () => {
  return (
    <div>
      {/* <Exception />
      <MyAnotherComp />
      <Form /> */}
      {/* <Players />
      <DropDown /> */}
      {/* <RenderColorFlower /> */}
      {/* <Input />
      <OrderUnOrderedList /> */}
      <TableList />
    </div>
  );
};

export default App;
