import React, {useRef} from "react";

export const B = () => {
  const locRef = useRef();
  const handleLoc = () => {
    let loc = locRef.current.value;
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleLoc}>Loc</button>
    </div>
  );
};
