import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "../Counter";

describe("Counter Component", () => {
  it("should contain +, _,heading and input field", () => {
    render(<Counter />);
    const counterText = screen.getByText("Counter");
    const counterValue = screen.getByTestId("count");
    const incBtn = screen.getByTestId("inc-btn");
    const decBtn = screen.getByTestId("dec-btn");
    const inputField = screen.getByPlaceholderText("enter input");
    expect(incBtn).toBeInTheDocument();
    expect(decBtn).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
    expect(counterText).toBeTruthy();
    expect(counterValue).toBeTruthy();
  });
  it("should show entered input data", () => {
    render(<Counter />);
    const inputField = screen.getByPlaceholderText("enter input");
    fireEvent.change(inputField, {
      target: {
        value: 123,
      },
    });
    expect(inputField.value).toBe("123");
    expect(inputField).toHaveDisplayValue("123");
  });
});
