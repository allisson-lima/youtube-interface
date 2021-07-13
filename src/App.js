import React from 'react'
import './App.css';
import { 
  ThemeProvider , createTheme, makeStyles 
}from '@material-ui/core'
import Home from './components/Home'



function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#f44336'
      },
      secondary:{
        main: '#3f51b5'
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Home/>
    </ThemeProvider>
  );
}

export default App;
