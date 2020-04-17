import React from 'react'

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
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
}));

function HeaderBar({ handleDrawerToggle }) {
  const classes = useStyles();

  return (
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
  )
}

export default HeaderBar;
