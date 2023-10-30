import {render, screen} from "@testing-library/react"
import { Message } from "../ConditionalRendering";

test('renders an error message when there is an error', () => {
     render(<Message isError={true} />);
    const errorMessage = screen.getByText('An error occurred.');
    expect(errorMessage).toBeInTheDocument();
  });
  