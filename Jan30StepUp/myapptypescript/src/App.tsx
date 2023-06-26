type AppProps = {
  name: string;
  fn: () => string;
  loc?: string;
};

const Hellow = () => {
  return <div>Hellow </div>;
};
function App(appProps: AppProps): JSX.Element {
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
