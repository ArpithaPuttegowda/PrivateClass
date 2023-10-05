import { useDispatch } from "react-redux"

export const GetComments = () => {
    const dispatch=useDispatch()
    const handleComments=()=>{
       dispatch({
        type:"COMMENTS_SAGA"
       })
    }

    const handlePosts=()=>{
      dispatch({
        type:"POST_SAGA"
      })
    }
  return (
    <div>
        <button onClick={handleComments}>Get Comments</button>
        <button onClick={handlePosts}>Get Posts</button>
    </div>
  )
}
