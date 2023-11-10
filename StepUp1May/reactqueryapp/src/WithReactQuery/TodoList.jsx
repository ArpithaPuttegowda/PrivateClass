import axios from 'axios';
import { useQuery } from 'react-query';
import usePostsQuery from '../CustomHook/useClientServices';

function TodoList() {
  const { data, isLoading, isError, error } = usePostsQuery()

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  if (isError) {
    return `Error: ${error.message}`;
  }

  return (
    <ol>
      {data?.map((todo) => (
        <li key={todo.id}>{todo.id}</li>
      ))}
    </ol>
  );
}

export default TodoList;