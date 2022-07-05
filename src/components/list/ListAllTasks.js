import React, { useState, useEffect } from 'react';
import { getAllTasks, removeTask } from '../../services/tasksServices';

function ListAllTasks() {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const findAllTasks = async () => {
      try {
        const request = await getAllTasks();
        setAllTasks(request);
      } catch (error) {
        throw new Error({
          message: 'erro when calling service',
        });
      }
    };
    findAllTasks();
  }, []);

  const handleRemoveTask = async (id) => {
    await removeTask(id);
  };

  return (
    <div>
      <ul>
        {
          allTasks.map(({ id, status, work }) => (
            <div key={id}>
              <li>{work}</li>
              <span>{status}</span>
              <button
                type="button"
                value={id}
                onClick={(e) => handleRemoveTask(e.target.value)}
              >
                remove
              </button>
            </div>
          ))
        }
      </ul>
    </div>
  );
}

export default ListAllTasks;
