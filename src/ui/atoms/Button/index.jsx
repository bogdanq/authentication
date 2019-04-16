import React from "react";
import propTypes from "prop-types";

const Button = ({ style, change, text, disabled }) => (
  <button 
    className={style} 
    onClick={change}
    disabled={disabled}>
    {text}
  </button>
);

Button.propTypes = {
  style: propTypes.string,
  change: propTypes.func,
  disabled: propTypes.bool
};
Button.defaultProps = {
  style: '',
  change: () => {},
  disabled: false
};

export default Button;
