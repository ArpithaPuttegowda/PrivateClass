import './App.css'
import { Login } from './Login'
import { ChangeName } from './ReduxTookit/ChangeName'
import { ChangeNameWithRedux } from './ReduxTookit/ChangeNameWithRedux'
import { ChangeNameWithReduxToolkit } from './ReduxTookit/ChangeNameWithReduxToolkit'
import { Registration } from './Registration/Registration'

function App() {

  return (
    <>
      <Registration/>
      <Login/>
      <ChangeName/>
      <ChangeNameWithRedux/>
      <ChangeNameWithReduxToolkit/>
    </>
  )
}

export default App
