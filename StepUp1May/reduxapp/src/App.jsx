import './App.css'
import PlayerName from './connectMethod/PlayerName'
import { Login } from './Login'
import { ChangeName } from './ReduxTookit/ChangeName'
import { ChangeNameWithRedux } from './ReduxTookit/ChangeNameWithRedux'
import { ChangeNameWithReduxToolkit } from './ReduxTookit/ChangeNameWithReduxToolkit'
import { Counter } from './ReduxTookit/CounterWithRTK/Counter'
import { ReduxToolkitNameLoc } from './ReduxTookit/ReduxToolkitNameLoc/ReduxToolkitNameLoc'
import { Registration } from './Registration/Registration'
import GetPosts from './Thunk/GetPosts'

function App() {

  return (
    <>
      {/* <Registration/>
      <Login/>
      <ChangeName/>
      <ChangeNameWithRedux/>
      <ChangeNameWithReduxToolkit/>
      <ReduxToolkitNameLoc/> */}
      {/* <Counter/> */}
      <GetPosts/>
      <PlayerName/>
    </>
  )
}

export default App
