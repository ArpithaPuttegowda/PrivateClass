import { useSelector } from "react-redux"
import { PostsAjax } from "./PostsAjax"

export const C = () => {
  const storeData=useSelector((state)=>state)

  return (
    <div>
        <h1>Name:{storeData?.nl?.name}</h1>
        <h1>Loc:{storeData?.nl?.loc}</h1>
        <PostsAjax/>
    </div>
  )
}
