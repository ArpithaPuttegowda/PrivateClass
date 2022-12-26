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
      <WithContextApi />
    </div>
  );
};

export default App;
