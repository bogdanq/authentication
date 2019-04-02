import React, { Component } from "react";
import propTypes from "prop-types";
import styles from './index.css'

class Select extends Component {
 
  render() {
    const { count, onHandlerSelect } = this.props

    return (
      <select className={styles.select} defaultValue={count} onChange={onHandlerSelect}>
        <option>5</option>
        <option>10</option>
        <option>20</option>
      </select>
    )
  }
}
Select.propTypes = {
  count: propTypes.string,
  onHandlerSelect: propTypes.func
};

Select.defaultProps = {
  count: '',
  onHandlerSelect: () => {}
};

export default Select;
