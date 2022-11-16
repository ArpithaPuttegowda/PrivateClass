import React, {createRef, useState} from "react";

export const Add = () => {
  const no1Ref = createRef(null);
  const no2Ref = createRef(null);
  const h2Ref = createRef(null);
  const [result, setResult] = useState(0);
  const handleAdd = () => {
    debugger;
    alert(h2Ref.current.innerText);
    let no1 = no1Ref.current.value;
    let no2 = no2Ref.current.value;
    let sum = Number(no1) + Number(no2);
    setResult(sum);
  };
  return (
    <div>
      <p>
        <b>No1:</b>
        <input ref={no1Ref} />
      </p>
      <p>
        <b>No2:</b>
        <input ref={no2Ref} />
      </p>
      <p>
        <button onClick={handleAdd}>ADD</button>
      </p>
      <h1 style={{color: result > 100 ? "red" : "blue"}}>{result}</h1>
      <h2 ref={h2Ref}>SACHIN</h2>
    </div>
  );
};
