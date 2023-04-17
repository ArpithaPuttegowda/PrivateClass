import React from "react";

export const Input = () => {
  const data = {
    type1: ["text", "Name"],
    type2: ["password", "Password"],
    type3: ["email", "Email"],
    type4: ["number", "Phone number"]
    // type: ["button", "", "Submit"]
  };

  const lists = () =>
    Object.values(data)?.map((arr, i) => {
      return (
        <p key={arr[1] + i}>
          <span>{arr[1]} </span>
          <input type={arr[0]} />
        </p>
      );
    });

  return (
    <div>
      {lists()}
      <p>
        <button>Registration</button>
      </p>
    </div>
  );
};
