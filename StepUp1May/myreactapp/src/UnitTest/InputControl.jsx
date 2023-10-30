import React from 'react';

export const LoginForm = () => {
  return (
    <div>
      <label htmlFor='username'>Username</label>
      <input type="text" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <button data-testid="submit-form" type="submit">Submit</button>
    </div>
  );
};
