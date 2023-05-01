import React, {useRef, useState} from "react";
import {A} from "./A";
import {B} from "./B";

export const ForwardRefWithRealTime = () => {
  const inputRef = useRef(null);
  const [isDeposit, setIsDeposit] = useState(true);
  return (
    <div>
      <A ref={inputRef} />
      <button onClick={() => setIsDeposit(!isDeposit)}>Toggle</button>
      {isDeposit && <B ref={inputRef} />}
    </div>
  );
};
