import React, { Component } from 'react';

import Header from '../../components/Header';
import GameForm from './GameForm';

export default class HomeView extends Component {
  state = {
    numberOfTeams: 0,
    teams: []
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('fia fia ')
  }
  handleChange = (evt) => {
    evt.preventDefault();
    const { name, value } = evt.target
    this.setState({ [name] : value })
  }

  render(){
    return (
      <div className="home-view text-center">
        <Header
          title="Battle Of Wits"
        />
        <GameForm
          handleSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />

      </div>
    )
  }
}
