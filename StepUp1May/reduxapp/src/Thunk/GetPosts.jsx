import { useDispatch } from "react-redux"
import { postAction } from "../actions/thunkActionPosts"

export const GetPosts = () => {
    const dispatch=useDispatch()
    const handlePost=()=>{
     postAction(dispatch)
    }
  return (
    <div>
        <button onClick={handlePost}>Get Post</button>
    </div>
  )
}
