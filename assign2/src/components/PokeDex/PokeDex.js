/*----------------------------------------------------------------
*Author:   Tramaine L. Garner
*Email:    tramainegarner@gmail.com
*File:     PokeDex.js
*Written:  28/04/2019
*Purpose:  List Pokemon(s), apply styles, state managment,
*          passing values and iterate over <Pokenmon /> component
*Notes:    Having regression issues loading animation within each grid item; ended up removing
*----------------------------------------------------------------*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import Pokemon from '../Pokemon/Pokemon';
import PokeDexStyle from './PokeDexStyles.module.css';

class PokeDex extends Component{
    constructor(props){
      super(props);
      this.state = {
        sprites: [],
        loading: false,
      };
    }
    componentDidMount(){
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(res=>res.json()).then(response=>{
        const promiseTimer = setTimeout(() => {
          console.log('Promise received...');
          clearTimeout(promiseTimer);
          this.setState({
            sprites: response.results,
            loading: true,
          });
        }, 2000);
      });
    }
  
    render(){
      const {sprites, loading } = this.state;
           
      return (
        <div>
          {loading 
            ?(
              sprites.map((pokemon,index)=><div className={PokeDexStyle.box}><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/></div>)
            ):( 
              <p> Loading Pokemon List...</p>
            )
          }
        </div>
      );
    }
  }

PokeDex.defaultProps = {

};

PokeDex.propTypes = {

};

export default PokeDex;
