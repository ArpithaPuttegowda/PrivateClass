import {render, screen} from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should render the header,label and input field", () => {
    render(<App />);
    expect(screen.getByText("My first react app")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    // expect(screen.getByRole("textbox")).toBeInTheDocument();
    // expect(screen.getAllByRole("textbox")[0]).toBeInTheDocument();
    // expect(screen.getAllByRole("textbox")[1]).toBeInTheDocument();
    expect(screen.getByTestId("name")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
  });
});
