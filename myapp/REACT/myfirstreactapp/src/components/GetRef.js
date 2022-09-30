import React, {useRef} from "react";

export const GetRef = () => {
  const inputRef = React.createRef(null);
  const input = useRef(null);
  const handleClick = () => {
    debugger;
    // let data = inputRef.current.value;
    let data = input.current.value;
    alert(data);
  };
  return (
    <div>
      {/* <input ref={inputRef} /> */}
      <input ref={input} />
      <button onClick={handleClick}>click</button>
    </div>
  );
};
