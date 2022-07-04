import React from 'react';
import AddNewTask from './inputs/addTaskInputs/AddNewTask';
import ListAllTasks from './list/ListAllTasks';

export default function MainTask() {
  return (
    <div>
      <section>
        <AddNewTask />
        <ListAllTasks />
      </section>
      <main />
    </div>
  );
}
