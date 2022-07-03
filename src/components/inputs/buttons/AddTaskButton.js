import React from 'react';

export default function AddTaskButton() {
  function sayHello() {
    console.log('sayHello');
  }

  return (
    <input
      type="button"
      data-testid="button-add-task"
      id="button-add"
      onClick={sayHello}
    />
  );
}
