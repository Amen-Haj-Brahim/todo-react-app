import { useState } from 'react'
import './App.css'
import Tasks from './tasks';

function App() {
  const [tasks, setTasks] = useState([])
  const [done, setDone] = useState([])
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const changeTitleHandler = event => { setTitle(event.target.value) };
  const changeDescHandler = event => { setDesc(event.target.value) };

  function addTask() {
    setTasks([...tasks, desc])
    setDesc("")
  }

  function removeTask(index) {
    setTasks(tasks.filter((element, i) => i !== index))
  }
  function moveUp(index) {
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]]
      setTasks(newTasks)
    }
  }
  function moveDown(index) {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]]
      setTasks(newTasks)
    }
  }
  function updateTask(index) {

  }
  function markDone(index) {
    setDone([...done, tasks[index]])
    removeTask(index)
  }
  return (
    <>
      {
        <div>
          <h1>Todo</h1>
          <h2>add a task</h2>
          <p>Description</p>
          <input type="text" id="desc" onChange={changeDescHandler} value={desc} />
          <button onClick={() => addTask()}>add</button><br></br>
          <ol>
            {
              tasks.map((task, index) =>
                <li key={index}>
                  <span> {task} </span>
                  <button onClick={() => markDone(index)}> mark done </button>
                  <button onClick={() => removeTask(index)}> remove </button>
                  <button onClick={() => moveUp(index)}> move up </button>
                  <button onClick={() => moveDown(index)}> move down </button>
                  <button onClick={() => updateTask(index)}> update </button>
                </li>)
            }
          </ol>
          <h2>Done</h2>
          <ol>
            {
              done.map((task, index) =>
                <li key={index}>
                  <span> {task} </span>
                </li>)
            }
          </ol>

        </div >
      }
    </>
  )
}

export default App
