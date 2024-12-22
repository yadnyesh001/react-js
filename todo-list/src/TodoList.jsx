import React from 'react'
import { useState } from 'react'

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

        

  return (
    <div>TodoList</div>
  )
}

export default TodoList