// material-ui
import { List, ListItem, ListItemText } from '@mui/material';

const TaskItem = ({ task }) => {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={task.text} />
        </ListItem>
      </List>
    </div>
  );
};

export default TaskItem;
