import "./App.css";
import DataFetcher from "./components/DataFetcher";
import InputFocus from "./components/InputFocus";
import PostList from "./components/PostList";
import PostsComponent from "./components/PostsComponent";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <TodoList />
    </div>
  );
}

export default App;
