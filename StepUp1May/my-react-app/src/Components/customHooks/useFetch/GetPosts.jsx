import { useFetch } from "./useFetch";

export const GetPosts = () => {
  const [posts,isError,isLoading]=useFetch("https://jsonplaceholder.typicode.com/posts")
  return <div>
{
  posts?.map((post)=>{
return <h1 key={post?.id}>{post?.title}</h1>
  })
}
{
  isLoading && <h1>Loading....</h1>
}
{
  isError && <h1>Something went wrong</h1>
}
  </div>
};
