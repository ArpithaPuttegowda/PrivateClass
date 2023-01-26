import React, {useState, useTransition} from "react";

export const Menu = () => {
  const [isPending, startTransition] = useTransition();
  const [listNumbers, setListNumbers] = useState([]);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const arr = [];
      for (let i = 0; i < 5000; i++) {
        arr.push(e.target.value);
      }
      setListNumbers(arr);
    });
  };

  return (
    <>
      <input type="number" value={input} onChange={handleChange} />
      {isPending
        ? "loading..."
        : listNumbers.map((item, i) => <div key={i}>{item}</div>)}
    </>
  );
};
