import {render, screen} from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should render karnataka", () => {
    render(<App />);
    expect(screen.getByText("Karnataka")).toBeInTheDocument();
  });

  it("should name and input field", () => {
    render(<App />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByTestId("input-name")).toBeInTheDocument();
    expect(screen.getByTestId("input-password")).toBeInTheDocument();
    expect(screen.getByTestId("input-name").value).toBe("Sachin");
    // expect(screen.getByRole("textbox")).toBeInTheDocument();
    // expect(screen.getAllByRole("textbox")[0]).toBeInTheDocument();
  });
});
