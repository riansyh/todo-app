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

    return (
        <div className="main">
            <div className="add-task">
                <input type="text" placeholder="Tambahkan tugas baru" value={newTask} onChange={handleChange} />
                <button onClick={addTask} >Add</button>
            </div>
            <div className="task-list">
                <h1>Kamu mempunyai {tasksContext.state.length} tugas</h1>

                {tasksContext.state.map(task => {
                    if(!task.isFinished) {
                        return <Task key={task.key} number={task.key} status="task-item" name={task.taskName} />
                    } else {
                        return null
                    }
                }
                )}

                {tasksContext.state.map(task => {
                    if(task.isFinished) {
                      return <Task key={task.key} number={task.key} status="task-item finished" name={task.taskName} />  
                    } else {
                        return null
                    }
                }
                )}

            </div>
        </div>
    )
}
export default Main
