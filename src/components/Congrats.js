import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React Component for congratulatory message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */

const Congrats = (props) => {
    if(props.success) {
      return (
        <div data-test='congrats-component' className='alert alert-success'>
          <span data-test="congrats-message">
            YOU GUESSED THE WORD, CONGRATULATIONS!!!
          </span>
        </div>
      );
    }else {
      return (
        <div data-test="congrats-component" />
      );
    }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;