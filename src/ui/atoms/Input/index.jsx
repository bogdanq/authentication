import React, { Fragment } from 'react'
import propTypes from 'prop-types'

import styles from './index.css'

export default function Input({ type, value, placeholder, onChange, error }) {
  return (
    <Fragment>
      <input 
        className = { error && styles.Input } 
        type = { type } value = { value } 
        placeholder = { placeholder } 
        onChange = { onChange }
        required/>
      <p className = { styles.error }>{ error }</p>
    </Fragment>
  )
}

Input.propTypes = {
  type: propTypes.string, 
  value: propTypes.string, 
  placeholder: propTypes.string, 
  onChange: propTypes.func, 
  error: propTypes.string
}

Input.defaultProps = {
  type: '', 
  value: '', 
  placeholder: '', 
  onChange: () => {}, 
  error: ''
}