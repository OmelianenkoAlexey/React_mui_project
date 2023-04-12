import React from 'react';
import Button from '@material-ui/core/Button';
import { 
  AppBar, Container, IconButton, Toolbar, Typography, Box, } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles} from '@material-ui/core/styles';

const useStyles= makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}))

function App() {
  const classes = useStyles();
  return (
    <AppBar position='fixed'>
      <Container fixed>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton}
            color='inherit' aria-label='menu'>
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant='h6' className={classes.title}>Deep Dive</Typography>
          <Box style={{ margin: '10px'}}>
            <Button color='inherit' variant='outlined'>Вход</Button>
          </Box>
          <Button color='secondary' variant='contained'>Регистрация</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
