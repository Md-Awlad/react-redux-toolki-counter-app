import "./App.css";
import CounterView from "./app/features/counter/CounterView";
import PostView from "./app/features/posts/PostView";
import UserView from "./app/features/users/UserView";

function App() {
  return (
    <div className="App">
      <CounterView />
      <PostView />
      <UserView />
    </div>
  );
}

export default App;
