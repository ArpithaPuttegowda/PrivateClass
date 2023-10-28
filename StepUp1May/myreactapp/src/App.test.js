import { render, screen } from '@testing-library/react';
import {App} from './App';


test("renders App comp",()=>{
  render(<App/>)
  expect(screen.getByText("My first react app")).toBeInTheDocument()
  expect(screen.getByText("Hooks")).toBeInTheDocument()
  expect(screen.getByText("Redux")).toBeInTheDocument()
})
