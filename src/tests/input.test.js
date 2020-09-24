import React from 'react';
import { shallow } from 'enzyme';

import  { findByTestAttr, storeFactory } from './testUtils';
import Input from '../components/Input';
import { guessWord } from '../actions';

const setupWrapper = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
}

describe('render', () => {
  describe('word has not been guessed', () =>{
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setupWrapper(initialState);
    });
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });
  
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true }
      wrapper = setupWrapper(initialState);
    });
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });
    test('does not render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });
});


describe('redux props', () => {
  test('has success piece of state as a prop', () => {
    const success = true;
    const wrapper = setupWrapper({ success: success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('`guessWord` action creator is a function Prop', () => {
    const wrapper = setupWrapper();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });

});