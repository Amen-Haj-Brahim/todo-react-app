import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputval, setinput] = useState("")

  const changehandler = event => { setinput(event.target.value) };
  return (
    <>
      {
        <div>
          <p>add a task</p>
          <input type="text" id="new_task" onChange={changehandler} value={inputval} /><br></br>
          <button onClick={() => setTasks([tasks, inputval])}>add</button><br></br>
          <tasks></tasks>
        </div >
      }
    </>
  )
}

export default App
