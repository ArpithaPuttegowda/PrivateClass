import { render, screen } from "@testing-library/react";
import App from "./App";

test("the App component", () => {
  render(<App />);
  expect(screen.getByText("Hellow world")).toBeInTheDocument();
  expect(screen.getByText("Pune")).toBeInTheDocument();
});
