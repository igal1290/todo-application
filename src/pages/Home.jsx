// react
import { useState } from 'react';
// components
import TaskItem from '../components/TaskItem';
// metrial-ui
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
// css
import classes from '../styles/Home.module.css';

const Home = () => {
  // state
  const [todoTasks, setTodoTasks] = useState([]);
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
      <Card
        elevation={3}
        sx={{ width: 1100, minHeight: 320, mx: 'auto', mt: '4rem' }}
      >
        <CardContent>
          <Typography mt={2} mb={6} align="center" gutterBottom variant="h4">
            My Tasks
          </Typography>
          <form className={classes.form}>
            <FormControl>
              <InputLabel>Add a new task</InputLabel>
              <Input type="text" value={input} onChange={handleChange} />
            </FormControl>
            <Button
              sx={{ ml: '1rem' }}
              type="submit"
              onClick={addTask}
              variant="contained"
            >
              Add Task
            </Button>
          </form>
          <ul>
            {todoTasks.map((task) => (
              <TaskItem task={task} />
            ))}
          </ul>
          <div>
            {!taskIsAdded && (
              <Typography mt={4} align="center" variant="h6" color="orangered">
                Please add a task
              </Typography>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
