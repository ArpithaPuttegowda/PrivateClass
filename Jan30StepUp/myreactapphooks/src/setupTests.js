import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { resp } from "./Ajax/fixtures";
import { resp as comments } from "./GetData/fixtures";

const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    // Return a sample response
    return res(ctx.status(200), ctx.json(resp));
  }),
  rest.get("https://jsonplaceholder.typicode.com/comments", (req, res, ctx) => {
    // Return a sample response
    return res(ctx.status(200), ctx.json(comments));
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
