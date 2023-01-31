import {fireEvent, render, screen} from "@testing-library/react";
import CountExample from "../CountExample";

describe("Count Comp", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<CountExample data="Hyderabad" />);
  });
  it("should show header", () => {
    expect(screen.getByText("Count Value")).toBeInTheDocument();
    expect(screen.getByText("Hyderabad")).toBeInTheDocument();
  });
  it("should render count as 0 and inc,dec, input fields", () => {
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByTestId("count")).toBeInTheDocument();
    expect(screen.getByTestId("count").innerHTML).toBe("0");
    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByTestId("input").value).toBe("0");
  });

  it("should perform dec and inc operation", () => {
    const incRef = screen.getByText("+");
    const decRef = screen.getByText("-");
    const countRef = screen.getByTestId("count");
    const inputRef = screen.getByTestId("input");
    fireEvent.change(inputRef, {
      target: {
        value: "100"
      }
    });
    fireEvent.click(incRef);
    expect(countRef.innerHTML).toBe("100");
    fireEvent.click(decRef);
    expect(countRef.innerHTML).toBe("0");
    fireEvent.click(decRef);
    expect(countRef.innerHTML).toBe("-100");
    fireEvent.change(inputRef, {
      target: {
        value: "10"
      }
    });
    fireEvent.click(incRef);
    expect(countRef.innerHTML).toBe("-90");
  });
});
