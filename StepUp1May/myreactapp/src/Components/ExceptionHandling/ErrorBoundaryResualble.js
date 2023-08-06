import React, { Component } from 'react'

export default class ErrorBoundaryResualble extends Component {
    state={
        isError:false
    }
    static getDerivedStateFromError(){
        return {
            isError:true
        }
    }
    componentDidCatch(e){
        console.log(e)
    }
  render() {
    return (
      <div>
        {
            this.state.isError?<h1>Something went wrong....exception occured</h1>:this.props.children
        }
      </div>
    )
  }
}
