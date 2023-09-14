import { CounterMulti } from "./WithoutRedux/Counter"
import { CounterWithRedux } from "./WithRedux/Counter/CounterWithRedux"

export const CounterWReduxWithoutRedux = () => {
  return (
    <div>
        <CounterMulti/>
        <CounterWithRedux/>
    </div>
  )
}
