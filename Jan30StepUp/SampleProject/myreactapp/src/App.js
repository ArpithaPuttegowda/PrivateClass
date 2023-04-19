import React, {useEffect, useRef} from "react";
import {InputReusuable} from "./Components/ResuableComponents/GenericComponents/Input";
import {OrderedListComp} from "./Components/ResuableComponents/GenericComponents/OrderedListComp";
import {ColorList} from "./Components/ResuableComponents/WithoutResuability/ColorList";
import {FlowerList} from "./Components/ResuableComponents/WithoutResuability/FlowerList";
import {DropDownReusuable} from "./Components/ResuableComponents/GenericComponents/DropDownReusuable";
import {TableReusableComp} from "./Components/ResuableComponents/GenericComponents/TableReusableComp";
import ButtonComp from "./Components/HOC/ButtonComp";
import HoverComp from "./Components/HOC/HoverComp";

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
      {/* <ColorList />
      <FlowerList />
      <OrderedListComp data={data} />
      {inputData?.map((obj, i) => {
        const {label, type} = obj;
        return (
          <InputReusuable key={obj?.label + i} label={label} type={type} />
        );
      })}
      <DropDownReusuable data={["India", "US"]} />
      <DropDownReusuable data={["Karnataka", "Maharastra"]} /> */}
      {/* <TableReusableComp
        headers={["Name", "loc"]}
        data={[
          {name: "Sachin", loc: "Mumbai"},
          {name: "Dhoni", loc: "Ranchi"}
        ]}
        keys={["name", "loc"]}
      />
      <TableReusableComp
        headers={["StatementId", "tenant ID", "Statement type"]}
        data={[{sId: "1", tId: "2", sT: "Finals"}]}
        keys={["sId", "tId", "sT"]}
      /> */}
      <ButtonComp />
      <HoverComp />
    </div>
  );
};

export default App;
