import axios from 'axios';

export async function getAllTasks() {
  try {
    const { data } = await axios.get('http://localhost:3001/tasks');
    return data;
  } catch (error) {
    throw new Error({ message: 'error in method GET' });
  }
}

export async function insertTask(work) {
  try {
    await axios.post('http://localhost:3001/tasks', {
      work,
    });
  } catch (error) {
    throw new Error('error for inserted values');
  }
}

export async function removeTask(id) {
  try {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
  } catch (error) {
    throw new Error('error for inserted values');
  }
}
