import React, {Component} from "react";

class Count extends Component {
  // constructor(){
  //     super()
  //     this.state={

  //     }
  // }
  state = {
    count: 0,
    name: "sachin"
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        <h1>{this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({
              name: "Dhoni"
            })
          }
        >
          Name change...{this.state.name}
        </button>
      </div>
    );
  }
}

export default Count;
