import {render} from "@testing-library/react"
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Ajax } from '../Ajax';

const server = setupServer(
  rest.get('/api/data', (req, res, ctx) => {
    return res(ctx.json({ data: {
        "userId": 1,
        "id": 2,
        "title": "eum et est occaecati",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      } }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetches and displays data from the API', async () => {
  const { findByText } = render(<Ajax />);
  const dataElement = await findByText("qui est esse");
  expect(dataElement).toBeInTheDocument();
});
