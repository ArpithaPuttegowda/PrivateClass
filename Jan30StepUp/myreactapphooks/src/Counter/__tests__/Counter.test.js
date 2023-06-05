import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "../Counter";

describe("Counter Component", () => {
  beforeEach(() => {
    render(<Counter />);
  });
  it("should contain +, _,heading and input field", () => {
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
    const inputField = screen.getByPlaceholderText("enter input");
    fireEvent.change(inputField, {
      target: {
        value: 123,
      },
    });
    expect(inputField.value).toBe("123");
    expect(inputField).toHaveDisplayValue("123");
  });

  it("should inc and dec count value", () => {
    const decBtn = screen.getByTestId("dec-btn");
    const incBtn = screen.getByTestId("inc-btn");
    const counterValue = screen.getByTestId("count");
    const inputField = screen.getByPlaceholderText("enter input");
    fireEvent.change(inputField, {
      target: {
        value: 10,
      },
    });
    expect(counterValue.innerHTML).toBe("0");
    fireEvent.click(incBtn);
    expect(counterValue.innerHTML).toBe("10");
    fireEvent.click(incBtn);
    fireEvent.click(incBtn);
    expect(counterValue.innerHTML).toBe("30");
    fireEvent.click(decBtn);
    expect(counterValue.innerHTML).toBe("20");
    fireEvent.change(inputField, {
      target: {
        value: 1,
      },
    });
    fireEvent.click(decBtn);
    expect(counterValue.innerHTML).toBe("19");
    fireEvent.click(decBtn);
    expect(counterValue.innerHTML).toBe("18");
  });

  it("should apply styling to heading dynamically based on count value", () => {
    const heading = screen.getByTestId("heading");
    expect(heading.className).toBe("cg");
    const incBtn = screen.getByTestId("inc-btn");
    const inputField = screen.getByPlaceholderText("enter input");
    fireEvent.change(inputField, {
      target: {
        value: 100,
      },
    });
    fireEvent.click(incBtn);
    expect(heading.className).toBe("cg");
    fireEvent.click(incBtn);
    expect(heading.className).toBe("cr");
  });

  it("should present input and count", () => {
    const { container } = render(<Counter />);
    const inputRef = container.querySelector("[type='number']");
    const counterRef = container.querySelector("[id='count']");
    // expect(counterRef).toBeInTheDocument();
    // expect(inputRef).toBeInTheDocument();
  });
});
