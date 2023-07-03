import "./App.css";
import Profile from "./Components/ChildToParent/AvatarProfile";
import { Parent } from "./Components/ChildToParent/ChildToParent1";
import { Parent2 } from "./Components/ChildToParent/ChildToParent2";

function App() {
  return (
    <div>
      App
      <Parent />
      <Parent2 />
      <Profile />
    </div>
  );
}

export default App;
