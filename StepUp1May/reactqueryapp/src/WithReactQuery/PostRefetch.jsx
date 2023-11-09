import React from 'react';
import { useQueryClient } from 'react-query';

function AnotherComponent() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData('posts');

  if (!data) {
    return 'No data available.';
  }

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default AnotherComponent;
