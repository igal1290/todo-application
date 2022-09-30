// react
import { useState } from 'react';
// components
import TaskItem from '../components/TaskItem';
// metrial-ui
import { Button, FormControl, Input, InputLabel } from '@mui/material';

const Home = () => {
  // state
  const [todoTasks, setTodoTasks] = useState(['Go for a run', 'go shopping']);
  const [input, setInput] = useState('');
  const [taskIsAdded, setTaskisAdded] = useState(true);

  // handles change of input for each key stroke
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // adds a task to the list
  const addTask = (event) => {
    event.preventDefault();
    if (input) {
      setTaskisAdded(true);
      setTodoTasks([...todoTasks, input]);
    } else {
      setTaskisAdded(false);
    }
    setInput('');
  };

  return (
    <div>
      <h1>My Tasks</h1>
      <form>
        <FormControl>
          <InputLabel>Add a new task</InputLabel>
          <Input type="text" value={input} onChange={handleChange} />
        </FormControl>
        <Button type="submit" onClick={addTask} variant="contained">
          Add Task
        </Button>
      </form>
      <ul>
        {todoTasks.map((task) => (
          <TaskItem task={task} />
        ))}
      </ul>
      <div>{!taskIsAdded && <p>Please add a task</p>}</div>
    </div>
  );
};

export default Home;
