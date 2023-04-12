import React from 'react';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <AppBar position='fixed'>
      <Container fixed>
        <Toolbar>
          <IconButton edge='start'
            color='inherit' aria-label='menu'>
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant='h5'>Deep Dive</Typography>
          <Box mr={10}>
            <Button color='inherit' variant='outlined'>Вход</Button>
          </Box>
          <Button color='secondary' variant='contained'>Регистрация</Button>
          <Button color='secondary' variant='contained'>Test</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
