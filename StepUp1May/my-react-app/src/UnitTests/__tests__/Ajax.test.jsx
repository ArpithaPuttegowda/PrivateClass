import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Ajax from './Ajax';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders posts fetched from the API', async () => {
  render(<Ajax />);

  // Wait for the data to be fetched and displayed
  const post1 = await screen.findByText('Post 1');
  const post2 = await screen.findByText('Post 2');
  const post3 = await screen.findByText('Post 3');

  expect(post1).toBeInTheDocument();
  expect(post2).toBeInTheDocument();
  expect(post3).toBeInTheDocument();
});
