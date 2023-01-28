// import {render, screen} from "@testing-library/react";
// import App from "./App";

// describe("App component", () => {
//   it("should render karnataka", () => {
//     render(<App />);
//     expect(screen.getByText("Karnataka")).toBeInTheDocument();
//   });

//   it("should name and input field", () => {
//     render(<App />);
//     expect(screen.getByText("Name")).toBeInTheDocument();
//     expect(screen.getByTestId("input-name")).toBeInTheDocument();
//     expect(screen.getByTestId("input-password")).toBeInTheDocument();
//     expect(screen.getByTestId("input-name").value).toBe("Sachin");
//     // expect(screen.getByRole("textbox")).toBeInTheDocument();
//     // expect(screen.getAllByRole("textbox")[0]).toBeInTheDocument();
//   });
// });

import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<App />);
  });

  it("should render header of the component", () => {
    expect(screen.getByText("Count")).toBeInTheDocument();
  });

  it("should show count value as zero by default", () => {
    expect(screen.getByTestId("count")).toBeInTheDocument();
    expect(screen.getByTestId("count").innerHTML).toBe("0");
  });

  it("should render inc,dec and input field", () => {
    expect(screen.getByText("Inc")).toBeInTheDocument();
    expect(screen.getByText("Dec")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it("should do onChange", () => {
    const inputRef = screen.getByTestId("input");
    fireEvent.change(inputRef, {
      target: {
        value: "12"
      }
    });
    expect(inputRef.value).toBe("12");
  });

  it("should inc and dec the count", () => {
    const inc = screen.getByText("Inc");
    const dec = screen.getByText("Dec");
    const inputRef = screen.getByTestId("input");
    const count = screen.getByTestId("count");
    fireEvent.change(inputRef, {
      target: {
        value: "12"
      }
    });
    fireEvent.click(inc);
    expect(count.innerHTML).toBe("12");
    fireEvent.click(dec);
    expect(count.innerHTML).toBe("0");
    fireEvent.click(dec);
    expect(count.innerHTML).toBe("-12");
    fireEvent.change(inputRef, {
      target: {
        value: "1"
      }
    });
    fireEvent.click(inc);
    expect(count.innerHTML).toBe("-11");
  });

  it("should render correct prop", () => {
    render(<App loc="Karnataka" />);
    expect(screen.getByText("Karnataka")).toBeInTheDocument();
  });
});
