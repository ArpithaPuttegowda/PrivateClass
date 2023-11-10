import { useQuery } from 'react-query';
import axios from 'axios';

const usePostsQuery = () => {
  return useQuery('posts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  });
};


export const useCommenstsQuery=(isGetComment)=>{
  return useQuery("comments",async()=>{
    const response=await axios.get("https://jsonplacehoder.typicode.com/comments")
    return response.data
  },{
    enabled:isGetComment,
    onSuccess:(data)=>{
      console.log(data,"comments response")
    },
    onError:(e)=>{
      console.log(e,"error message")
    }
  })
}

export default usePostsQuery;
