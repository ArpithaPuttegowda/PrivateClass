import React, {createRef, useRef} from "react";

export const TakeTheFormDataUseRef = () => {
  const nameRef = createRef();
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const handleSubmit = () => {
    let name = nameRef.current.value;
    let password = passwordRef.current.value;
    let email = emailRef.current.value;

    let dataObj = {
      name,
      password,
      email
    };
    console.log(dataObj);
  };
  return (
    <div>
      <h1>SignUp page</h1>
      <p>
        <b>Name:</b>
        <input id="name" ref={nameRef} />
      </p>
      <p>
        <b>Password:</b>
        <input id="password" ref={passwordRef} />
      </p>
      <p>
        <b>Email:</b>
        <input id="email" ref={emailRef} />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
    </div>
  );
};
