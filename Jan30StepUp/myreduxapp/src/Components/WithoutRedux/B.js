import React, {useRef} from "react";

export const B = ({getLoc}) => {
  const locRef = useRef(null);
  const handleLoc = () => {
    let loc = locRef?.current?.value;
    getLoc(loc);
  };
  return (
    <p>
      <input ref={locRef} />
      <button onClick={handleLoc}>Loc</button>
    </p>
  );
};
