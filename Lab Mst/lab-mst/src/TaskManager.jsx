import React, { useState } from "react";
import useForm from "./UseForm";

function TaskManager() {

    const [tasks, setTasks] = useState([]);

    const { values, handleChange, resetForm } = useForm({
        title: "",
        priority: "Low"
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            title: values.title,
            priority: values.priority
        };

        setTasks([...tasks, newTask]);

        resetForm();
    };

    return (
        <div>
            <h2>EcoTrack Task Manager</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Task Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Priority:</label>
                    <select
                        name="priority"
                        value={values.priority}
                        onChange={handleChange}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <button type="submit">Add Task</button>

            </form>

            <hr />

            <h3>Task List</h3>

            <table border="1">
                <thead>
                    <tr>
                        <th>Task Title</th>
                        <th>Priority</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.title}</td>
                            <td>{task.priority}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default TaskManager;