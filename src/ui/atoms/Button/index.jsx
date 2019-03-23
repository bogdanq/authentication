import React from "react";
import propTypes from "prop-types";

const Button = ({ style, change, text }) => {
  return <button className={style} onClick={change}>{text}</button>;
};

Button.propTypes = {
  style: propTypes.string,
  change: propTypes.func,
  text: propTypes.string
};
Button.defaultProps = {
  style: '',
  change: () => {},
  text: ''
};

export default Button;
