import React, { useState } from 'react';
import { insetTask } from '../../../services/tasksServices';

export default function AddNewTask() {
  const [task, setTask] = useState('');

  const handleTask = ({ value }) => {
    setTask(value);
  };

  async function addTask(newTask) {
    await insetTask(newTask);
    setTask('');
  }

  return (
    <div>
      <label htmlFor="write-input">
        New Task:
        <input
          type="text"
          name=""
          data-testid="input-write-task"
          id="write-input"
          value={task}
          placeholder="write new task..."
          onChange={(e) => handleTask(e.target)}
        />
      </label>

      <input
        type="button"
        data-testid="button-add-task"
        id="button-add"
        value="adicionar"
        onClick={() => addTask(task)}
      />
    </div>
  );
}
