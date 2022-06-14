import React, {useRef} from "react";
import store from "../../store/store";

export const B = () => {
  const locRef = useRef(null);
  const handleLoc = () => {
    const loc = locRef.current.value;
    store.dispatch({
      type: "LOC",
      data: loc
    });
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleLoc}>Location</button>
    </div>
  );
};
