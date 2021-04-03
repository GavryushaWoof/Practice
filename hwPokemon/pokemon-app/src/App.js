import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import WrapperPokemon from './components/WrapperPokemon'
import InfoPokemon from './components/InfoPokemon'
import { Redirect, Route, Switch } from "react-router-dom";
class SearchBar extends Component {

  constructor() {
    super();
    this.state = {
      profileDetails: {},
      showResults: false
    }
    this.fetchPokemon = this.fetchPokemon.bind(this);
    this.getShowResults = this.getShowResults.bind(this);
    this.dontShowResults = this.dontShowResults.bind(this);
  }

  dontShowResults() {
    if (this.state.showResults) {
      this.setState({ showResults: false })
    } else {
      if (Object.keys(this.state.profileDetails).length === 0) {
        this.fetchPokemon()
      }
      this.getShowResults()
    }
  }

  getShowResults() {
    this.setState({ showResults: true });
  }

  fetchPokemon() {
    axios.get('http://localhost:5000/data')
      .then((response) => {
        this.setState({ profileDetails: response.data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <WrapperPokemon showResults={this.state.showResults} dontShowResults={this.dontShowResults} profileDetails={this.state.profileDetails} />} />
          {Object.keys(this.state.profileDetails).length === 0 ? <Redirect to="/" /> : <Route
            path="/info_pokemon"
            render={() => <InfoPokemon{...this.state.profileDetails.info} />}
          />}
        </Switch>
      </div>
    );
  }
}

export default SearchBar;