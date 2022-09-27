import React, {Component} from "react";

export default class AjaxComponentDidMount extends Component {
  constructor() {
    super();
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => console.log(data, "constructor"));
  }
  static getDerivedStateFromProps() {
    return null;
  }
  render() {
    return <div>AjaxComponentDidMount</div>;
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => console.log(data, "componentDidMount"));
  }
}
