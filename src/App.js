import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Routes from './routes'
import { blue, lightBlue,red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: red[700]
    },
    primary: {
      main: blue[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});


class App extends Component {
  render() {
    return ( 
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider> 
    );
  }
}

export default App;