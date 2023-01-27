import {render, screen} from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should render Hyderabad", () => {
    render(<App label="Password" />);
    expect(screen.getByText("Hyderabad")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
  });
});
