import React, {createRef, useState} from "react";

export const Add = () => {
  const [result, setResult] = useState(0);
  let n1Ref = createRef(null);
  let n2Ref = createRef(null);

  const handleSum = () => {
    debugger;
    let n1 = n1Ref.current.value;
    let n2 = n2Ref.current.value;
    n1Ref.current.value = "";
    n2Ref.current.value = "";
    let sum = Number(n1) + Number(n2);
    setResult(sum);
  };
  return (
    <div>
      <p>
        <b>No.1:</b>
        <input ref={n1Ref} />
      </p>
      <p>
        <b>No.2</b>
        <input ref={n2Ref} />
      </p>
      <p>
        <button onClick={handleSum}>Add</button>
      </p>
      <h1 style={{color: result > 100 ? "red" : "green", fontSize: "20px"}}>
        Sum :::{result}
      </h1>
      <h1 className={result > 100 ? "cr" : "cg"}>Sum :::{result}</h1>
    </div>
  );
};
