import React from "react";

export const Form = () => {
  return (
    <form>
      <h1>Registration Form</h1>
      <p>
        <b>Name:</b>
        <input />
      </p>
      <p>
        <b>Password:</b>
        <input type="password" />
      </p>
      <p>
        <b>Email:</b>
        <input type="email" />
      </p>
      <p>
        <b>Gender:</b>
        <input type="radio" name="gender" />
        Male <input type="radio" name="gender" />
        Female
      </p>
      <p>
        <b>Hobbies:</b>
        <input type="checkbox" />
        Cri
        <input type="checkbox" />
        Hockey
        <input type="checkbox" />
        volleyBall
      </p>
      <p>
        <b>Country:</b>
        <select>
          <option>India</option>
          <option>Pak</option>
          <option>China</option>
        </select>
      </p>
      <p>
        <b>Address:</b>
        <textarea></textarea>
      </p>
      <p>
        <input type="file" />
      </p>
      <p>
        <input type="button" value="Registration" />
      </p>
    </form>
  );
};
