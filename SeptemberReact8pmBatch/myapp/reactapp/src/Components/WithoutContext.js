export const WithoutContext = () => {
  const data = "SACHIN";
  return (
    <div>
      <A d={data} />
    </div>
  );
};

const A = ({d}) => {
  return (
    <div>
      <h1>I'm A</h1>
      <B myData={d} />
    </div>
  );
};

const B = ({myData}) => {
  return (
    <div>
      <h1>I'm B</h1>
      <C d={myData} />
    </div>
  );
};

const C = ({d}) => {
  return (
    <div>
      <h1>I'm C</h1>
      <D name={d} />
    </div>
  );
};

const D = ({name}) => {
  return (
    <div>
      <h1>I'm D</h1>
      <E name={name} />
    </div>
  );
};

const E = ({name}) => {
  return (
    <div>
      <h1>I'm E.....{name}</h1>
    </div>
  );
};
