import React from 'react';
import { shallow } from 'enzyme';

import  { findByTestAttr, checkProps } from './testUtils';
import GuessWords from '../components/GuessWords';

const defaultProps = {
  guessedWords: '[{ guessedWord: "train", letterMatchCount: 3 }]',
};

/**
  Factory function to create a shallowWrapper for the App component
  *@function testSetup 
  *@returns { ShallowWrapper }
*/
const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessWords {...setupProps} />)
};


test('renders component without error', () => {

});

test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(GuessWords, expectedProps);
  // const propError = checkPropTypes(GuessWords.PropTypes, expectedProps, 'prop', GuessWords.name);
  // expect(propError).toBeUndefined();
});