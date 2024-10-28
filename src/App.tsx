import "./App.css"
import { TaskList } from "./features/tasks/tasks"

const App = () => {
  return (
    <div className="App">
      <h1>Task Management</h1>
      <TaskList/>
    </div>
  )
}

export default App
