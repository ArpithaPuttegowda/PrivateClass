import React, {useState} from "react";

export const ConditionalRendering = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <button onClick={handleClick}>
        {isLogin ? <span>Login</span> : <span>Logout</span>}
      </button>
      {isLogin ? <Login /> : <LogOut />}
    </div>
  );
};

const Login = () => {
  return <h1>Login</h1>;
};

const LogOut = () => {
  return <h1>Logout</h1>;
};
