import React, {useState} from "react";

export const ConditionalRenderingAnd = () => {
  const [isChild, setIsChild] = useState(true);
  return (
    <p>
      <button onClick={() => setIsChild(!isChild)}>Toggle</button>
      {isChild && <Child />}
    </p>
  );
};

const Child = () => {
  return <div>I'm child</div>;
};
