import React, {useRef} from "react";

export const B = ({b}) => {
  const locRef = useRef(null);
  const handleLoc = () => {
    let loc = locRef.current.value;
    b(loc);
  };
  return (
    <div>
      <div>
        <input ref={locRef} />
        <button onClick={handleLoc}>Location</button>
      </div>
    </div>
  );
};
