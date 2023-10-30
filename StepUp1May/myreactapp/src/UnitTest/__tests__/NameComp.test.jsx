import { render,screen } from "@testing-library/react";
import {UserProfile} from "../NameComp"

test('renders the user name from props', () => {
    const user = "John"
    const loc="mumbai"
    render(<UserProfile user={user} loc={loc}/>);
    const userName = screen.getByText('4');
    expect(userName).toBeInTheDocument();
    expect(screen.getByText(loc)).toBeInTheDocument()
  });
  