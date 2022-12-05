import React from "react";
import {Parent} from "./Components/ChildToParent";
import {Parent2} from "./Components/ChildToParent2";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import {PassingData} from "./Components/PassingData";
import {PassingDAta2} from "./Components/PassingDAta2";
import {WithContext} from "./Components/ContextAPI/WithContext";
import {WithoutContext} from "./Components/WithoutContext";
import {WithContext2} from "./Components/ContextAPI/withContext2";
import {Add} from "./Components/Add";
import {OrderedList} from "./Components/ListAndKeys/OrderedList";
import {UnorderList} from "./Components/ListAndKeys/UnorderList";
import {DropDown} from "./Components/ListAndKeys/DropDown";
import {Header} from "./Components/ListAndKeys/Header";
import {TableList} from "./Components/ListAndKeys/TableList";
import {OrderedListColor} from "./Components/ReusableComponents/OrderedListColor";
import {OrderedListFlower} from "./Components/ReusableComponents/OrderedListFlower";
import {OrderedListSubject} from "./Components/ReusableComponents/OrderedListSubject";
import {OrderedListReusuable} from "./Components/ReusableComponents/OrderedListReusuable";
import {DropDownReusuable} from "./Components/ReusableComponents/DropDown";
import {Registration} from "./Components/ReusableComponents/Registration";

export const App = () => {
  return (
    <div>
      {/* <Count />
      <CountF /> */}
      {/* <PassingData /> */}
      {/* <PassingDAta2 /> */}
      {/* <Parent /> */}
      {/* <Parent2 /> */}
      {/* <WithoutContext /> */}
      {/* <WithContext /> */}
      {/* <WithContext2 /> */}
      {/* <Add /> */}
      {/* <OrderedList />
      <UnorderList />
      <DropDown />
      <Header /> */}
      {/* <TableList /> */}
      <OrderedListColor />
      <OrderedListFlower />
      <OrderedListSubject />
      <OrderedListReusuable data={["red", "blue", "yellow"]} />
      <OrderedListReusuable data={["rose", "jasmin", "lilly", "sunFlower"]} />
      <OrderedListReusuable data={["reactjs", "angular", "electonjs"]} />
      <DropDownReusuable data={["India", "Pak", "US"]} />
      <DropDownReusuable data={["Modi", "DeveGowda"]} />
      <Registration></Registration>
    </div>
  );
};
