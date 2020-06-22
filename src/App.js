import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: {},
      pokeId: 1
    }
  }

  render(){
    return (
      <div className='App'>
        <img className='pokemon-logo' src='https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png' alt='Pokemon'/>
        <br/>
        <img className='pokedex' src='https://bonnichiwa.github.io/interactive-game-app/images/pokedex2.png' alt='pokedex'/>
      </div>
    )
  }
}

export default App;
