import React, { useState } from "react";

export const MutableState = () => {
  const [name, setName] = useState("Sachin");
  return (
    <div>
      <h1>Parent</h1>
      <button onClick={() => setName("Dhoni")}>Click me..{name}</button>
      <Child n={name} />
    </div>
  );
};

class Child extends React.Component {
  render() {
    return <div>I'm Child...{this.props.n}</div>;
  }
}
