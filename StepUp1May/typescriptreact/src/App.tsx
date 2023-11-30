import { useState } from "react";

// Define the props interface
interface MyComponentProps {
  name: string;
  age: number;
  onClick: () => void;
}

// type MyComponentProps={
//   name: string;
//   age: number;
//   onClick: () => void;
// }


// Functional component using TypeScript
const MyComponent: React.FC<MyComponentProps> = ({ name, age, onClick }) => {
  return (
    <div>
      <h1>Name:{name}</h1>
      <p>{`Age: ${age}`}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};




const App=():JSX.Element=>{
  const [name,setName]=useState<string>("")
  const [age,setAge]=useState<number>(0)
  const handleClick=()=>{
    setAge(10)
    setName("Sachin")
  }
  return <MyComponent age={age} name={name}  onClick={handleClick}/>
}

export default App