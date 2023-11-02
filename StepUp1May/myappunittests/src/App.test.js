import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

import './setupTests'; // Import the setupTests file

test('renders list items after data fetch', async () => {
  render(<App />);
  
  // Wait for the data rendering to complete
  await waitFor(() => {
    screen.getByText('Title 1');
    screen.getByText('Title 2');
    screen.getByText('Title 3');
    screen.getByText('Title 4');
  });
  
  expect(screen.getAllByRole('listitem').length).toBe(4);
});

test('handles fetch error', async () => {
  // Set up a new server with a specific request handler to simulate an error response
  server.use(
    rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({ error: 'Fetch error' }));
    })
  );

  render(<App />);
  
  // Wait for the error to be logged
  await waitFor(() => {
    expect(console.error).toHaveBeenCalled();
  });
});
