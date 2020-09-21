import React from 'react';
import PropTypes from 'prop-types';

const GuessWords = (props) => {
  let contents
  if (props.guessedWords.length === 0){
    contents = (
      <span data-test='guess-instructions'>
        Try to guess the secret word!!
      </span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, idx) => (
      <tr key={idx} data-test='guessed-word'>    
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test='guessed-words'>
        <h3>Guessed Words</h3>
        <table className='table table-sm'>
          <thead className='thead-light'>
            <tr><th>Guessed Word</th><th>Matching Letters</th></tr>
          </thead>
          <tbody>
            { guessedWordsRows }
          </tbody>
        </table>
      </div>
    )
  };

  return (
    <div data-test="component-guesswords">
      { contents }
    </div>
  );
};

GuessWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessWords;