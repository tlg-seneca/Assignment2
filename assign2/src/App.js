/*----------------------------------------------------------------
*	Author:   Tramaine L. Garner
* Email:    tramainegarner@gmail.com
*	File:     App.js
*	Written:  27/04/2019
*	Purpose:  Landing <App /> page via index.js, material-ui usage
* Note:
*----------------------------------------------------------------*/

import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styles from './App.module.css';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit">
            <h3> PokeDex Directory </h3>
            </Typography>
          </Toolbar>
        </AppBar>
        <Home />
      </div>
    );
  }
}

export default App;