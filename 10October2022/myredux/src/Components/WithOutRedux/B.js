import React, {useRef} from "react";

export const B = ({fl}) => {
  const locRef = useRef(null);
  const handleName = () => {
    const loc = locRef.current.value;
    fl(loc);
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleName}>Loc</button>
    </div>
  );
};
