import axios from 'axios';
import { useQuery } from 'react-query';
import usePostsQuery from '../CustomHook/useClientServices';

function TodoList() {
  const { data, isLoading, isError, error } = usePostsQuery()

  if (isLoading) {
    return 'something is processing in the background';
  }

  if (isError) {
    return `Error: ${error.message}`;
  }

  return (
    <ol>
      {data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ol>
  );
}

export default TodoList;