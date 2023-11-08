import axios from 'axios';
import { useQuery } from 'react-query';

function TodoList() {
  const { data, isLoading, isError, error } = useQuery('posts',async()=>{
   let res= await axios.get("https://jsonplaceholder.typicode.com/posts")
    return res?.data
  } );

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