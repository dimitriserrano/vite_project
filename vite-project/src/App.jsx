import { useState } from 'react'
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [ToDoList] = useState([])

  const handleChange = (e) => {
    setNewTodo(e.target.value)
  }

  const insert = () => {
    ToDoList.push(newTodo)
    setNewTodo('')
  }


  return (
    <div>
      <h1>ToDoList</h1>
      <div>
        <p>Requêtes</p>
        <label htmlFor="wish"></label>
        <input 
          type="text" 
          id="wish" 
          name="wish"
          value={newTodo}
          onChange={handleChange}
        />
      </div>
      <p></p>
      <button onClick={() => insert()}>Valider</button>
      {ToDoList.map(e => <div>{e}</div>)}
    </div>
  )
}

export default App;