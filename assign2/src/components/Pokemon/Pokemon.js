/*----------------------------------------------------------------
*	Author:   Tramaine L. Garner
* Email:    tramainegarner@gmail.com
*	File:     Pokemon.js
*	Written:  29/04/2019
*	Purpose:  Apply styles, accept "props" value(s) from PokeDex.js, 
*           and material-ui <Grid> component(s) usage
*	Notes:		Encountered routing problem; wasn't sure the best logical placement for routes
*----------------------------------------------------------------*/

import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import styles from './Pokemon.module.css';
import Sprite from './Sprite';

class Pokemon extends Component{
  render(){
    const {pokemon,id} = this.props;
    let URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/';
    return (
      <div className={`${styles.align} ${styles.image}`}>
        <GridList cellHeight={180}>
          <GridListTile>
            <img src={URL + `/${id}.png`} alt={pokemon.name}/>
            <GridListTileBar
              title={pokemon.name} 
              subtitle={<span>PokeDox #: {id}</span>}             
              actionIcon={
                <IconButton>
                  <nav>
                    <NavLink to={`/sprite/${id}`}><InfoIcon /></NavLink>
                  </nav>
                  <Route path={`/sprite/${id}`} component={Sprite} />
                </IconButton>
              }
            />
          </GridListTile>       
        </GridList>
      </div>
   );
  }
}

export default Pokemon;