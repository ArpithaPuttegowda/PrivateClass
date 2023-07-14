import React, { useState } from "react";

export const ConditionalRendering2 = () => {
  const [isChild, setIsChild] = useState(true);
  const handleToggle = () => {
    setIsChild(!isChild);
  };

  //   const renderData = () => {
  //     if (isChild) {
  //       return <Child />;
  //     } else {
  //       return <h1>Child is not there</h1>;
  //     }
  //   };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {/* {renderData()} */}
      {isChild ? <Child /> : <Warning />}
    </div>
  );
};

const Child = () => {
  return <div>I'm Child Comp</div>;
};

const Warning = () => {
  return <h1 style={{ color: "red" }}>Child comp is not there</h1>;
};
