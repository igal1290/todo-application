// react
import { useState } from 'react';
// metrial-ui
import { Button, FormControl, Input, InputLabel } from '@mui/material';

const Home = () => {
  // state
  const [todoTasks, setTodoTasks] = useState(['Go for a run', 'go shopping']);
  const [input, setInput] = useState('');

  // handles change of input for each key stroke
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // adds a task to the list
  const addTask = (event) => {
    event.preventDefault();
    setTodoTasks([...todoTasks, input]);
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
        <Button
          disabled={!input}
          type="submit"
          onClick={addTask}
          variant="contained"
        >
          Add Task
        </Button>
      </form>
      <ul>
        {todoTasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
