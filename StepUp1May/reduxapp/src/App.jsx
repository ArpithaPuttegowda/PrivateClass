import './App.css'
import { Login } from './Login'
import { ChangeName } from './ReduxTookit/ChangeName'
import { ChangeNameWithRedux } from './ReduxTookit/ChangeNameWithRedux'
import { ChangeNameWithReduxToolkit } from './ReduxTookit/ChangeNameWithReduxToolkit'
import { ReduxToolkitNameLoc } from './ReduxTookit/ReduxToolkitNameLoc/ReduxToolkitNameLoc'
import { Registration } from './Registration/Registration'

function App() {

  return (
    <>
      <Registration/>
      <Login/>
      <ChangeName/>
      <ChangeNameWithRedux/>
      <ChangeNameWithReduxToolkit/>
      <ReduxToolkitNameLoc/>
    </>
  )
}

export default App
