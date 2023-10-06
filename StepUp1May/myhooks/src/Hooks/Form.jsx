import { useState } from 'react';

export const Form = () => {
  const [data, setData] = useState({
    name: '',
    loc: '',
  });

  const handleChange = (e) => {
    let key = e.target.id;
    let val = e.target.value;
    
    // Using a functional update to mimic a prevState-like pattern
    setData((prevState) => ({
      ...prevState,
      [key]: val,
    }));
    // setData({...data,[key]:val}); not recommended to use 
  };

  console.log(data, 'myData');

  return (
    <div>
      <p>
        <b>Name</b>
        <input id="name" onChange={handleChange} />
      </p>
      <p>
        <b>Loc</b>
        <input id="loc" onChange={handleChange} />
      </p>
    </div>
  );
};
