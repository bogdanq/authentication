import React from 'react'
import styles from './index.css'

export default function Education({ year, institution }) {
  return (
    <div className = { styles.body }>
      <p>{ year }</p>
      <p>Учебное заведение: { institution }</p>
      <hr />
    </div>
  )
}