import React, { Component } from 'react';
import propTypes from 'prop-types'

import styles from './index.css'

class Downshift extends Component {  
  state = {
    isOpen: false
  }
  render() {
    const { list, value, defaultValue } = this.props
    const { isOpen } = this.state

    return (
      <div className={styles.wrapper}>
        <input className={styles.btn} type='button' onClick={this.handleOpen} value={value || defaultValue}/>
        <span className={styles.after}></span>
        {
          isOpen &&
          <ul onClick={(e) => this.handleChange(e)} className={styles.list}>
            {
              list.map((item, id) => (
                <li key={id}>{item}</li>
              ))
            }
          </ul>
        }
      </div>
    );
  }

  handleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleChange = (e) => {
    const { update } = this.props
    this.handleOpen()
    update(e)
  }
}

Downshift.propTypes = {
  list: propTypes.any, 
  value: propTypes.string,
  update: propTypes.func,
  defaultValue: propTypes.string
}

Downshift.defaultProps = {
  list: [],
  value: '',
  update: () => {},
  defaultValue: ''
}

export default Downshift;
