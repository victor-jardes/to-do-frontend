import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../../App';
// import MainTasks from '../../components/MainTask';

describe('Test inputs in screen', () => {
  describe('1 - Test if buttons are being rederized', () => {
    it('should exists input for write task', () => {
      render(<App />);

      const getInputForWriteTask = screen.getByLabelText('New Task:');

      expect(getInputForWriteTask)
        .toBeInTheDocument();
      expect(getInputForWriteTask.type).toBe('text');
    });

    it('should exist input for add task', () => {
      render(<App />);

      const getInputeForAddTask = screen.getByTestId('button-add-task');

      expect(getInputeForAddTask).toBeInTheDocument();
      expect(getInputeForAddTask.type).toBe('button');
      expect(getInputeForAddTask).toHaveValue('adicionar');
    });
    //
  });

  // describe.only('2 - tests inputs functionality', () => {
  //   it.skip('should can write, and after adding the value be empty', async () => {
  //     const user = userEvent.setup();
  //     render(<MainTasks />);

  //     const getInputForWriteTask = screen.getByTestId('input-write-task');
  //     const getInputeForAddTask = screen.getByTestId('button-add-task');

  //     expect(getInputForWriteTask).toBeInTheDocument();
  //     expect(getInputForWriteTask.type).toBe('text');
  //     expect(getInputForWriteTask).toHaveValue('');

  //     await user.type(getInputForWriteTask, 'tarefa nova');
  //     expect(getInputForWriteTask).toHaveValue('tarefa nova');

  //     expect(getInputeForAddTask).toBeInTheDocument();
  //     expect(getInputeForAddTask.type).toBe('button');
  //     expect(getInputeForAddTask).toHaveValue('adicionar');

  //     await user.click(getInputeForAddTask);
  //     console.log(getInputForWriteTask);

  //     expect(getInputForWriteTask).toHaveValue('');
  //   });
});
