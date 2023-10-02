// import { bindActionCreators } from "@reduxjs/toolkit"
// import { connect } from "react-redux"
// import { postAction } from "../actions/thunkActionPosts"

import { useDispatch } from "react-redux"
import { postAction } from "../actions/thunkActionPosts"

// const GetPosts = ({pa}) => {
//   const handlePost=()=>{
//     pa()
//   }
//   return (
//     <div>
//     <button onClick={handlePost}>Get Posts</button>
//     </div>
//   )
// }
// // const mdp=(dispatch)=>{
// //   return {
// //     pa:bindActionCreators(postAction,dispatch)
// //   }
// // }


// // const mdp=(d)=>{
// //   return {
// //     dispatch:d
// //   }
// // }
// const mdp={
//   pa:postAction,
// }
// export default connect(null,mdp)(GetPosts)

// import { bindActionCreators } from "@reduxjs/toolkit"
// import { connect } from "react-redux"
// import { postAction } from "../actions/thunkActionPosts"

const GetPosts = () => {
  const dispatch=useDispatch()
  const handlePost=()=>{
    dispatch(postAction())
  }
  return (
    <div>
    <button onClick={handlePost}>Get Posts</button>
    </div>
  )
}
// const mdp=(dispatch)=>{
//   return {
//     pa:bindActionCreators(postAction,dispatch)
//   }
// }


// const mdp=(d)=>{
//   return {
//     dispatch:d
//   }
// }
export default GetPosts