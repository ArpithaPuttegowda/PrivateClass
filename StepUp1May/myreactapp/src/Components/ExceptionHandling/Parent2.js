import React, { Component } from 'react'
import ErrorBoundaryResualble from './ErrorBoundaryResualble'
import { Hero } from './Hero'

export default class Parent2 extends Component {
  render() {
    return (
      <div>
        <ErrorBoundaryResualble>
       <Hero heroName="joker"/>
       <Hero heroName="Puneeth"/>
       </ErrorBoundaryResualble>
      </div>
    )
  }
}
