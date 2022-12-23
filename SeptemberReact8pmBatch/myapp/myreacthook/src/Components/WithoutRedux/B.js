import React, {useRef} from "react";

export const B = ({fl}) => {
  const locRef = useRef(null);
  const handleLoc = () => {
    let loc = locRef.current.value;
    fl(loc);
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleLoc}>Loc</button>
    </div>
  );
};
