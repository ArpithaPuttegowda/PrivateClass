export const Parent = () => {
  const myName = "Sachin";
  return (
    <div>
      I'm Parent
      <Child data={myName} />
    </div>
  );
};

const Child = ({ data }) => {
  return <div>I'm Child...{data}</div>;
};
