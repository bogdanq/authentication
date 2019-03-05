import React from 'react'
import styles from './index.css'
import propTypes from 'prop-types'

function Education({ year, institution }) {
  return (
    <div className = { styles.body }>
      <p>{ year }</p>
      <p>Учебное заведение: { institution }</p>
      <hr />
    </div>
  )  
}

Education.propTypes = {
  year: propTypes.string,
  institution: propTypes.string,
}

Education.defaultProps = {
  year: '',
  institution: ''
}

export default Education