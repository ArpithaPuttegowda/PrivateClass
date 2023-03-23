import React, {useRef, useState} from "react";

export const AddF = () => {
  const [result, setResult] = useState(0);
  // const n1Ref = createRef(null);
  // const n2Ref = createRef(null);
  const n1Ref = useRef(null);
  const n2Ref = useRef(null);
  const handleSum = () => {
    const n1 = n1Ref.current.value;
    const n2 = n2Ref.current.value;
    const sum = Number(n1) + Number(n2);
    setResult(sum);
  };
  return (
    <div>
      <p>
        <b>N01</b>
        <input ref={n1Ref} />
      </p>
      <p>
        <b>N02</b>
        <input ref={n2Ref} />
      </p>
      <p>
        <button onClick={handleSum}>Add</button>
      </p>
      <h1 style={{color: result > 100 ? "red" : "green"}}>{result}</h1>
      <h2 className={result > 100 ? "cr" : "cg"}>{result}</h2>
    </div>
  );
};
