import { forwardRef } from "react";
import { useRef } from "react";

const Parent = () => {
  const myInputRef1 = useRef(null);
  const myInputRef2 = useRef(null);
  const handleClick = () => {
    myInputRef1.current.value = "Sachin";
    myInputRef2.current.value = "Dhoni";
  };
  return (
    <div>
      <Child ref={[myInputRef1, myInputRef2]} name="Mumbai" loc="hyd" />
      <button onClick={handleClick}>Click me to set the data</button>
    </div>
  );
};

export default Parent;

// eslint-disable-next-line react/prop-types, react/display-name
const Child = forwardRef(({ name, loc }, r) => {
  return (
    <div>
      <h1>
        {name}...{loc}
      </h1>
      <input ref={r[0]} />
      <input ref={r[1]} />
    </div>
  );
});
