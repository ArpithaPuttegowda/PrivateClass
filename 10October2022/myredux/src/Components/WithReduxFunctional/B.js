import React, {useRef} from "react";
import store from "../../store/store";

export const B = () => {
  const locRef = useRef(null);
  const handleLoc = () => {
    let loc = locRef.current.value;
    store.dispatch({
      type: "LOC_F",
      loc
    });
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleLoc}>Loc</button>
    </div>
  );
};
