export const Parent = () => {
  return (
    <div>
      I'm Parent
      <Child />
    </div>
  );
};

const Child = () => {
  return <div>Child...</div>;
};
