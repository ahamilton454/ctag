import React from 'react';
import './sharedCSS/customButtons.css';

/**
 * @param:
 * @returns:
 * @example:
 */

const CustomButton = ({ buttonClass, buttonTextClass, buttonText,
  buttonCallback }) => {

  return (
    <div
      style={{
        borderRadius: '25px',
        margin: '0 auto',
      }}
      className={buttonClass}
      onClick={buttonCallback} >
      <h2
        className={buttonTextClass}
        style={{ textAlign: 'center' }}>
        {buttonText}</h2>
    </div >
  );

}

export default CustomButton;