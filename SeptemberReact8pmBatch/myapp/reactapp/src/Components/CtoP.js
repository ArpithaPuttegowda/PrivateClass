import {Component, useState} from "react";

export const Parent1 = () => {
  const [mN, setMN] = useState("");
  const [ts, setTs] = useState("");
  const getData = (myNation) => {
    setMN(myNation);
  };
  const fetchData = (techStack) => {
    setTs(techStack);
  };
  const data = "Sachin";
  return (
    <div>
      Parent::::::{mN}....{ts}
      <Child d={data} g={getData} />
      <ChildC a={data} f={fetchData} />
    </div>
  );
};

const Child = ({d, g}) => {
  const Nation = "INDIA";
  const handleClick = () => {
    g(Nation);
  };
  return (
    <div>
      Child...{d}
      <button onClick={handleClick}>
        Click me to pass data from child to Parent{" "}
      </button>
    </div>
  );
};

class ChildC extends Component {
  constructor() {
    super();
    this.techStack = "react";
  }
  handleClick = () => {
    this.props.f(this.techStack);
  };
  render() {
    return (
      <div>
        Child C...{this.props.a}
        <p>
          <button onClick={this.handleClick}>Send Data</button>
        </p>
      </div>
    );
  }
}
