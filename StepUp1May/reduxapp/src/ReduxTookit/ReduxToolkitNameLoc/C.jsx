import { useSelector } from "react-redux"

export const C = () => {
    const storeData=useSelector(state=>state)
  return (
    <div>
        <h1>Name:{storeData?.nameLocRedRTK?.name}</h1>
        <h1>Loc:{storeData?.nameLocRedRTK?.loc}</h1>
    </div>
  )
}
