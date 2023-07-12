import React, { useRef } from "react";

//uncontrolled component
export const RegistrationPageUnControlled = () => {
  const nameRef = useRef(null);
  const locRef = useRef(null);
  const phnRef = useRef(null);
  const handleSubmit = () => {
    const name = nameRef?.current?.value;
    const loc = locRef?.current?.value;
    const ph = phnRef?.current?.value;
    nameRef.current.value = "";
    locRef.current.value = "";
    phnRef.current.value = "";
    const data = {
      name,
      loc,
      ph,
    };
    console.log(data);
  };
  return (
    <>
      <p>
        <b>Name:</b>
        <input ref={nameRef} />
      </p>
      <p>
        <b>Loc:</b>
        <input ref={locRef} />
      </p>
      <p>
        <b>Phone No:</b>
        <input ref={phnRef} />
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
