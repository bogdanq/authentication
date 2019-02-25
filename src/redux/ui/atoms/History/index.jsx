import React from 'react'
import styles from './index.css'

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