import { useQuery } from 'react-query';
import axios from 'axios';

const usePostsQuery = () => {
  return useQuery('posts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  });
};

export default usePostsQuery;
