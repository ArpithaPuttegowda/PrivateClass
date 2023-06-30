import { FC, useState } from "react";
import "./App.css";

const App: FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return <button onClick={handleClick}>Inc Count {count}</button>;
};

export default App;
