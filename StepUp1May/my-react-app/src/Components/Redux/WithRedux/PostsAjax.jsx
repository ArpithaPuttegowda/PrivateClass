import axios from "axios"
import { useDispatch } from "react-redux"

export const PostsAjax = () => {
    const dispatch=useDispatch()
    const handlePosts=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
         dispatch({
            type:"POSTS",
            payload:res.data
         })
        }).catch((e)=>{
            console.log(e)
        })
    }
  return (
    <div>
        <button onClick={handlePosts}>Posts</button>
    </div>
  )
}
