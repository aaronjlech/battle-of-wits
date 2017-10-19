import React, { Component } from 'react';

import Header from '../../components/Header';
import GameForm from './GameForm';

export default class HomeView extends Component {

  handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('fia fia ')
  }

  render(){
    return (
      <div className="home-view text-center">
        <Header
          title="Battle Of Wits"
        />
        <GameForm
          handleSubmit={this.handleSubmit}
        />

      </div>
    )
  }
}
