export const Parent3 = () => {
  return (
    <div>
      <h1>I'm Parent</h1>
      <Child />
    </div>
  );
};

const Child = () => {
  return <div>Child</div>;
};
