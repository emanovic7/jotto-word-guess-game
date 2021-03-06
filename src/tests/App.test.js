import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { storeFactory } from './testUtils';
import App, { UnconnectedApp } from '../App';

/**
 * @function setup
 * @param {object} state - State for this setup
 * @returns {ShallowWrapper}
 */
const setupWrapper = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
}

describe('redux properties', () => {
  test('has access to state', () => {
    const success = true;
    const wrapper = setupWrapper({ success: success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has access to `secretWord` state', () => {
    const secretWord = 'party';
    const wrapper = setupWrapper({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setupWrapper({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test('`getSecretWord` action creator is a function on the props', () => {
    const wrapper = setupWrapper();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test('`getSecretWord` runs on App mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false, 
    guessedWords: []
  }
  //set up app component with getSecretWord as prop
  const wrapper = shallow(<UnconnectedApp getSecretWord { ...props} />);
  // run lifecycle  method
  wrapper.instance().componentDidMount();
  //check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
