import { render, screen } from "@testing-library/react";
import { CountryDown } from "./CountryDown";
describe("CountryDropDown", () => {
  it("should render correctly", () => {
    const { container } = render(<CountryDown />);
    expect(container).toMatchSnapshot();
  });
  it("should show country names", () => {
    render(<CountryDown country={["India", "China"]} />);
    expect(screen.getByText("China")).toBeInTheDocument();
  });
});
