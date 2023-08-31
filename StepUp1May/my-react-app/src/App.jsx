import { GetComments } from "./Components/customHooks/useFetch/GetComments";
import { GetPosts } from "./Components/customHooks/useFetch/GetPosts";

const App = () => {
  return (
    <div>
      <GetPosts />
      <GetComments />
    </div>
  );
};
export default App;
