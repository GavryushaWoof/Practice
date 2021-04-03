import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Pokemon extends Component {
  render() {
    return (
      <>
        <p>Name: {this.props.name}</p>
        <p>Type: {this.props.type}</p>
        <p>Info: {this.props.aLittleInfo}</p>
        <Link to="/info_pokemon">
          More Info About Pokémon
        </Link>
      </>
    );
  }
}

export default Pokemon;
