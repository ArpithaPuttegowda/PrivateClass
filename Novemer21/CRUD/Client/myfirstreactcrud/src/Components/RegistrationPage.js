import axios from "axios";
import React, {useEffect} from "react";

const RegistrationPage = () => {
  let data = {};

  const handleChange = (eve) => {
    let val = eve.target.value;
    let key = eve.target.id;
    data = {...data, [key]: val};
  };
  const handleClick = () => {
    debugger;
    axios
      .post("http://localhost:2021/student/std-insert", data)
      .then((res) => {
        console.log(res.data);
        getStudentInfo();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getStudentInfo();
  }, []);
  const getStudentInfo = () => {
    axios
      .get("http://localhost:2021/student/get-std")
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <p>
        <b>Name:</b>
        <input id="name" onChange={handleChange} />
      </p>
      <p>
        <b>Password</b>
        <input id="pwd" onChange={handleChange} type="password" />
      </p>
      <p>
        <b>email:</b>
        <input id="email" onChange={handleChange} type="email" />
      </p>
      <p>
        <button onClick={handleClick}>Registration</button>
      </p>
    </div>
  );
};

export default RegistrationPage;
