import React, {useRef} from "react";

export const B = () => {
  const locRef = useRef(null);
  const handleLoc = () => {
    let loc = locRef.current.value;
    alert(loc);
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleLoc}>Loc</button>
    </div>
  );
};
