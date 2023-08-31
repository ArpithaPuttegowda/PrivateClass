import { useFetch } from "./useFetch"

export const GetComments = () => {
    const [comments,isError,isLoading]=useFetch("https://jsonplaceholder.typicode.com/comments")
    return <div>
  {
    comments?.map((comment)=>{
  return <h1 key={comment?.id}>{comment?.email}</h1>
    })
  }
  {
    isLoading && <h1>Loading....</h1>
  }
  {
    isError && <h1>Something went wrong</h1>
  }
    </div>
}
