import React, { useState } from "react";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./../feature/todo/todoSlice";

function MainRTK() {
    const [newTask, setNewTask] = useState("");
    const task = useSelector((state) => state.todo.value);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        dispatch(add(newTask));
        setNewTask("");
    };

    const tasksDone = task.filter((task) => task.isFinished === true);
    const tasksNotDone = task.filter((task) => task.isFinished === false);

    return (
        <div className="main">
            <form className="add-task" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Tambahkan tugas baru"
                    value={newTask}
                    onChange={handleChange}
                />
                <button type="submit" onClick={addTask}>
                    Add
                </button>
            </form>
            <div className="task-list">
                <h1>
                    {tasksNotDone.length
                        ? `Kamu mempunyai ${tasksNotDone.length} tugas`
                        : "Kamu belum mempunyai tugas untuk dikerjakan"}
                </h1>

                {tasksNotDone.map((task) => (
                    <Task
                        key={task.key}
                        number={task.key}
                        status="task-item"
                        name={task.taskName}
                    />
                ))}
                {tasksDone.map((task) => (
                    <Task
                        key={task.key}
                        number={task.key}
                        status="task-item finished"
                        name={task.taskName}
                    />
                ))}
            </div>
        </div>
    );
}
export default MainRTK;
