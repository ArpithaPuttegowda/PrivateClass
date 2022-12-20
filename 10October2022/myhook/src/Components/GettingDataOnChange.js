// import React, {createRef, useRef} from "react";

// export const GettingDataOnChange = () => {
//   const nameRef = createRef(null);
//   const pwdRef = useRef(null);
//   const emailRef = useRef(null);
//   const handleSubmit = () => {
//     const name = nameRef.current.value;
//     const password = pwdRef.current.value;
//     const email = emailRef.current.value;
//     let data = {
//       name,
//       password,
//       email
//     };
//     console.log(data, "data");
//   };
//   return (
//     <div>
//       <p>
//         <b>Name:</b>
//         <input ref={nameRef} />
//       </p>
//       <p>
//         <b>Password:</b>
//         <input type="password" ref={pwdRef} />
//       </p>
//       <p>
//         <b>Email:</b>
//         <input type="email" ref={emailRef} />
//       </p>
//       <p>
//         <input type="button" value="Submit" onClick={handleSubmit} />
//       </p>
//     </div>
//   );
// };

// import React, {createRef, useRef} from "react";

const GettingDataOnChange = () => {
  let data;
  const handleSubmit = (eve) => {
    console.log(data);
  };
  const handleChange = (eve) => {
    let k = eve.target.id;
    let v = eve.target.value;
    data = {...data, [k]: v};
  };
  return (
    <div>
      <p>
        <b>Name:</b>
        <input id="name" onChange={handleChange} />
      </p>
      <p>
        <b>Password:</b>
        <input type="password" id="pwd" onChange={handleChange} />
      </p>
      <p>
        <b>Email:</b>
        <input type="email" id="email" onChange={handleChange} />
      </p>
      <p>
        <input type="button" value="Submit" onClick={handleSubmit} />
      </p>
    </div>
  );
};

export default GettingDataOnChange;
