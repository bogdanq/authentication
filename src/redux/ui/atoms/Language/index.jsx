import React from 'react'
import styles from './index.css'

export default function Language({ title, description }) {
  return (
    <div className = { styles.body }>
      <p>{ title }</p>
      <p>Уровень знаний: { description }</p>
      <hr />
    </div>
  )
}