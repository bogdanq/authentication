import React from 'react'
import styles from './index.css'
import propTypes from 'prop-types'

export default function History({ company, title, description, startDate, endDate }) {
  return (
    <div className = { styles.body }>
      <p>Название компании: <span>{ company }</span></p>
      <p>Должность: <span>{ title }</span></p>
      <p>Описание: <span>{ description }</span></p>
      <p>Начало работы { startDate } <span>Конец { endDate }</span></p>
      <hr />
    </div>
  )
}

History.propTypes = {
  company: propTypes.string, 
  title: propTypes.string, 
  description: propTypes.string, 
  startDate: propTypes.string, 
  endDate: propTypes.string
}

History.defaultProps = {
  company: '', 
  title: '', 
  description: '', 
  startDate: '', 
  endDate: ''
}
