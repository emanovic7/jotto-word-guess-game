import React from 'react';
import { shallow } from 'enzyme';

import  { findByTestAttr, checkProps } from './testUtils';
import GuessWords from '../components/GuessWords';

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
  Factory function to create a shallowWrapper for the App component
  *@function testSetup 
  *@returns { ShallowWrapper }
*/
const setupWrapper = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessWords {...setupProps} />)
};

//tests
test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(GuessWords, expectedProps);
  // const propError = checkPropTypes(GuessWords.PropTypes, expectedProps, 'prop', GuessWords.name);
  // expect(propError).toBeUndefined();
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setupWrapper({ guessedWords: []});
  });

  test('renders without error', () => {
    const guessWordsComponent = findByTestAttr(wrapper, 'component-guesswords');
    expect(guessWordsComponent.length).toBe(1);
  });

  test('renders instructions to a guessword', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ]
  beforeEach(() => {
    wrapper = setupWrapper({ guessedWords })
  });

  test('renders without error', () => {
    const guessWordsComponent = findByTestAttr(wrapper, 'component-guesswords');
    expect(guessWordsComponent.length).toBe(1);
  });

  test('renders "guessed words" section', () => {
    const guessedWordsDiv = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsDiv.length).toBe(1);
  });

  test('renders correct number of guessed words', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});