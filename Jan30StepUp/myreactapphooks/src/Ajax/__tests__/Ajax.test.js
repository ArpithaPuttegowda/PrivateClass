import React from "react";
import { render, screen } from "@testing-library/react";

import { Ajax } from "../Ajax";

test("renders the fetched data", async () => {
  // Set up a mock server

  // Render the component
  render(<Ajax />);

  // Wait for the component to fetch and render the data
  await screen.findByText("delectus aut autem");

  // Verify that the data is rendered correctly
  expect(screen.getByText("delectus aut autem")).toBeInTheDocument();
  const todoLists = await screen.findAllByRole("listitem");
  expect(todoLists).toHaveLength(3);
  expect(
    screen.getByText("quis ut nam facilis et officia qui")
  ).toBeInTheDocument();
  expect(screen.getByText("fugiat veniam minus")).toBeInTheDocument();
  // Clean up the mock server
});
