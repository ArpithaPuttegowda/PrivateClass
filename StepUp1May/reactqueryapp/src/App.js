import './App.css';
import { PostsData } from './WithReactQuery/PostData';
import  PostRefetch  from './WithReactQuery/PostRefetch';
import TodoListRQ from './WithReactQuery/TodoList';
// import { ToDoList } from './WithoutReactQuery/ToDoList';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import { ToDoList } from './WithoutReactQuery/ToDoList';
import { GetComments } from './WithReactQuery/GetComments';


 
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div id="menu-items">
      <Link to="wrq">Posts without RQ</Link>
      <Link to="rq">RQ</Link>
      <Link to="comments">Comments</Link>
      </div>
      <Routes>
        <Route element={<ToDoList/>} path="wrq"/>
        <Route element={<TodoListRQ/>} path="rq"/>
        <Route element={<GetComments/>} path="comments" />
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
