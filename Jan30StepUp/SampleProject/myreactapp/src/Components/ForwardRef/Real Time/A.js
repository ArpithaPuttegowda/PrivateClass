import React, {forwardRef} from "react";

export const A = forwardRef((props, inputRef) => {
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
});
