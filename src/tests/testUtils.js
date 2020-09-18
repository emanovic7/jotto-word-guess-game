import { ShallowWrapper } from "enzyme";
import checkPropTypes from 'check-prop-types';
import { Component } from "react";

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.checkPropTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
}