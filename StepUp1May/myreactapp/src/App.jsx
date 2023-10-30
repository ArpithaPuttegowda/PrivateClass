import React from 'react'
import { Message } from './UnitTest/ConditionalRendering'
import Counter from './UnitTest/Counter'
import ElementComponent from './UnitTest/ElementText'
import { LoginForm } from './UnitTest/InputControl'
import { UserProfile } from './UnitTest/NameComp'

export const App = () => {
  return (
    <div>
      <h1>My first react app</h1>
      <div>Hooks</div>
      <div>Redux</div>
      <Counter/>
      <UserProfile user="Sachin" loc="Ranchi"/>
      <Message isError={false}/>
      <ElementComponent/>
      <LoginForm/>
    </div>
  )
}
