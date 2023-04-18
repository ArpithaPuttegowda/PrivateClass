import React, {useEffect, useRef} from "react";
import {InputReusuable} from "./Components/ResuableComponents/GenericComponents/Input";
import {OrderedListComp} from "./Components/ResuableComponents/GenericComponents/OrderedListComp";
import {ColorList} from "./Components/ResuableComponents/WithoutResuability/ColorList";
import {FlowerList} from "./Components/ResuableComponents/WithoutResuability/FlowerList";

const App = () => {
  useEffect(() => {
    myRef?.current?.focus();
  }, []);
  const myRef = useRef();
  const data = ["Jamun", "Champakali"];
  const inputData = [
    {label: "NAME:", type: "text"},
    {label: "Password:", type: "password"}
  ];
  return (
    <div>
      <ColorList />
      <FlowerList />
      <OrderedListComp data={data} />
      {inputData?.map((obj, i) => {
        const {label, type} = obj;
        return (
          <InputReusuable key={obj?.label + i} label={label} type={type} />
        );
      })}
    </div>
  );
};

export default App;
