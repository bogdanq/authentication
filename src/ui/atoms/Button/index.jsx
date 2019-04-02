import React from "react";
import propTypes from "prop-types";

const Button = ({ style, change, text }) => {
  return <button className={style} onClick={change}>{text}</button>;
};

Button.propTypes = {
  style: propTypes.string,
  change: propTypes.func,
};
Button.defaultProps = {
  style: '',
  change: () => {},
};

export default Button;
