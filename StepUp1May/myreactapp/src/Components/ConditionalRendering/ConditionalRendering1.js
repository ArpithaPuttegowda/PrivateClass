import React, { useState } from "react";

export const ConditionalRendering1 = () => {
  const [isChild, setIsChild] = useState(true);
  const handleToggle = () => {
    setIsChild(!isChild);
  };

  //   const renderData = () => {
  //     if (isChild) {
  //       return <Child />;
  //     }
  //   };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {/* {renderData()} */}
      {isChild && <Child />}
    </div>
  );
};

const Child = () => {
  return <div>I'm Child Comp</div>;
};
