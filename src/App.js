import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

//components
import Guesswords from './components/GuessWords';
import Congrats from './components/Congrats';
import Input from './components/Input';

//actions
import { getSecretWord } from './actions/index';

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render(){
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <Guesswords guessedWords={this.props.guessedWords}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
