import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import  { findByTestAttr, checkProps } from './testUtils';
import Congrats from '../components/Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
  Factory function to create a shallowWrapper for the App component
  *@function testSetup 
  *@returns { ShallowWrapper }
*/
const setupWrapper = (props={}) => { 
  return(
    shallow(<Congrats {...props}/>) 
  );
}

test('renders Congrats component', () => {
   const wrapper = setupWrapper({ success: false });
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