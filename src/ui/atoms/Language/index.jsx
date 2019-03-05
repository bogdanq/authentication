import React from 'react'
import styles from './index.css'
import propTypes from 'prop-types'

export default function Language({ title, description }) {
  return (
    <div className = { styles.body }>
      <p>{ title }</p>
      <p>Уровень знаний: { description }</p>
      <hr />
    </div>
  )
}

Language.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
}

Language.defaultProps = {
  title: '',
  description: ''
}
