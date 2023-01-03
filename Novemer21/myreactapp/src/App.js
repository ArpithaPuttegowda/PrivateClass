import {Box} from "./Components/CommunicationB/Box";
import {Parent} from "./Components/CommunicationB/ParentToChild";
import "./App.css";
import BoxC from "./Components/CommunicationB/BoxC";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import {Add} from "./Components/Add";
import {AddF} from "./Components/AddUseRef";
import P from "./Components/CommunicationB/ChildToParent";
import {ParentF} from "./Components/CommunicationB/ChildToParentF";
import {ExampleParent} from "./Components/CommunicationB/ChildToParent__ParentToChild";
import {WithoutContextAPI} from "./Components/ContextAPI/WithoutContextAPI";
import {WithContextApi} from "./Components/ContextAPI/WithContextApi";
import {OrderedList} from "./Components/ListAndKeys/OrderedList";
import {UnOrderedList} from "./Components/ListAndKeys/UnorderedList";
import {DropDown} from "./Components/ListAndKeys/DropDown";
import {Headers} from "./Components/ListAndKeys/Headers";
import {ColorsFlowerList} from "./Components/ListAndKeys/ColorsFlowerList";
import {SachinDataList} from "./Components/ListAndKeys/SachinDataList";
import {TableList} from "./Components/ListAndKeys/TableList";
import TableListC from "./Components/ListAndKeys/TableListC";
import {ColorList} from "./Components/ReusuableComponents/ColorList";
import {Flowers} from "./Components/ReusuableComponents/Flowers";
import {OrderListReusuable} from "./Components/ReusuableComponents/OrderListReusuable";

// const App = () => {
//   const loc = "hyderabad";
//   return (
//     <div>
//       <div>
//         <Box n="1" loc={loc} />
//         <Box n="2" />
//         <Box n="3" />
//       </div>
//       <div>
//         <Box />
//         <Box />
//         <Box />
//       </div>
//       <div>
//         <Box />
//         <Box />
//         <Box />
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const name = "sachin";
//   return (
//     <div>
//       <div>
//         <BoxC n="1" loc="mumbai" />
//         <BoxC n="2" />
//         <BoxC n="3" />
//       </div>
//       <div>
//         <BoxC />
//         <BoxC />
//         <BoxC name={name} />
//       </div>
//       <div>
//         <BoxC />
//         <BoxC />
//         <BoxC />
//       </div>
//     </div>
//   );
// };

const App = () => {
  const flowers = ["jasmin", "lilly", "sunFlower"];
  return (
    <div>
      {/* <Count /> */}
      {/* <CountF /> */}
      {/* <Add /> */}
      {/* <AddF /> */}
      {/* <P /> */}
      {/* <ParentF /> */}
      {/* <ExampleParent /> */}
      {/* <WithoutContextAPI /> */}
      {/* <WithContextApi /> */}
      {/* <OrderedList /> */}
      {/* <UnOrderedList /> */}
      {/* <DropDown /> */}
      {/* <Headers /> */}
      {/* <ColorsFlowerList /> */}
      {/* <SachinDataList /> */}
      {/* <TableList /> */}
      {/* <TableListC /> */}
      <ColorList />
      <Flowers data={["Rose", "lilly"]} />
      <OrderListReusuable data={["red", "blue", "yellow"]} />
      <OrderListReusuable data={flowers} />
      <OrderListReusuable />
    </div>
  );
};

export default App;
