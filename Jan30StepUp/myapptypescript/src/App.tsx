import { AppProps, V, V2, Vector, Vector1, Vector2 } from "./types";

const Hellow = () => {
  return <div>Hellow </div>;
};
function App(appProps: AppProps): JSX.Element {
  const f1 = ({ x, y }: V) => {};
  const f2 = ({ x, y, z }: V2) => {};
  return (
    <div className="App">
      <h1>
        {[...Array(10)].map((val, i) => {
          return <Hellow />;
        })}
      </h1>
    </div>
  );
}

export default App;
