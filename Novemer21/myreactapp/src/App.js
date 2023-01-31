import CountExample from "./Components/CountForUnitTests/CountExample";

const App = () => {
  return (
    <>
      <h1>My first react app</h1>
      <p>
        <b>Name</b>
        <input data-testid="name" />
      </p>
      <p>
        <b>Add</b>
        <input data-testid="add" />
      </p>
      <p>
        <b>Password</b>
        <input placeholder="password" type="password" />
      </p>
      <CountExample data="Mumbai" />
    </>
  );
};

export default App;
