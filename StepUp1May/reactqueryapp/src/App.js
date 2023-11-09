import './App.css';
import { PostsData } from './WithReactQuery/PostData';
import  PostRefetch  from './WithReactQuery/PostRefetch';
import TodoList from './WithReactQuery/TodoList';
// import { ToDoList } from './WithoutReactQuery/ToDoList';

 
function App() {
  return (
    <div className="App">
      {/* <ToDoList/> */}
      <TodoList/>
      <PostRefetch/>
      <PostsData/>
    </div>
  );
}

export default App;
