import React, { Component } from "react";
import Axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      pokeId: 1
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokeId}`)
      .then((res) => this.setState({ pokemon: res.data }))
      .catch((err) => console.log(err));
  };

  onIncrement = () => {
    this.setState({ pokeId: ++this.state.pokeId });
    this.getPokemon();
  };

  onDecrement = () => {
    if (this.state.pokeId !== 1) {
      this.setState({ pokeId: --this.state.pokeId });
      this.getPokemon();
    }
  };

  render() {
    return (
      <div className="App">
        <img
          className="pokemon-logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png"
          alt="Pokemon"
        />
        {this.state.pokemon.name ? (
          <>
            <p className="poke-name">{this.state.pokemon.name}</p>
            <img className="poke-image" src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name} />
          </>
        ) : (
          <></>
        )}
        <button onClick={this.onDecrement}>Previous</button>
        <button onClick={this.onIncrement}>Next</button>
      </div>
    );
  }
}

export default App;
