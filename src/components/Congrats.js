import React from 'react';

/**
 * Functional React Component for congratulatory message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */

export default (props) => {
    if(props.success) {
      return (
        <div data-test='congrats-component'>
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
}