import React, {forwardRef, useEffect} from "react";

export const B = forwardRef((props, myRef) => {
  useEffect(() => {
    myRef?.current?.focus();
  }, [myRef]);
  return <div>Deposit Details</div>;
});
