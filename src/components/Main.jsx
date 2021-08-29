import React, {useState, useContext} from 'react'
import Task from './Task'
import { TasksContext } from '../App'

function Main() {
    const [newTask, setNewTask] = useState('')
    const tasksContext = useContext(TasksContext)

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        tasksContext.dispatch({type: 'ADD', value: newTask})
        setNewTask('')
    }

    const tasksDone = tasksContext.state.filter(task => task.isFinished === true)
    const tasksNotDone = tasksContext.state.filter(task => task.isFinished === false)

    return (
        <div className="main">
            <form className="add-task" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Tambahkan tugas baru" value={newTask} onChange={handleChange} />
                <button type="submit" onClick={addTask} >Add</button>
            </form>
            <div className="task-list">
                <h1>
                    {tasksNotDone.length 
                     ? `Kamu mempunyai ${tasksNotDone.length} tugas` 
                     :'Kamu belum mempunyai tugas untuk dikerjakan'
                    }
                </h1>

                {tasksNotDone.map(task => <Task key={task.key} number={task.key} status="task-item" name={task.taskName} /> )}
                {tasksDone.map(task => <Task key={task.key} number={task.key} status="task-item finished" name={task.taskName} /> )}
            </div>
        </div>
    )
}
export default Main
