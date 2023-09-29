import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { postAction } from "../actions/thunkActionPosts"

export const GetPosts = () => {
    const dispatch=useDispatch()
    const handlePost=()=>{
     bindActionCreators(postAction,dispatch)
    }
  return (
    <div>
        <button onClick={handlePost}>Get Post</button>
    </div>
  )
}
