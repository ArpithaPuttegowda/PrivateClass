import React, {createRef, useRef, useState} from "react";
import "../App.css";

export const Add = () => {
  const [result, setResult] = useState(0);
  const no1Ref = createRef(null);
  const no2Ref = useRef(null);
  const handleSum = () => {
    let no1 = no1Ref.current.value;
    let no2 = no2Ref.current.value;
    no1Ref.current.value = "";
    no2Ref.current.value = "";
    let sum = Number(no1) + Number(no2);
    setResult(sum);
  };
  return (
    <div>
      <p>
        <b>N1:</b>
        <input ref={no1Ref} />
      </p>
      <p>
        <b>N2:</b>
        <input ref={no2Ref} />
      </p>
      <p>
        <button onClick={handleSum}>Sum</button>
      </p>
      <h1 style={{color: result > 100 ? "red" : "green"}}>Result:{result}</h1>
      <h1 className={result > 100 ? "cr" : "cg"}>Result::{result}</h1>
    </div>
  );
};
