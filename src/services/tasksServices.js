import axios from 'axios';

export async function getAllTasks() {
  try {
    const { data } = await axios.get('http://localhost:3001/tasks');
    return data;
  } catch (error) {
    throw new Error({ message: 'error in method GET' });
  }
}

export async function insetTask(work) {
  try {
    await axios.post('http://localhost:3001/tasks', {
      work,
    });
  } catch (error) {
    throw new Error('error for inserted values');
  }
}
