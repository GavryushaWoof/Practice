import React, { Component } from 'react';
import { Link } from "react-router-dom";
import pokemon from '../assets/pokemon3.png';

class infoPokemon extends Component {
    componentWillUnmount() { 
        this.props.getShowResults() 
    }

    render() {
        return (
            <>
                <img src={pokemon} alt="pokemon" />
                <h1>Biology</h1>
                <section>
                    <h2>Physiology</h2>
                    <p>{this.props.physiology}</p>
                </section>
                <section>
                    <h2>Natural abilities</h2>
                    <p>{this.props.abilities}</p>
                </section>
                <section>
                    <h2>Behavior</h2>
                    <p>{this.props.behavior}</p>
                </section>
                <Link to="/">
                    Come Back
                </Link>
            </>
        );
    }
}

export default infoPokemon;
