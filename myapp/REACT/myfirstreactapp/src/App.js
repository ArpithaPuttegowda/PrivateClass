import {Component} from "react";

class App extends Component {
  handleInc = () => {};
  render() {
    return (
      <div>
        <button onClick={this.handleInc}>Inc Count</button>
      </div>
    );
  }
}
export default App;
