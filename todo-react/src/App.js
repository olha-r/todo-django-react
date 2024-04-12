import './App.css';
import Todo from "./components/Todo";
function App() {
  return (
    <div className="App container">
        <h1 className="app-title">FocusMe</h1>
        <div id="task-container">
            <Todo/>
        </div>
    </div>
  );
}

export default App;
