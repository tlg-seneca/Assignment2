/*----------------------------------------------------------------
*Author:   Tramaine L. Garner
*Email:    tramainegarner@gmail.com
*File:     Home.js
*Written:  27/04/2019
*Purpose:  Return <Home /> component to display navigation link(s)
*Note:
*----------------------------------------------------------------*/

import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import PokeDex from '../PokeDex/PokeDex';
import HomeStyles from './HomeStyles.module.css';

const Home = () => {
    return (
      <div className={HomeStyles.nav}>
        <nav>
        <NavLink className={HomeStyles.nav}>
          <Button component={Link} to="/">
            HOME
          </Button>
        </NavLink>
        </nav>
        <Route path="/" component={PokeDex} />
      </div>
    );
};

export default Home;
