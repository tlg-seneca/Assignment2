/*----------------------------------------------------------------
*	Author:   Tramaine L. Garner
* Email:    tramainegarner@gmail.com
*	File:     Sprite.js
*	Written:  30/04/2019
*	Purpose:  Display individual Pokemon
*	Notes:		Encountered routing problem; wasn't sure the best logical placement for routes
*----------------------------------------------------------------*/

import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

class Sprite extends Component{
    constructor(props){
        super(props);
    }

    render(){
      const { name } = this.props;
        return (
          <div>
            Test: {name}
              <nav>
                  <NavLink to="/"> BACK </NavLink>
                </nav>
                <Route path="/"/>
          </div>
     );
    }
  }

export default Sprite;