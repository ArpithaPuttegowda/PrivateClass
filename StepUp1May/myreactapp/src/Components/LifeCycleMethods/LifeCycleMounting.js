import React, { Component } from "react";

export default class LifeCycleMounting extends Component {
  constructor(p) {
    super();
    console.log("constructor executed",p?.name,p?.loc);
    this.state = {
      name: "Sachin",
      count:0
    };
  }
  static getDerivedStateFromProps(nextProps,nextState) {
    debugger
    console.log("static method executed");
    return null
      
  }
  handleAjax = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    console.log("render executed");
    return <div>Data:::{this.props.name}
    <button onClick={()=>this.setState({
     count:this.state.count+1 
    })}>Count....{this.state.count}</button>
    </div>;
  }
  componentDidMount() {
    this.handleAjax();
  }
}
