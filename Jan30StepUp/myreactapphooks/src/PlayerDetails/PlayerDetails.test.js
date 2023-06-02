import { render, screen } from "@testing-library/react";
import { PlayerDetails } from "./PlayerDetails";

describe("PlayerDetails", () => {
  it("should render successufully", () => {
    const { container } = render(<PlayerDetails />);
    expect(container).toMatchSnapshot();
  });
  it("should render the player name with location", () => {
    render(<PlayerDetails name="Sachin" loc="Mumbai" />);
    expect(screen.getByText("Name:")).toBeInTheDocument();
    expect(screen.getByText("Sachin")).toBeInTheDocument();
    expect(screen.getByText("Loc:")).toBeInTheDocument();
    expect(screen.getByText("Mumbai")).toBeInTheDocument();
  });
  it("should render the player name for different props", () => {
    render(<PlayerDetails name="Kohli" loc="Delhi" />);
    expect(screen.getByText("Kohli")).toBeInTheDocument();
    expect(screen.getByText("Delhi")).toBeInTheDocument();
  });
});
