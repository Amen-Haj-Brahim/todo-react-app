import { useState } from 'react'
import './App.css'
import Tasks from './tasks';

function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const changeTitleHandler = event => { setTitle(event.target.value) };
  const changeDescHandler = event => { setDesc(event.target.value) };

  function removeTask(index) {
    setTasks(tasks.filter((element, i) => i !== index))
  }

  return (
    <>
      {
        <div>
          <p>add a task</p>
          {/* <p>title</p>
          <input type="text" id="title" onChange={changeTitleHandler} value={title} /><br></br> */}
          <p>Description</p>
          <input type="text" id="desc" onChange={changeDescHandler} value={desc} />
          <button onClick={() => setTasks([...tasks, desc])}>add</button><br></br>
          <ul>{
            tasks.map((task, index) =>
              <li key={index}>
                <span> {task} </span>
                <button onClick={() => removeTask(index)}> remove </button>
              </li>)
          }</ul>
        </div >
      }
    </>
  )
}

export default App
