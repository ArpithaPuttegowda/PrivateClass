import React, { useState } from 'react';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <label htmlFor='username'>Username</label>
      <input
        onChange={handleChange}
        value={formData.username}
        data-testid="user"
        type="text"
        id="username"
        name="username"
        placeholder='please enter user name'
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={handleChange}
        value={formData.password}
        data-testid="pwd"
        type="password"
        id="password"
        name="password"
      />
      <button data-testid="submit-form" type="submit">Submit</button>
    </div>
  );
};
