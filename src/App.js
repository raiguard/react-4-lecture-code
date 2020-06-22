import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      pokeId: 1
    }
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokeId}`)
      .then(res => this.setState({ pokemon: res.data }))
      .catch(err => console.log(err));
  }

  handleIncrement = () => {
    this.setState({pokeId: this.state.pokeId + 1});
    this.getPokemon();
  }

  handleDecrement = () => {
    this.setState({pokeId: this.state.pokeId - 1})
    this.getPokemon();
  }

  render() {
    return (
      <div className='App'>
        <img className='pokemon-logo' src='https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png' alt='Pokemon' />
        <br />
          {this.state.pokemon.name
            ? (
              <>
                <p className='poke-name'>{this.state.pokemon.name}</p>
                <img className='poke-image' src={this.state.pokemon.sprites.front_default} alt='Pokemon'/>
              </>
            )
            : null}
            <section>
              <button onClick={this.handleDecrement}>Previous</button>
              <button onClick={this.handleIncrement}>Next</button>
            </section>
      </div>
    )
  }
}

export default App;
