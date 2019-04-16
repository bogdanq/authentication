import React, { Component } from 'react';
import propTypes from 'prop-types'
import onClickOutside from "react-onclickoutside";

import styles from './index.css'

class Downshift extends Component {  
  state = {
    isOpen: false
  }
  render() {
    const { list, value, type, style, keyPress, defaultValue } = this.props
    const { isOpen } = this.state

    return (
      <div className={styles.wrapper}>
        {
          type === 'text'
            ? <input 
                className = {style} 
                type={type} 
                onKeyPress={keyPress} 
                onChange={this.openDropList} 
                value={value} 
                placeholder={defaultValue}
              />
            : <input 
                className={style} 
                type='button' 
                onClick={this.openDropList} 
                value={value || defaultValue}
              />
          }
       {
          isOpen &&
          <ul className={styles.list} onClick={(e) => this.closeDropList(e)} >
            {
              type === 'text'
              ? list.filter(item => value.length > 0 && item.toLowerCase().includes(value)).map((item, id) => (
                <li key={id}>{item}</li>
              ))
              
              : list.map((item, id) => (
                <li key={id}>{item}</li>
              ))
            }
          </ul>
        }
      </div>
    );
  }

  openDropList = (e) => {
    const { change } = this.props
    change(e)
    this.setState({ isOpen: true })
  }

  closeDropList = (e) => {
    const { changeOptions } = this.props
    this.setState({ isOpen: false })
    changeOptions(e)
  }

  handleClickOutside = () => {
    this.setState({ isOpen: false })
  };
}

Downshift.propTypes = {
  list: propTypes.array, 
  value: propTypes.string,
  changeOptions: propTypes.func,
  defaultValue: propTypes.string,
  change: propTypes.func
}

Downshift.defaultProps = {
  list: [],
  value: '',
  changeOptions: () => {},
  defaultValue: '',
  change: () => {}
}

export default onClickOutside(Downshift);
