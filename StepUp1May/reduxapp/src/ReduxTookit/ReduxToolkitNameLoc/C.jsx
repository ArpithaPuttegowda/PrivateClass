import { useSelector } from "react-redux"
import { getLoc, getName } from "./slice"

export const C = () => {
   const name=useSelector(getName)
   const loc=useSelector(getLoc)
  //  const name=useSelector(state=>state.nameLocRedRTK.name)
  //  const loc=useSelector(state=>state.nameLocRedRTK.loc)

  //  const storeData=useSelector(state=>state)

  //  const {name,loc}=useSelector(state=>state.nameLocRedRTK)

  return (
    <div>
      {/* {storeData.nameLocRedRTK.name}
      {storeData.nameLocRedRTK.loc} */}
        <h1>Name:{name}</h1>
        <h1>Loc:{loc}</h1>
    </div>
  )
}
