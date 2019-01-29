import React from 'react'
import Summary from '../../ui/organisms/Summary'
import { NavLink } from 'react-router-dom'

import styles from './index.css'

export default function Private() {
  return (
    <div className = { styles.private }>
    <h1>Мои вакансии</h1>
    <NavLink to = '/create-summary'  className = { styles.menuLink } exact >Создать вакансию</NavLink>
    <h2 className = { styles.privateH2 }>Вакансий всего: 5</h2>
      <Summary />
      <Summary />
      <Summary />
      <Summary />
    </div>
  )
}