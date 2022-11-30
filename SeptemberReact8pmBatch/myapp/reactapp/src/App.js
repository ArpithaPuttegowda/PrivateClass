import "./App.css";
import {Add} from "./Components/Add";
import Addclass from "./Components/AddC";
import Parent from "./Components/ChildToParent";
import {ParentF} from "./Components/ChildToParentF";
import ConditionalRendering from "./Components/ConditionalRendering";
import {ConditionalRenderingShortCircuit} from "./Components/ConditionalRenderingShortCircuit";
import {Context} from "./Components/ContextAPI/ContextAPI";
import ContextAPIC from "./Components/ContextAPI/ContextAPIC";
import {ContextAPIF} from "./Components/ContextAPI/ContextApiF";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import {Parent1} from "./Components/CtoP";
import {IncCount} from "./Components/IncCount";
import LifeCycle from "./Components/LifeCycleMethods/LifeCycle";
import UnMountingPhase from "./Components/LifeCycleMethods/UnMountingPhase";
import UpdatingPhase from "./Components/LifeCycleMethods/UpdatingPhase";
import {DropDown} from "./Components/ListAndKeys/DropDown";
import {OrderedList} from "./Components/ListAndKeys/OrderedList";
import {ParaListKeys} from "./Components/ListAndKeys/ParaListKeys";
import {TableListkeys} from "./Components/ListAndKeys/TableListkeys";
import {MyColorOrder} from "./Components/ReusuableComponents/MyColorOrder";
import {MyFlowersOrder} from "./Components/ReusuableComponents/MyFlowersOrder";
import {ReusuableOrderList} from "./Components/ReusuableComponents/ReusuableOrderList";
import {Table} from "./Components/ReusuableComponents/Table";
import {WithoutContext} from "./Components/WithoutContext";

function App() {
  const data = ["red", "blue", "yellow", "pink", "green"];
  return (
    <div>
      {/* <Count />
      <CountF />
      <IncCount />
      <Add />
      <Addclass /> */}
      {/* <ConditionalRendering /> */}
      {/* <ConditionalRenderingShortCircuit /> */}
      {/* <Parent /> */}
      {/* <ParentF /> */}
      {/* <Parent1 /> */}
      {/* <WithoutContext /> */}
      {/* <Context /> */}
      {/* <ContextAPIC /> */}
      {/* <ContextAPIF /> */}
      {/* <OrderedList /> */}
      {/* <DropDown /> */}
      {/* <ParaListKeys /> */}
      {/* <TableListkeys /> */}
      {/* <MyColorOrder /> */}
      {/* <MyFlowersOrder /> */}
      {/* <ReusuableOrderList data={["jasmin", "lilly"]} />
      <ReusuableOrderList data={["red", "blue", "orange"]} />
      <ReusuableOrderList />
      <DropDown data={["India", "US"]} header="Country" />
      <DropDown data={["Sachin", "Dhoni"]} header="Player" />
      <Table
        header={["name", "loc", "runs"]}
        data={[
          {name: "sachin", loc: "mumbai", runs: "10"},
          {name: "dhoni", loc: "ranchi", runs: "20"},
          {name: "kohli", loc: "Delhi ", runs: "20"}
        ]}
        keys={["name", "loc", "runs"]}
      />
      <Table
        header={["color", "flower"]}
        data={[
          {color: "red", flower: "rose"},
          {color: "yellow", flower: "lilly"}
        ]}
        keys={["color", "flower"]}
      /> */}
      {/* <LifeCycle /> */}
      {/* <UpdatingPhase /> */}
      <UnMountingPhase />
    </div>
  );
}

export default App;

// import React, {createContext, useContext} from "react";

// const testingstr = createContext();
// const testingarrS = createContext();
// const testingarrN = createContext();

// const Fn = () => {
//   const str = "this string";
//   const arrS = ["arr1", "arr2", "arr3", "arr4", "arr5"];
//   const arrN = {
//     name: "abc",
//     loc: "xyz"
//   };

//   return (
//     <>
//       <h1>Fn Calling Done</h1>
//       {/* <testingstr.Provider value={str}> */}
//       <testingarrS value={arrS}>
//         <testingarrN value={arrN}>
//           <A />
//         </testingarrN>
//       </testingarrS>
//       {/* </testingstr.Provider> */}
//     </>
//   );
// };

// const A = () => {
//   return (
//     <>
//       <h1>Empty Function</h1>
//       <B />
//     </>
//   );
// };

// const B = () => {
//   // let datastr = useContext(testingstr);
//   return (
//     <>
//       <h1>this is B</h1>
//       {/* {datastr} */}
//       <br />
//       <C />
//     </>
//   );
// };

// const C = () => {
//   let dataarrS = useContext(testingarrS);
//   console.log(dataarrS, "data");
//   return (
//     <>
//       <h1>Array String</h1>
//       <br />
//       {dataarrS?.map((v, i) => {
//         return <h1>{v}</h1>;
//       })}
//       <D />
//     </>
//   );
// };

// const D = () => {
//   let dataarrN = useContext(testingarrN);
//   return (
//     <>
//       <h1>Array Number</h1>
//       <br />
//       <h2>
//         {dataarrN?.name}....{dataarrN?.loc}
//       </h2>
//     </>
//   );
// };

// export default Fn;
