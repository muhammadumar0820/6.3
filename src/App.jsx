import Form from './components/Form'
import TodoItem from './components/TodoItem'
import './App.css'

function App() {
  return (
    <div className='todo-app-wrapper'>
      <div className="sidebar">
        <ul className='list'>
          <li>All</li>
          <li>Groceries</li>
          <li>Collage</li>
          <li>Payments</li>
        </ul>
      </div>
      <div className="main">
      <h2>All tasks</h2>

      <Form></Form>
      <TodoItem></TodoItem>
      </div>
    </div>
  )
}

export default App
