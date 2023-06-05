import React from "react";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Ajax } from "../Ajax";
import { resp } from "../fixtures";

test("renders the fetched data", async () => {
  const handlers = [
    rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
      // Return a sample response
      return res(ctx.status(200), ctx.json(resp));
    }),
    rest.get(
      "https://jsonplaceholder.typicode.com/comments",
      (req, res, ctx) => {
        // Return a sample response
        return res(ctx.status(200), ctx.json([]));
      }
    ),
  ];
  // Set up a mock server
  const server = setupServer(...handlers);

  // Start the mock server
  server.listen();

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
  server.close();
});
