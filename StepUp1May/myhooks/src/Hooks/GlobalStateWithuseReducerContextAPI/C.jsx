import { useContext } from "react"
import { ctx } from "../../ctx"

export const C = () => {
    // const {state}=useContext(ctx)
    const {state:{name,loc}}=useContext(ctx)

  return (
    <div>
        <h1>Name:{name}</h1>
        <h1>Loc:{loc}</h1>
    </div>
  )
}
