import React from 'react';
import { shallow } from 'enzyme';
import  { findByTestAttr, checkProps } from './testUtils';
import Congrats from '../components/Congrats';

const defaultProps = { success: false };

/**
  Factory function to create a shallowWrapper for the App component
  *@function testSetup 
  *@returns { ShallowWrapper }
*/
const setupWrapper = (props={}) => {
  const setupProps = { ...defaultProps, ...props } 
  return(
    shallow(<Congrats {...setupProps}/>) 
  );
}

test('renders Congrats component', () => {
   const wrapper = setupWrapper();
   const congratsComponent = findByTestAttr(wrapper, 'congrats-component');
   expect(congratsComponent.length).toBe(1);
});

test('renders no text when sucess prop if false', () => {
  const wrapper = setupWrapper({ success: false });
  const congratsComponent = findByTestAttr(wrapper, 'congrats-component');
  expect(congratsComponent.text()).toBe('');
});

test('renders congrats message when `success` prop is true', () => {
  const wrapper = setupWrapper({ success: true });
  const congratsComponent = findByTestAttr(wrapper, 'congrats-message');
  expect(congratsComponent.text()).not.toBe('');
});

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});