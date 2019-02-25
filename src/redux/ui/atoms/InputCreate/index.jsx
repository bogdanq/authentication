import React, { Fragment } from 'react'
import propTypes from 'prop-types'

export default function InputCreate({ typeInput, value, updateField, text, name, className, nested, id }) {
  return (
    <Fragment>
      <p>{ text }</p>
      {
        typeInput === 'text' ?
          <input
            className = { className }
            type = { typeInput }
            value = { value }
            onChange={ updateField}
            // onChange={e => updateField(e.target.value, name, nested, id)}
            name = { name }/>
        :
          <textarea 
            className = { className }
            type = { typeInput }
            value = { value }
            onChange = { updateField }
            // onChange = {e => updateField(e.target.value, name, nested, id)}
            cols = "50" 
            rows = "20"
            name = { name }></textarea>
      }
    </Fragment>
  )
}

InputCreate.propTypes = {
  type: propTypes.string, 
  value: propTypes.string, 
  placeholder: propTypes.string, 
  onChange: propTypes.func, 
  error: propTypes.string
}

InputCreate.defaultProps = {
  type: '', 
  value: '', 
  placeholder: '', 
  onChange: () => {}, 
  error: ''
}