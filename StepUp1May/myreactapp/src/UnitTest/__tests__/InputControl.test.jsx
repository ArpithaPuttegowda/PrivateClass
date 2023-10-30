import { render, fireEvent } from '@testing-library/react';
import {LoginForm} from "../InputControl"


test('updates username and password when input values change', () => {
  const { getByTestId } = render(<LoginForm />);
  const usernameInput = getByTestId('user');
  const passwordInput = getByTestId('pwd');

  // Simulate user input in the username field
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  expect(usernameInput.value).toBe("testuser")
//   expect(usernameInput).toHaveValue("testuser")

  // Simulate user input in the password field
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  expect(passwordInput).toHaveDisplayValue("password123")
});

test('updates state when input values change', () => {
  const { getByTestId } = render(<LoginForm />);
  // Verify that the state is updated
  const submitButton = getByTestId('submit-form');
  expect(submitButton).toBeInTheDocument();
});
