import React, {Component} from "react";

class AjaxLifeCycleMethod extends Component {
  constructor() {
    super();
  }
  static getDerivedStateFromProps() {}
  render() {
    return <div>5000 lines code</div>;
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((res) => {
        console.log(res);
      });
  }
}

export default AjaxLifeCycleMethod;
