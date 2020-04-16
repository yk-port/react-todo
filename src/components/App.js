import React, { useState } from 'react';

import {
  AppBar,
  CssBaseline,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Toolbar,
  Typography,
  TextField,
  Button,
  makeStyles,
  useTheme
} from '@material-ui/core';

// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '-webkit-fill-available',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function App(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();

  // const [ todoId, setTodoId ] = useState('');
  const [ value, setValue ] = useState('');
  const [ todos, setTodos ] = useState([]);

  const [ mobileOpen, setMobileOpen ] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  const addTodo = text =>  {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Group List
          </Typography>
        </Toolbar>
      </div>

      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map(text => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}>
          <TextField
            id="outlined-helperText"
            label="Enter Todo"
            variant="outlined"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </form>
        <Grid item xs={12}>
          <List>
            {todos && todos.map((todo, index) => (
              <ListItem button key={index}>
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => removeTodo(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Grid>
      </main>
    </div>
  );
}

export default App;
