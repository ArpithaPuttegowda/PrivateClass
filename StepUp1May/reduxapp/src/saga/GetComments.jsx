import { useDispatch } from "react-redux"

export const GetComments = () => {
    const dispatch=useDispatch()
    const handleComments=()=>{
       dispatch({
        type:"COMMENTS_SAGA"
       })
    }
  return (
    <div>
        <button onClick={handleComments}>Get Comments</button>
    </div>
  )
}
