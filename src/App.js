import React, { Component } from 'react';
import './App.css';

//components
import Guesswords from './components/GuessWords';
import Congrats from './components/Congrats';

class App extends Component {
  render(){
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <Guesswords guessedWords={[ 
          { guessedWord: 'train', letterMatchCount: 3 } 
        ]}/>
      </div>
    );
  }
}

export default App;
