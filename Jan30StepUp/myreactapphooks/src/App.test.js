import { render, screen } from "@testing-library/react";
import App from "./App";

test("the App component", () => {
  render(<App />);
  expect(screen.getByText("Hellow world")).toBeInTheDocument();
  expect(screen.getByText("Pune")).toBeInTheDocument();
});

test("buttons should present", () => {
  render(<App />);
  const submitBtn = screen.getByText("Submit");
  expect(submitBtn).toBeInTheDocument();
  expect(screen.getByTestId("register-btn")).toBeInTheDocument();
  // expect(screen.getAllByRole("button")[0]).toBeInTheDocument();
  // expect(screen.getAllByRole("button")[1]).toBeInTheDocument();
  expect(submitBtn).toBeDisabled();
});
