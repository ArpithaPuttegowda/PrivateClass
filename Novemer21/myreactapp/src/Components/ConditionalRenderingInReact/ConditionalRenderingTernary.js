import React, {useState} from "react";

export const ConditionalRenderingTernary = () => {
  const [state, setState] = useState(false);
  const handleSubmit = () => {
    setState(!state);
  };
  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
      {state ? <Login /> : <Registration />}
    </div>
  );
};

const Login = () => {
  return <div>Login</div>;
};

const Registration = () => {
  return <div>Registration</div>;
};
